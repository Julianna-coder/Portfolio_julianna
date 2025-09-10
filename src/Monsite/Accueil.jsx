import React from "react";

function Accueil() {
    return(
        <section className="flex flex-col items-center justify-center text-center py-24 text-white bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-6xl font-bold">Bienvenue sur mon Site</h1>
            <p className="mt-4 text-lg md:text-2xl">Développeuse Web passionnée</p>
        </section>
    );
}
export default Accueil;