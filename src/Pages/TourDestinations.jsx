import React, { useEffect } from "react";

const tours = [
  {
    title: "Delhi Tour",
    desc: "Delhi, the capital of India, is a vibrant metropolis that encapsulates the essence of the nation.",
    img: "/toursPlace/delhi-tour.jpg",
  },
  {
    title: "Uttar Pradesh Tour",
    desc: "Situated in northern India, Uttar Pradesh offers a perfect mix of culture, spirituality, and heritage.",
    img: "/toursPlace/Uttar-Pradesh-tour.jpg",
  },
  {
    title: "Golden Triangle Tour",
    desc: "Explore India’s iconic route covering Delhi, Agra, and Jaipur — a journey through history and elegance.",
    img: "/toursPlace/Golden-Triangle-tour.JPG",
  },
  {
    title: "Rajasthan Tour",
    desc: "Experience royal palaces, golden deserts, and timeless traditions of the land of kings — Rajasthan.",
    img: "/toursPlace/Rajasthan-Tour.jpg",
  },
  {
    title: "Uttarakhand Tour",
    desc: "Discover the serene beauty of Devbhoomi, the land of gods, filled with mountains and sacred rivers.",
    img: "/toursPlace/Uttarakhand-Tour.jpg",
  },
  {
    title: "Himachal Tour",
    desc: "Snowy peaks, peaceful valleys, and vibrant towns — Himachal Pradesh is a paradise for nature lovers.",
    img: "/toursPlace/Himachal-Tour.jpg",
  },
  {
    title: "Punjab Tour",
    desc: "Feel the warmth and energy of Punjab, known for its rich culture, golden fields, and spiritual places.",
    img: "/toursPlace/Punjab-Tour.jpg",
  },
  {
    title: "Jammu and Kashmir Tour",
    desc: "Known as ‘Heaven on Earth’, Jammu & Kashmir offers mesmerizing landscapes and tranquil beauty.",
    img: "/toursPlace/Jammu-Kashmir-Tour.jpg",
  },
  {
    title: "North India Tour",
    desc: "A complete journey across North India’s heritage, spirituality, and breathtaking landscapes.",
    img: "/toursPlace/North-India-Tour.webp",
  },
];

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return null;
};

const TourDestinations = () => {
  return (
    <div className="bg-gray-50 min-h-screen mt-18">
      <ScrollToTop />
      {/* Header Section */}
      <div className="text-center py-16 md:py-20 bg-gradient-to-r from-red-100 via-orange-50 to-red-100">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Tour Destinations
        </h1>
        <p className="mt-3 text-gray-600 text-base md:text-lg">
          Explore the beauty of India with Progressive Tours & Travels
        </p>
      </div>

      {/* Destinations Grid */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="h-56 w-full">
                <img
                  src={tour.img}
                  alt={tour.title}
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="p-3 flex flex-col justify-between flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {tour.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  {tour.desc}
                </p>
                <div className="flex justify-between">
                  <button
                    onClick={() =>
                      window.open(
                        `https://wa.me/919026169131?text=Hi,%20I%20am%20interested%20in%20the%20${tour.title}!`,
                        "_blank"
                      )
                    }
                    className="mt-auto bg-red-600 text-white py-1.5 px-5 rounded-full font-medium shadow hover:bg-red-700 cursor-pointer"
                  >
                    Enquire Now
                  </button>
                  <button
                    onClick={() => (window.location.href = `tel:+919026169131`)}
                    className="mt-auto bg-red-600 text-white py-1.5 px-5 rounded-full font-medium shadow hover:bg-red-700 cursor-pointer"
                  >
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TourDestinations;
