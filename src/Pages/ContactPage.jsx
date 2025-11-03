import React, { useEffect, useState } from "react";
import {
  MessageSquare,
  Mail,
  Phone,
  User,
  Clock,
  Calendar,
} from "lucide-react";

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return null;
};

const ContactPage = () => {
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
      // window.location.href = `tel:+91${phone}`;
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
    <section className="bg-[#0e2a47] text-white py-16 px-6 md:px-12 mt-18">
      <ScrollToTop />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch with <span className="text-red-600">Us</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Planning a trip to{" "}
            <span className="text-red-600 font-semibold">Ayodhya</span> or
            anywhere across India? Progressive Tours & Travels is here to make
            your journey smooth and memorable. Whether it’s a family vacation,
            group trip, or business travel, we ensure a hassle-free experience
            from start to finish.
          </p>

          <div className="space-y-4 text-gray-200">
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-red-600" />
              +91 902 616 9131
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-red-600" />
              info@progressivetourtravels.com
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
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
              <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 ring-orange-500">
                <Clock className="text-gray-400 w-5 h-5 mr-2" />
                <select
                  onChange={(e) => setOption(e.target.value)}
                  value={option}
                  className="w-full focus:outline-none bg-transparent text-gray-600"
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

            {/* Message */}
            {/* {option === "call-now" && (
              <div>
                <div className="flex items-start border rounded-lg px-3 py-2 focus-within:ring-2 ring-red-600">
                  <MessageSquare className="text-gray-400 w-5 h-5 mr-2 mt-1" />
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full resize-none focus:outline-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
            )} */}

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
      </div>

      {/* Map */}
      <div className="max-w-6xl mx-auto mt-12">
        <iframe
          title="Ayodhya Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14390.286198792187!2d82.18881215!3d26.79995515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07d773d7a24b%3A0xb5f244d18cddcf8!2sAyodhya%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1695135124214!5m2!1sen!2sin"
          className="w-full h-72 rounded-2xl border-none"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
