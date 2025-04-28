import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Selamat Datang di Recipe Cook
          </h2>
          <p className="mt-3 text-xl text-gray-600 sm:mt-4">
            Sistem manajemen resep pribadi Anda
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/add-recipe" className="h-full">
            <div className="bg-white overflow-hidden shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
              <div className="px-6 py-8 flex flex-col h-full">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">Add Recipe</h3>
                    <p className="mt-1 text-base text-gray-500">Buat resep andalanmu</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/my-recipes" className="h-full">
            <div className="bg-white overflow-hidden shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
              <div className="px-6 py-8 flex flex-col h-full">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">My Recipes</h3>
                    <p className="mt-1 text-base text-gray-500">Koleksi resep yang sudah kamu buat</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/random-recipe" className="h-full">
            <div className="bg-white overflow-hidden shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
              <div className="px-6 py-8 flex flex-col h-full">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">Random Recipe</h3>
                    <p className="mt-1 text-base text-gray-500">Temukan resep acak yang menginspirasi</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hal yang bisa kamu lakukan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900">Simpan resep</h4>
              <p className="mt-2 text-sm text-blue-700">Simpan resep yang sudah kamu buat</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-900">Ubah resep</h4>
              <p className="mt-2 text-sm text-green-700">Ubah resep apabila ada inovasi</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-900">Acak resep</h4>
              <p className="mt-2 text-sm text-purple-700">Temukan inspirasi dengan resep acak dari Spoonacular</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
