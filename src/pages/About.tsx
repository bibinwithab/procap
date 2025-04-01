import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Target, Clock, Globe, ShieldCheck  } from "lucide-react";
import { desc } from "framer-motion/client";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Procap";
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl">
            With more than 5 years of experience in the Industry, Our team does investment in various assets both domestic and international.
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Award className="h-12 w-12" />,
                title: "Market Expertise",
                description:
                  "Elite professionals with proven track records across multiple asset classes, delivering precision execution and adaptive stratergy implementation.",
              },
              {
                icon: <Globe className="h-12 w-12" />,
                title: "Global Reach",
                description:
                  "Strategic diversification across domestic and international markets, optimizing opportunity capture white minimizing correlation risks.",
              },
              {
                icon: <ShieldCheck  className="h-12 w-12" />,
                title: "Risk Discipline",
                description:
                  "Propritetary risk management framework ensuring capital preservation, with systematic position sizing and quantitative drawdown controls.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Saran Raj",
                role: "CEO & Managing Director",
                desc: "5+ years of trading experience in Indian markets",
                image:
                  "ceo.jpg",
              },
              {
                name: "Bibin Jebason J",
                role: "Chief Operating Officer",
                desc: "4+ years of trading experience in US and Forex markets",
                image:
                  "coo.jpg",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-700">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
