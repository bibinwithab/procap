import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    document.title = "Contact Us - Procap";
  }, []);

  const onSubmit = async (e: {target:{name: string, value: string}}) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "87305e04-91b6-4fad-bae0-e1956467442e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setShowConfirmation(true);
        setTimeout(() => {
          setShowConfirmation(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-20 z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">
            Get in Touch
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-50">
            Connect with our team of experts to explore opportunities and find
            the right solutions for your financial growth.
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-xl p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
              Send Us a Message
            </h2>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400"
                  size={18}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-10 pl-10 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 transition-all duration-200"
                  required
                />
              </div>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-10 pl-10 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 transition-all duration-200"
                  required
                />
              </div>
              <div className="relative">
                <Phone
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400"
                  size={18}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-10 pl-10 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 transition-all duration-200"
                />
              </div>
              <div className="pb-6 relative">
                <MessageSquare
                  className="absolute left-3 top-3 text-blue-400"
                  size={18}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="pl-10 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 resize-none transition-all duration-200"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white  py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium text-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Phone className="h-8 w-8 text-blue-600" />,
                title: "Phone",
                info: "+91 9972348498, +91 9741515609",
              },
              {
                icon: <Mail className="h-8 w-8 text-blue-600" />,
                title: "Email",
                info: "procapinvestment@gmail.com",
              },
              {
                icon: <MapPin className="h-8 w-8 text-blue-600" />,
                title: "Address",
                info: (
    <>
      102, 3<sup>rd</sup> Cross, 2<sup>nd</sup> Block, Vishwapriya Nagar, Begur, Bangalore - 560068
    </>
  ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">{item.info}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Popup */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed bottom-8 right-8 bg-white rounded-lg shadow-2xl p-4 flex items-center space-x-3 border-l-4 border-green-500 z-50"
          >
            <CheckCircle className="text-green-500 h-6 w-6" />
            <span className="text-gray-800 font-medium">
              Message sent successfully!
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
