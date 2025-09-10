import React from "react";

function Portfolio() {
    return(
        <section className="py-16 px-4 md:px-20 bg-white text-gray-800">
            <h2 className="flex flex-col justify-center items-center text-center text-3xl font-bold mb-6">Mes Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">Site Vitrine</h3>
                    <p className="mt-2">Un site vitrine pour une petite entreprise locale.</p>
                </div>
                <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">Portfolio Personnel</h3>
                    <p className="mt-2">Le site que vous visitez actuellement !</p>
                </div>
            </div>
        </section>
    );
}
export default Portfolio;