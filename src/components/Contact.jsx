import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://your/api/point", formData);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    alert(
      "Thank you for giving your response. Someone from our team will contact you shortly!"
    );
    window.location.href = "/";
  };

  return (
    <>
      <div className="bg-blue-600 h-14" />
      <div className="md:flex md:mt-24 border-2 py-24 shadow-xl shadow-blue-400">
        <div className="md:ml-60 flex-col">
          <h2 className="font-bold text-2xl">Contact No:</h2>
          <p className="font-medium text-xl md:mt-5">1800-7234-00</p>
          <h2 className="font-bold text-2xl md:mt-5">Email:</h2>
          <p className="text-xl font-medium md:mt-5">xyxyx@gmail.com</p>
          <h2 className="font-bold text-2xl md:mt-5">Address:</h2>
          <p className="font-medium text-xl md:mt-5">Delhi,India</p>
        </div>
        <form className="flex-col md:ml-24" method="POST">
          <b>Name:</b>
          <br />
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter your name"
            className="border-2 border-blue-900 font-medium w-[40vw] p-2 rounded-xl"
          />
          <br />
          <b> Email:</b>
          <br />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your Email"
            className="border-2 border-blue-900 font-medium w-[40vw] p-2 rounded-xl"
          />
          <br />
          <b>Message:</b>
          <br />
          <textarea
            name="msg"
            onChange={handleChange}
            placeholder="Enter your query/message"
            className="border-2 border-blue-900 font-medium w-[40vw] p-2 rounded-xl"
          />
          <br />
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-bl from-blue-500 via-black to-blue-600 md:py-2 px-4 rounded-md text-white mt-5 animate-bounce shadow-md shadow-blue-400 hover:shadow-inner"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
