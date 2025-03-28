import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, PieChart, LineChart, Building, Users, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Investment Management',
      description: 'Comprehensive portfolio management tailored to your financial goals and risk tolerance.',
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: 'Asset Allocation',
      description: 'Strategic distribution of investments across various asset classes to optimize returns.',
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: 'Financial Planning',
      description: 'Detailed financial planning services to help you achieve your long-term objectives.',
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Corporate Advisory',
      description: 'Expert guidance on mergers, acquisitions, and corporate restructuring.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Wealth Management',
      description: 'Personalized wealth management solutions for high-net-worth individuals.',
    },
    {
      icon: <Coins className="h-8 w-8" />,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and management strategies to protect your investments.',
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
            Comprehensive investment solutions designed to help you achieve your financial goals
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
            <Link to={'/contact'}>
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