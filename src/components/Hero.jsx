import React from "react";
import desktop from "../assets/image-hero-desktop.png";
import mobile from "../assets/image-hero-mobile.png";
import { partners } from "../constants/partners";

const Hero = () => {
  return (
    <div className="md:container flex flex-col-reverse py-20 md:grid md:gap-10 md:grid-cols-2 md:place-items-center md:mx-auto">
      <article className="text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
        <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl mb-5">
          Make remote work
        </h1>
        <p className="text-gray mb-5 md:mb-10 font-bold">
          Get your team sync, no matter your location. Streamline processes,
          create team rituals and watch productivity soar.
        </p>
        <button className="border border-black rounded-xl px-6 py-2 transition-all duration-300 bg-black text-white hover:bg-white hover:text-black hover:scale-[1.2] font-bold animate-pulse">
          Learn more
        </button>
        <div className="grid grid-cols-4 gap-5 md:gap-10 mt-10 place-items-center md:place-items-start">
          {partners.map((item) => {
            return (
              <img
                src={item.image}
                alt="partners"
                key={item.id}
                className="hover:scale-[1.2] transition-all duration-300 cursor-pointer"
                onMouseOver={(e) => (e.currentTarget.src = item.onHover)}
                onMouseOut={(e) => (e.currentTarget.src = item.image)}
              />
            );
          })}
        </div>
      </article>
      <article>
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <img src={mobile} alt="" className="w-[500px]" />
        </picture>
      </article>
    </div>
  );
};

export default Hero;
