import React from "react";
import { useState } from "react";


function Contact() {
    const [FormData,setFormData]=useState({nom: "",email: "",message: ""});
    const handleChange=(e)=>{
        setFormData({...FormData, [e.target.name]: e.target.value});
    };
    const handleSubmit=(e) =>{
        e.preventDefault();
        alert("Message envoyé ! Merci " +FormData.nom + "!");
        setFormData({nom: "", email: "", message: ""});
    };

    return(
        <section className="py-16 px-4 md:px-20 bg-blue-100 p-6 rounded-lg text-gray-800">
            <h2 className="flex flex-col justify-center items-center text-center text-3xl font-bold mb-6">Contactez-moi</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
                <div className="mb-4">
                    <label className="block mb-2 font-semibold " htmlFor="nom">Nom</label>
                    <input type="text" name="nom" id="nom" value={FormData.com} onChange={handleChange} 
                    className="w-full p-2 border rounded bg-gray-100" required/>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={FormData.email} onChange={handleChange}
                     className="w-full p-2 border rounded bg-gray-100" required/>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-semibold" htmlFor="message" >Message</label>
                    <textarea name="message" id="message" rows="2" value={FormData.message} onChange={handleChange} 
                    className="w-full p-2 border rounded bg-gray-100" required/>
                </div>
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold 
                py-2 px-4 rounded">Envoyer</button>
            </form>
        </section>
    );
}
export default Contact;