import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { recipeApi } from '../src/services/api';

export default function MyRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await recipeApi.myRecipes();
        setRecipes(response.recipes || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await recipeApi.delete(id);
      setRecipes(recipes.filter(recipe => recipe.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
            Resep Saya
          </h2>
          <p className="mt-3 text-xl text-gray-600">
            Kelola resep masakan Anda
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map(recipe => (
            <div key={recipe.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">{recipe.title}</h3>
                <div className="mt-2">
                  <h4 className="text-sm font-medium text-gray-700">Bahan-bahan:</h4>
                  <p className="mt-1 text-sm text-gray-500">{recipe.ingredients}</p>
                </div>
                <div className="mt-2">
                  <h4 className="text-sm font-medium text-gray-700">Cara Membuat:</h4>
                  <p className="mt-1 text-sm text-gray-500">{recipe.instructions}</p>
                </div>
                <div className="mt-4 flex justify-end space-x-3">
                  <Link
                    to={`/edit-recipe/${recipe.id}`}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(recipe.id)}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
