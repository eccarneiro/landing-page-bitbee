import React, { useState } from 'react';

const technologies = [
  {
    name: "React",
    img: "https://www.cdnlogo.com/logos/r/85/react.svg",
  },
  {
    name: "React Native",
    img: "https://www.cdnlogo.com/logos/r/85/react.svg",
  },
  {
    name: "Ruby on Rails",
    img: "https://www.svgrepo.com/show/376345/rails.svg",
  },
  {
    name: "Next",
    img: "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg",
  },
  {
    name: "Node",
    img: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
  },
  {
    name: "Typescript",
    img: "https://cdn-icons-png.freepik.com/512/919/919832.png",
  },
  {
    name: "PostgreSQL",
    img: "https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png",
  },
  {
    name: "AWS",
    img: "https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png",
  },
  {
    name: "Digital Ocean",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyNhQ4PXXaY6f9VeCMSfDjEdd5r3S8-3mEg&s",
  },
  {
    name: "Figma",
    img: "https://cdn.icon-icons.com/icons2/2429/PNG/512/figma_logo_icon_147289.png",
  },
];

const Technologies = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-black py-20 mt-24 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-bit-bee-yellow mb-14">
        Tecnologias que usamos
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-6 justify-center">
        {technologies.map((tech, idx) => (
          <div
            key={idx}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 mb-4 mx-auto rounded-full overflow-hidden bg-black p-1 transition-all duration-300 ease-in-out transform ${
                hoveredIndex === idx
                  ? 'bg-gradient-to-r from-blue-500 to-yellow-500 scale-110'
                  : 'bg-gray-700'
              }`}
            >
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="text-center">
              <span
                className={`text-white font-semibold text-sm sm:text-base md:text-lg mt-2 block transition-all duration-300 ease-in-out transform ${
                  hoveredIndex === idx ? 'scale-110' : ''
                }`}
              >
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
