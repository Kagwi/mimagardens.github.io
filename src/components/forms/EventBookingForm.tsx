import React, { FormEvent } from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

const EventBookingForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      eventType: formData.get('eventType') as string,
      guests: formData.get('guests') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      requirements: formData.get('requirements') as string,
    };
    
    const email = 'mimagardens2121@gmail.com';
    const subject = encodeURIComponent('Event Booking Request');
    const body = encodeURIComponent(
      `Event Type: ${data.eventType}\nNumber of Guests: ${data.guests}\nDate: ${data.date}\nTime: ${data.time}\nAdditional Requirements: ${data.requirements}`
    );
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Type
          </label>
          <select 
            name="eventType"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Birthday Party">Birthday Party</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Guests
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="number"
              name="guests"
              required
              min="1"
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Expected guests"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="date"
              name="date"
              required
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Time
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="time"
              name="time"
              required
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Requirements
        </label>
        <textarea
          name="requirements"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
          placeholder="Tell us more about your event..."
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors"
        >
          Submit Booking Request
        </button>
      </div>
    </form>
  );
};

export default EventBookingForm;
