import React, { FormEvent } from 'react';
import { createEmailLink } from '../../utils/emailUtils';

const ContactForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };
    
    window.location.href = createEmailLink(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>
      <div>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>
      <button
        type="submit"
        className="bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;