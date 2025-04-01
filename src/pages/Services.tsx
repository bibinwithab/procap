import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Landmark,
  DollarSign,
  TrendingUp,
  BarChart3,
  Banknote,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    document.title = "Services - Procap";
  }, []);
  const services = [
    {
      icon: <Landmark  className="h-8 w-8" />,
      title: "Indian Stock Market Trading",
      description:
        "Advanced trading strategies across NSE and BSE exchanges, generating consistent returns through technical and fundamental analysis.",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Forex Market Trading",
      description:
        "Disciplined currency trading focusing on major pairs and emerging markets with proprietary algorithms and strict risk management. ",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "E-mini NQ (Nasdaq) Futures Trading",
      description:
        "Specialized strategies capitalizing on tech market volatility through precise timing and sector analysis.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "E-mini S&P 500 Futures Trading",
      description:
        "Tailored systems for the broader U.S. market combining trend following, mean reversion, and multi-timeframe analysis.",
    },
    {
      icon: <Banknote className="h-8 w-8" />,
      title: "Proprietary Fund Management ",
      description:
        "Trading exclusively with our own capital, ensuring perfect alignment with performance and enabling innovative strategy implementation",
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Mentorship Program",
      description:
        "Personalized guidance, real-time market insights, and trade breakdowns to refine strategies and achieve consistency in live market conditions.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive investment solu ons designed to help you achieve your financial goals with proper 
            risk management.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help you achieve your financial goals
            </p>
            <Link to={"/contact"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Schedule a Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
