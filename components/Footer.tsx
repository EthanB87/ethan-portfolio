import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

const Footer = () => {
    const [formData, setFormData] = useState({
        subject: "",
        message: ""
      });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:ethan@brockmanfamily.ca?subject=${subject}&body=${body}`;
    setFormData({ subject: '', message: '' });
  };
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#1e293b]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
            <div>
                <h1 className="heading_main">
                    Send Me a <span className="text-yellow-300">Message!</span>
                </h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <p className="lg:text-[20px] text-yellow-300 flex items-center">
                     &copy; Ethan Brockman 2024 
                    <a href="https://www.linkedin.com/in/ethanbrockman/" target="_blank" className="ml-4">
                        <Image src="/img/Linkedin.png" alt="LinkedIn Icon" width={45} height={45}/>
                    </a>
                    <a href="https://github.com/EthanB87" target="_blank" className="ml-4">
                        <Image src="/img/github-mark-white.png" alt="GitHub Icon" width={45} height={45}/>
                    </a>
                </p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} 
                    className="py-[0.5rem] mt-[1.5rem] mb-1 w-full outline-none text-white bg-gray-900 rounded-md px-5"/>
                    <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}
                    className="py-[0.5rem] mb-[1.5rem] mt-1 w-full outline-none text-white bg-gray-900 rounded-md px-5" rows={5}></textarea>
                     <button type="submit" className="relative h-[50px] w-40 overflow-hidden bg-yellow-300 text-white shadow-2xl font-semibold
                    transition-all duration-300 hover:bg-blue-600 hover:text-yellow-300">
                        <span className="absolute inset-0 flex items-center justify-center transition-all">
                            Send
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default Footer