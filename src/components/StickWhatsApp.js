import { useEffect, useRef, useState } from "react";

import { FaWhatsapp } from "react-icons/fa";



export default function StickyWhatsapp({}) {
  const ref = useRef(null);
  const prevScroll = useRef(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollDiff = window.scrollY - prevScroll.current;
      setScrollY((v) =>
        Math.min(Math.max(v - scrollDiff, 0), ref.current?.offsetHeight || 0)
      );

      prevScroll.current = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div
        className={["fixed transform z-50 bottom-10 right-10 p-3"].join(" ")}
        ref={ref}
        style={{ transform: `translate(12px, ${scrollY}12px)` }}
      >
        <a
          href={
            "https://wa.me/5562994946120?text=Olá,%20gostaria%20de%20conhecer%20a%20BitBee"
          }
          target="_blank"
          className="block bg-green-500 text-white p-2 lg:p-4 rounded-full"
        >
          <FaWhatsapp className=" w-12 h-12 lg:w-12 lg:h-12" />
        </a>
      </div>
    </>
  );
}