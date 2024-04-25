import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

// gsap.registerPlugin(ScrollTrigger)

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
    //   scrollTrigger: "#highlights",
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
    //   scrollTrigger: "#highlights",
      opacity: 1,
      delay: 0.25,
      y: 0,
      stagger: 0.25
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12  w-full md:flex items-end justify-between">
          <h2 id="title" className="section-heading">
            Get the highlights.
          </h2>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="" className="ml-2"/>
            </p>
          </div>
        </div>
        
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
