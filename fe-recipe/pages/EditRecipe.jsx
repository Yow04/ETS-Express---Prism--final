import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { recipeApi } from '../src/services/api';

export default function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await recipeApi.myRecipes();
        const currentRecipe = response.recipes.find(r => r.id === parseInt(id));
        if (currentRecipe) {
          setTitle(currentRecipe.title);
          setIngredients(Array.isArray(currentRecipe.ingredients) 
            ? currentRecipe.ingredients.join(', ')
            : currentRecipe.ingredients);
          setInstructions(Array.isArray(currentRecipe.instructions)
            ? currentRecipe.instructions.join('\n')
            : currentRecipe.instructions);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await recipeApi.update(id, {
        title,
        ingredients: ingredients,
        instructions: instructions,
      });
      navigate('/my-recipes');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
            Edit Resep {title}
          </h2>
          <p className="mt-3 text-xl text-gray-600">
            Perbarui resep masakan Anda
          </p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <div className="bg-white shadow rounded-lg p-6">
          <form onSubmit={handleUpdate} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Judul Resep
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                placeholder="Masukkan judul resep"
              />
            </div>

            <div>
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
                Bahan-bahan
              </label>
              <textarea
                id="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                placeholder="Masukkan bahan-bahan (pisahkan dengan koma)"
              />
            </div>

            <div>
              <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
                Instruksi
              </label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                required
                rows={6}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                placeholder="Masukkan langkah-langkah pembuatan"
              />
            </div>

            <div className="flex justify-end space-x-3">
              <Link
                to="/my-recipes"
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Batal
              </Link>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Update Resep
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
