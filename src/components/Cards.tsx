import '../../Styles/Card.css'

export function Cards(){
    return (
        <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-md md:max-w-2xl px-2">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
                <div>
                    <div className="p-4 md:p-5">
                        <p className="font-bold text-xl md:text-2xl">Titre </p>
                        <p className="text-gray-700 md:text-lg">Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie.  </p>
                    </div>
                    <div className="p-4 md:p-5">
                        <div className="sm:flex sm:justify-between sm:items-center">
                            <div>
                                <div className="text-lg text-gray-700">NOM Auteur  </div>
                            </div>
                            <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-lg rounded-lg shadow-md">Lire plus</button>
                        </div>
                        <div className="mt-3 text-gray-600 text-sm md:text-base">Pour débutants </div>
                        <div className="mt-3 text-gray-600 text-sm md:text-base"> Date  </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Cards