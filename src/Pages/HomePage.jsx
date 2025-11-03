import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, User, Clock, Calendar } from "lucide-react";

const toursCity = [
  {
    name: "Adventure",
    image: "/toursCity/adventure.jpg",
    tour: "Tour",
  },
  {
    name: "Religious",
    image: "/toursCity/religious.jpg",
    tour: "Tour",
  },
  {
    name: "Culture & Heritage",
    image: "/toursCity/culture.jpg",
    tour: "Tour",
  },
  {
    name: "North India",
    image: "/toursCity/north-india.jpg",
    tour: "Tour",
  },
];

const toursPlace = [
  {
    name: "Rishikesh Haridwar Tour Package",
    image: "/toursPlace/rishikesh-haridwar.jpg",
    tour: "Tour",
  },
  {
    name: "Golden Triangle Tour Package",
    image: "/toursPlace/Golden-Triangle-tour.JPG",
    tour: "Tour",
  },
  {
    name: "Varnasi Sarnath Prayagraj Tour Package",
    image: "/toursPlace/Varanshi.png",
    tour: "Tour",
  },
  {
    name: "Taj Mahal Tour Package ",
    image: "/toursPlace/taj-mahal.jpg",
    tour: "Tour",
  },
];

const tripOptions = [
  {
    id: 1,
    name: "Delhi",
    image: "/toursPlace/delhi.jpg",
  },
  {
    id: 2,
    name: "Uttar Pradesh",
    image: "/toursPlace/Uttar-Pradesh.jpg",
  },
  {
    id: 3,
    name: "Himachal",
    image: "/toursPlace/Himachal.jpg",
  },
  {
    id: 4,
    name: "Uttrakhand",
    image: "/toursPlace/Uttrakhand.jpg",
  },
];

const hotelData = [
  {
    id: 1,
    name: "Wanna Stay Ayodhya - Free Drop to Ram Mandir",
    description:
      "Family-friendly hotel near Ram Mandir with in-house dining & early morning puja assistance.",
    images: [
      "/hotels/Hotel-03.avif",
      "/hotels/Hotel-01.avif",
      "/hotels/Hotel-02.avif",
      "/hotels/Hotel-04.avif",
    ],
    link: "https://www.makemytrip.com/hotels/hotel-details/?hotelId=202410291304534884&_uCurrency=INR&checkin=10302025&checkout=10312025&city=CTAYA&country=IN&lat=26.76218&lng=82.19365&locusId=CTAYA&locusType=city&rank=2&regionNearByExp=3&roomStayQualifier=2e0e&rsc=1e2e0e&searchText=Ayodhya&mtkeys=undefined",
  },
  {
    id: 2,
    name: "Heritage Lodge - Varanasi",
    description:
      "Heritage property offering Ganga-facing rooms and guided aarti passes.",
    images: [
      "/images/varanasi-room1.jpg",
      "/images/varanasi-room2.jpg",
      "/images/varanasi-room3.jpg",
      "/images/varanasi-hotel.jpg",
    ],
  },
  {
    id: 3,
    name: "Budget Dharamshala - Prayagraj",
    description:
      "Clean, simple lodging for pilgrims at affordable rates with shared dining options.",
    images: [
      "/images/prayagraj-room1.jpg",
      "/images/prayagraj-room2.jpg",
      "/images/prayagraj-room3.jpg",
      "/images/prayagraj-hotel.jpg",
    ],
  },
];

const stories = [
  { id: 1, image: "/images/story1.jpg" },
  { id: 2, image: "/images/story2.jpg" },
  { id: 3, image: "/images/story3.jpg" },
  { id: 4, image: "/images/story4.jpg" },
  { id: 5, image: "/images/story5.jpg" },
];

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return null;
};

