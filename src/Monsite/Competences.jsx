import React from "react";

function Competences() {
    return(
        <section className="py-16 px-4 md:px-20 bg-blue-100 p-4 rounded-lg text-gray-800">
            <h2 className="text-3xl font-bold mb-6 flex flex-col justify-center items-center text-center">Mes Compétences</h2>
            <ul className="grid grig-cols-2 md:grid-cols-4 gap-4">
                <li className="bg-white p-4 rounded shadow items-center text-center">HTML</li>
                <li className="bg-white p-4 rounded shadow items-center text-center">CSS</li>
                <li className="bg-white p-4 rounded shadow items-center text-center">JavaScript</li>
                <li className="bg-white p-4 rounded shadow items-center text-center">ReactJS</li>
                <li className="bg-white p-4 rounded shadow items-center text-center">Tailwind CSS</li>
                <li className="bg-white p-4 rounded shadow items-center text-center">Git & GitHub</li>
            </ul>
        </section>
    );
}
export default Competences;