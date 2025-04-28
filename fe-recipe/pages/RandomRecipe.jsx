import { useState } from 'react';

export default function RandomRecipe() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const spoonacularApiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

  const fetchRandomRecipe = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${spoonacularApiKey}&number=1`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch random recipe');
      }
      
      const data = await response.json();
      setRecipe(data.recipes[0]);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching the recipe');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900">Random Recipe Generator</h2>
          <p className="mt-3 text-xl text-gray-600">
            Temukan resep-resep menarik dengan sekali klik!
          </p>
          <button
            onClick={fetchRandomRecipe}
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Generate Random Recipe'}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {recipe && (
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="relative">
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-3xl font-bold text-white">{recipe.title}</h3>
                <div className="flex mt-2 space-x-4">
                  <span className="text-white flex items-center">
                    <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {recipe.readyInMinutes} min
                  </span>
                  <span className="text-white flex items-center">
                    <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {recipe.servings} servings
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Ingredients</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {recipe.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id} className="text-gray-700">
                      {ingredient.original}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Instructions</h4>
                <div 
                  className="prose max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                />
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex flex-wrap gap-2">
                  {recipe.diets.map((diet) => (
                    <span key={diet} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {diet}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}