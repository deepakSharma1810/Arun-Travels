import React, { useEffect } from "react";

const packages = [
  {
    id: 1,
    title: "Ayodhya Spiritual Tour",
    description:
      "Experience the divine energy of Ayodhya with visits to Ram Janmabhoomi, Hanuman Garhi, and more.",
    duration: "2D / 1N",
    image: "/toursPlace/Ayodhya-Spiritual-Tour.webp",
  },
  {
    id: 2,
    title: "Varanasi Heritage Tour",
    description:
      "Explore the ghats of Varanasi, witness the Ganga Aarti, and feel the essence of ancient India.",
    duration: "3D / 2N",
    image: "/toursPlace/Varanshi.png",
  },
  {
    id: 3,
    title: "Prayagraj Sangam Tour",
    description:
      "Visit the holy Triveni Sangam, explore historical temples, and enjoy a peaceful river view.",
    duration: "2D / 1N",
    image: "/toursPlace/sangam.avif",
  },
  {
    id: 4,
    title: "Ayodhya–Varanasi Combo Tour",
    description:
      "Discover two of India’s most sacred cities in one spiritual journey with guided experiences.",
    duration: "4D / 3N",
    image: "/toursPlace/ayodhya-varanshi.webp",
  },
];

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return null;
};

const TourPackages = () => {
  return (
    <div className="bg-gray-50 text-gray-800 mt-18">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 via-orange-50 to-red-100 text-black text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Explore Our Tour Packages
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Discover India’s beauty and spirituality with our curated travel
          experiences — designed just for you.
        </p>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 overflow-hidden"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-3 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-red-600">
                    {pkg.title}
                  </h3>
                  <span className="text-gray-600 text-lg font-medium text-red-600">
                    {pkg.duration}
                  </span>
                </div>
                <p className="text-gray-700">{pkg.description}</p>
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/919026169131?text=Hello%20I%20want%20to%20book%20the%20" +
                        encodeURIComponent(pkg.title),
                      "_blank"
                    )
                  }
                  className="w-full bg-red-600 text-white py-2 rounded-full font-semibold mt-2 hover:bg-red-700 transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-purple-100 via-red-100 to-purple-100 text-black text-center py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Need a Custom Tour Package?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          We can design a personalized travel plan according to your comfort and
          budget.
        </p>
        <button
          onClick={() =>
            window.open(
              "https://wa.me/919026169131?text=Hello%20I%20want%20to%20customize%20a%20tour%20package!",
              "_blank"
            )
          }
          className="bg-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transition cursor-pointer"
        >
          Chat With Us
        </button>
      </section>

      <div className="h-16"></div>
    </div>
  );
};

export default TourPackages;
