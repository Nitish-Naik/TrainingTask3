import React from 'react';

const CallBackSection: React.FC = () => {
  return (
    <section className="bg-black-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center border border-gray-700 p-8 rounded-md shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Request a Call Back</h2>
        <p className="text-xl font-semibold mb-4">Get your business right up there</p>
        <p className="text-base md:text-lg text-gray-300 mb-8">
          When you need intelligent answers to your toughest questions, we’re here 
          <br />to help.
          We’re just a call or email away. Don’t hang back from getting in 
          <br />touch with us.
          We’ll be glad to assist you.
        </p>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
          Request a Call Back
        </button>
      </div>
    </section>
  );
};

export default CallBackSection;
