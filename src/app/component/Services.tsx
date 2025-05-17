'use client'
import { motion } from 'framer-motion';

const services = [
  { 
    title: 'Big Data & Analytics', 
    image: '/big-data.png', 
    description: 'We are committed to providing quality products and services that add value to your business and to run your business successfully.' },
  { 
    title: 'Consultancy', 
    image: '/consultancy.jpg', 
    description: 'Our consulting and strategic group offers Business Transformations, Information Technologu Transformation and Human Resource Analytics Transformation' 

  },
  {
    title: 'HR & Staffing', 
    image: '/hr-staffing.jpg', 
    description: 'Blackcoffers offers a full complement of human resource and recruitment services' },
  { 
    title: 'Cybersecurity', 
    image: '/cybersecurity.jpg', 
    description: 'Infuse cybersecurity into your strategy and ecosystem to protect value, help prevent threats and build trust as you grow.' },
  { 
    title: 'Sustainability', 
    image: '/sustainability.jpg', 
    description: 'Sustainability spans environmental, social and governance issues. Today every organization must embrace sustainability for future competitiveness.' },
  { 
    title: 'Metaverse', 
    image: '/metaverse.jpg', 
    description: 'The physical and virtual worlds are blending. The metaverse offers new ways to connect, create and consume. ' },
  { 
    title: 'Consultancy1', 
    image: '/consultancy1.jpg', 
    description: 'Our consulting and strategic group offers Business Transformations, Information Technology Transformation and Human Resource Analytics Transformation.' },
  { 
    
    title: 'Cloud', 
    image: '/cloud.jpg', 
    description: 'Every day, cloud computing becomes more integral in driving reinvention and meeting the ever-changing needs of people around the world.' },
];

const Services: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <section className="bg-black text-white py-12 px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className="w-[290px] h-[350px] bg-gray-900 relative overflow-hidden"
            >
              <div className="relative w-full h-full group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-0 left-0 bg-opacity-70 text-white text-l font-bold px-3 py-1 m-2 rounded-md">
                  {service.title}
                </div>


                <div className="absolute inset-0 bg-black/60 group-hover:bg-black-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex flex-col justify-end p-4">

                  <p className="text-l text-gray-200 mb-3">{service.description}</p>

                  <div className="flex justify-end">
                    <span className="text-white text-sm cursor-pointer hover:underline flex items-center gap-1">
                      Expand
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
