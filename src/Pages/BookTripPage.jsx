import React from "react";
import { MapPin, Car, MessageSquare } from "lucide-react";

const BookTripPage = () => {
  return (
    <section className="bg-gradient-to-t from-black via-[#0e2a47] to-[#0e2a47] text-white py-16 px-6 md:px-12 mt-18">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">
          Book Your <span className="text-red-600">Trip</span>
        </h2>

        <form className="flex flex-col gap-5">
          {/* From */}
          <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 ring-red-500">
            <MapPin className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="From"
              className="w-full focus:outline-none"
            />
          </div>

          {/* To */}
          <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 ring-red-500">
            <MapPin className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="To"
              className="w-full focus:outline-none"
            />
          </div>

          {/* Vehicle Type */}
          <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 ring-red-500">
            <Car className="text-gray-400 w-5 h-5 mr-2" />
            <select
              className="w-full focus:outline-none bg-transparent text-gray-400"
              defaultValue=""
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="suv">SUV</option>
              <option value="tempo-traveller">Tempo Traveller</option>
              <option value="bus">Bus</option>
              <option value="van">Van</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex items-start border rounded-lg px-3 py-2 focus-within:ring-2 ring-red-500">
            <MessageSquare className="text-gray-400 w-5 h-5 mr-2 mt-1" />
            <textarea
              rows="4"
              placeholder="Leave a message..."
              className="w-full resize-none focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-full font-semibold transition mt-2 cursor-pointer"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookTripPage;
