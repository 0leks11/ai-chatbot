// src/components/AboutSection/AboutSection.tsx
import React from "react";
import ProfileAvatarL from "./ProfileAvatarL";
import ProfileAvatarS from "./ProfileAvatarS";
import AboutNameplate from "./AboutNameplate";
import AboutText from "./AboutText";
import { IconCard } from "../footer/IconCard";
import { footerList } from "../../data/footerList";
import ActiveButton from "./ActiveButton";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <section
      className={`bg-black text-white min-w-[320px] max-w-5xl mx-auto p-6 ${className}`}
    >
      <div className="flex flex-col items-start">
        <div className="mb-4">
          <AboutNameplate />
        </div>
        <div className="flex gap-6">
          {footerList.map((contact, index) => {
            return <IconCard key={index} contact={contact} />;
          })}
        </div>
      </div>

      <div className="my-6 border-b border-gray-700" />
      <div className="item-start">
        <h2 className="text-3xl font-bold mb-4">About</h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8 ml-4 mb-2 md:mb-0">
          <AboutText />
        </div>
        <div className="ml-3 md:w-1/2">
          <p className="leading-relaxed text-3xl font-semibold mb-3">
            I am a front-end engineer specializing in creating web products for
            companies of various scales.
          </p>
          <div className="mt-3">
            <ActiveButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
