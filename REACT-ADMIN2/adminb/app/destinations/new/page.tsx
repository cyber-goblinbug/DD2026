"use client";
import { useState } from "react";   
export default function NewDestinationPage() {
    const [formData, setFormData] = useState({
        name: "",
        page: "",
        description: "",
        image: ""
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData);
    };
  return (

    <div className="max-w-[600px] w-full">
      <h1 className="text-3xl font-bold">Create New Destination</h1>
      <form className="mt-4">
        <div>
            <label className="block w-full font-bold " htmlFor="name">Name</label>
            <input type="text" 
            id="name"  
            name="name"
            value=""
            
            className="border border-grey-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>




      </form>
      {/* Add your form fields here */}
    </div>
  );
}