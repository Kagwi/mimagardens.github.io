import React from 'react';
import { motion } from 'framer-motion';
import EventBookingForm from './forms/EventBookingForm';

const EventBooking = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-emerald-50 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Book Your Event</h2>
          <EventBookingForm />
        </motion.div>
      </div>
    </section>
  );
};

export default EventBooking;