import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, animate }) => {
    return (
        <motion.div
            className="bg-bit-bee-blue p-6 rounded-lg h-40 flex items-center justify-center shadow-lg"
            initial={{ opacity: 0, x: -100 }} 
            animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} 
            transition={{ duration: 0.5 }} 
        >
            <div className="text-center text-white">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-200">{description}</p>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
