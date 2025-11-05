import React, { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return null;
};

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 mt-18">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 via-orange-50 to-red-100 text-black text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          We are a leading travel agency based in Ayodhya, specializing in
          tailor-made tour packages across India, designed to create
          unforgettable travel experiences.
        </p>
      </section>

      {/* Who We Are Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-red-600">
          Who We Are
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          Since our inception, we’ve committed ourselves to delivering
          personalized, high-quality travel services. Based in Ayodhya, we
          specialize in crafting both custom and pre-designed tour packages for
          destinations throughout India.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          Whether you’re planning a heritage tour, an adventure in the hills, or
          a serene getaway, our team of experienced travel professionals tailors
          each itinerary to your preferences, ensures smooth logistics, and
          offers genuine hospitality every step of the way.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-600">
            Our Mission & Vision
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            <strong>Vision:</strong> To be recognized as a top service provider
            in the travel sector, known for transparency, authenticity, and
            exceptional quality.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            <strong>Mission:</strong> To offer innovative, engaging tour
            packages that allow our customers to explore off-beat and iconic
            destinations in India — all while enjoying hassle-free logistics,
            personalized service, and value-oriented pricing.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-red-600">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="text-center bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-red-600">
              Tailored Itineraries
            </h3>
            <p className="text-base leading-relaxed text-gray-700">
              We design experiences that match your interests, style, and budget
              — not one-size-fits-all.
            </p>
          </div>
          <div className="text-center bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-red-600">
              End-to-End Service
            </h3>
            <p className="text-base leading-relaxed text-gray-700">
              From transport and accommodation to guides and local support, we
              cover every detail for you.
            </p>
          </div>
          <div className="text-center bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-red-600">
              Trusted & Experienced
            </h3>
            <p className="text-base leading-relaxed text-gray-700">
              With years of experience in India’s inbound tourism, we have the
              expertise and local networks to deliver memorable trips.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-red-100 via-orange-50 to-red-100 text-black text-center py-8 px-4">
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

export default AboutPage;
