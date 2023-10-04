import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logoz" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open("https://tailwindcss.com/");
          }}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articales With <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reding with summize, an open-source article summarizer
        that transforms lengthy artical into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