const HomePage = () => {
  const [option, setOption] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;

    if (!name.trim()) newErrors.name = "Please enter your full name.";
    if (!phoneRegex.test(phone))
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    if (!option) newErrors.option = "Please choose an option.";

    if (option === "schedule-call") {
      if (!scheduleDate) newErrors.date = "Please select a date.";
      if (!scheduleTime) newErrors.time = "Please select a time.";

      if (scheduleDate && scheduleTime) {
        const selectedDateTime = new Date(`${scheduleDate}T${scheduleTime}`);
        const now = new Date();
        if (selectedDateTime < now) {
          newErrors.date = "Please select a future date and time.";
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (option === "call-now") {
      window.location.href = `tel:+919026169131`;
      return;
    }

    if (option === "schedule-call") {
      const text = `Hello, I’d like to schedule a call.\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📅 Date: ${scheduleDate}\n🕒 Time: ${scheduleTime}\n💬 Message: ${
        message || "I want to plan a trip."
      }`;

      const whatsappURL = `https://wa.me/919026169131?text=${encodeURIComponent(
        text
      )}`;
      window.open(whatsappURL, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 mt-18">
      <ScrollToTop />
      {/* HERO */}
      <header className="relative w-full">
        <div className="h-[300px] md:h-[580px] w-full overflow-hidden relative">
          <img
            src="hero.jpg"
            alt="Hero"
            className="w-full h-full object-cover block"
          />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Travel That Matches Your Mood */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Travel That Matches Your Mood
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {toursCity.map((tour, i) => (
              <article
                key={i}
                className="rounded-xl overflow-hidden shadow-md bg-white relative"
              >
                <img
                  src={tour.image}
                  alt={`card-${i}`}
                  className="w-full h-70 object-cover"
                />
                <div className="w-full p-4 absolute top-50 text-center text-white bg-gradient-to-t from-black">
                  <h3 className="font-semibold text-center">{tour.name}</h3>
                  <p className="text-sm mt-1">{tour.tour}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Trending Travel Ideas */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Travel That Matches Your Mood
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {toursPlace.map((tour, i) => (
              <article
                key={i}
                className="rounded-xl overflow-hidden shadow-md bg-white"
              >
                <img
                  src={tour.image}
                  alt={`card-${i}`}
                  className="w-full h-65 object-cover "
                />
                <div className="p-4">
                  <h3 className="font-semibold">{tour.name}</h3>
                  <Link to="/contact-us">
                    <button className="text-sm text-gray-500 mt-1 border px-4 py-1.5 rounded bg-red-600 text-white cursor-pointer">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Link to="/tour-destinations">
              <p className="px-6 py-2 cursor-pointer transition rounded bg-red-600 text-white">
                Explore More
              </p>
            </Link>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl text-center font-semibold mb-4">
            India Tour Packages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {tripOptions.map((trip, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow overflow-hidden"
              >
                <div className="h-80 bg-gray-200 relative">
                  <img
                    src={trip.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2  bg-amber-50 px-5 py-2 rounded font-semibold">
                    {trip.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Link to="/tour-destinations">
              <p className="px-6 py-2 cursor-pointer transition rounded bg-red-600 text-white">
                View All Destinatons
              </p>
            </Link>
          </div>
        </section>

        {/* Vehicles */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl text-center font-semibold mb-4">
            Tourist Vehicles in India - Rent and Travel in Luxury
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              "Hatchback",
              "Sedan",
              "SUV",
              "Tempo Traveller",
              "Innova",
              "Coach",
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-1.5 shadow text-center"
              >
                <div className="h-10 bg-gray-100 rounded-md flex items-center justify-center font-semibold">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#0e2a47] py-16 px-6 md:px-12 mb-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left Form Box */}
            <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-center mb-6">
                Enter Your <span className="text-red-600">Details</span>
              </h3>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 ring-red-600">
                    <User className="text-gray-400 w-5 h-5 mr-2" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full focus:outline-none"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 ring-red-600">
                    <Phone className="text-gray-400 w-5 h-5 mr-2" />
                    <input
                      type="tel"
                      placeholder="10-digit Phone Number"
                      className="w-full focus:outline-none"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Option */}
                <div>
                  <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 ring-red-500">
                    <Clock className="text-gray-400 w-5 h-5 mr-2" />
                    <select
                      onChange={(e) => setOption(e.target.value)}
                      value={option}
                      className="w-full focus:outline-none bg-transparent"
                    >
                      <option value="" disabled>
                        Choose an Option
                      </option>
                      <option value="call-now">Call Now</option>
                      <option value="schedule-call">Schedule a Call</option>
                    </select>
                  </div>
                  {errors.option && (
                    <p className="text-red-500 text-sm mt-1">{errors.option}</p>
                  )}
                </div>

                {/* Schedule Date & Time */}
                {option === "schedule-call" && (
                  <div>
                    <div className="flex flex-col gap-3 border rounded-lg px-3 py-3 focus-within:ring-2 ring-red-600">
                      <label className="text-gray-600 text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-red-600" />
                        Select Date & Time
                      </label>
                      <div className="flex gap-3">
                        <input
                          type="date"
                          className="w-1/2 border rounded-lg px-2 py-1 focus:outline-none"
                          value={scheduleDate}
                          onChange={(e) => setScheduleDate(e.target.value)}
                        />
                        <input
                          type="time"
                          className="w-1/2 border rounded-lg px-2 py-1 focus:outline-none"
                          value={scheduleTime}
                          onChange={(e) => setScheduleTime(e.target.value)}
                        />
                      </div>
                    </div>
                    {(errors.date || errors.time) && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.date || errors.time}
                      </p>
                    )}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-full font-semibold transition"
                >
                  {option === "schedule-call"
                    ? "Schedule via WhatsApp"
                    : option === "call-now"
                    ? "Call Now"
                    : "Submit"}
                </button>
              </form>
            </div>

            {/* Right Content */}
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">
                Stay <span className="text-red-600">Connected</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Finding the best travel agency in Ayodhya can be challenging
                with so many options available. At Progressive Tours & Travels,
                we make your choice easy by offering trusted and personalized
                travel services. As one of the most reliable and authorized
                travel companies in Ayodhya, we specialize in crafting
                customized India and Ayodhya tour packages for families, groups,
                and corporate travelers. With years of experience and excellent
                customer reviews, we take pride in delivering seamless travel
                experiences across all regions of India — making us the
                preferred choice for travelers seeking quality, comfort, and
                affordability.
              </p>

              <div className="flex flex-col gap-2 text-gray-200">
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-red-600" />
                  +91 902 616 9131
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-red-600" />
                  info@progressivetourtravels.com
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Section */}
        {/* <section className=" py-8 px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Popular Tours & Hotel Booking
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelData.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
              > */}
        {/* Image Grid */}
        {/* <div className="grid grid-cols-2 grid-rows-2 h-82">
                  {hotel.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={hotel.name}
                      className="object-cover w-full h-full"
                    />
                  ))}
                </div> */}

        {/* Details */}
        {/* <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {hotel.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {hotel.description}
                  </p>
                  <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2 rounded-md transition">
                    Book Now
                  </button>
                </div>
              </div> */}
        {/* ))} */}
        {/* </div> */}
        {/* </section> */}
      </main>
    </div>
  );
};

export default HomePage;
