import React, { useEffect } from "react";

const images = [
  { src: "/Gallery/sangam.jpg" },
  { src: "/Gallery/sangam-01.jpg" },
  { src: "/Gallery/nepal.jpg" },
  { src: "/Gallery/nepal-01.jpg" },
  { src: "/Gallery/haridwar.jpg" },
  { src: "/Gallery/VaishnuDevi.jpg" },
  { src: "/Gallery/KhatuShyam.jpg" },
  { src: "/Gallery/LalQuila.jpg" },
  { src: "/Gallery/VaishnuDevi-02.jpg" },
];

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return null;
};

const Gallery = () => {
  return (
    <div className="bg-gray-50 text-gray-800 mt-18">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 via-orange-50 to-red-100 text-black text-center py-15 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
        <p className="max-w-7xl mx-auto text-lg md:text-xl">
          Explore our gallery to experience the divine essence of Ayodhya, Kashi
          (Varanasi), and Prayagraj. From the tranquil glow of the Ganga and
          Saryu Aartis to the peaceful ghats echoing with ancient chants, each
          frame captures the soul of devotion. Witness the grandeur of sacred
          temples, the spiritual rhythm of the Triveni Sangam, and the timeless
          traditions that define these holy cities. Every image tells a story of
          faith, culture, and serenity — inviting you to embark on your own
          sacred journey of discovery.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 py-16">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-red-100 via-orange-50 to-red-100 text-black text-center py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to Explore India?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Get in touch with us and let’s plan your next journey.
        </p>
        <button
          onClick={() =>
            window.open(
              "https://wa.me/919026169131?text=Hello%20I%20want%20to%20book%20a%20tour!",
              "_blank"
            )
          }
          className="bg-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transition cursor-pointer"
        >
          Enquire Now on WhatsApp
        </button>
      </section>
    </div>
  );
};

export default Gallery;
