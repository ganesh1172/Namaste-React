import { useState } from "react";
import contimg from "../Images/Contact-Us.jpg";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="container mt-12 mx-auto flex justify-between items-center">
      <div className="w-6/12">
        <img src={contimg} alt="Contact us" />
      </div>
      <div className="w-6/12 text-center">
        <h1 className="text-3xl font-bold font-mono mb-4">Contact us</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="mx-auto block p-2 mb-4 w-10/12 border-2 rounded-lg border-black focus:outline-none focus:border-blue-800"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="mx-auto block p-2 mb-4 w-10/12 border-2 rounded-lg border-black focus:outline-none focus:border-blue-800"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="mx-auto block p-2 mb-4 w-10/12 border-2 rounded-lg border-black focus:outline-none focus:border-blue-800"
            placeholder="Type your Message here..."
            required
          ></textarea>
          <button
            className="px-4 py-2 text-lg font-semibold rounded-lg bg-blue-300 hover:bg-red-300"
            type="submit"
          >
            Submit
          </button>
          {message && (
            <h1 className="my-4 text-xl font-semibold text-center text-blue-800">
              Thanks for contacting FoodieHub, We will reply ASAP.
            </h1>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
