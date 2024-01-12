"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Adobe Creative Suite</li>
        <li>Figma</li>
        <li>Video Editing</li>
        <li>Android Development (Kotlin, Java)</li>
        <li>Web Development (Wordpress, React)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelors in Computing (Hons.)</li>
        <li>+2 Science</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Certifications</li>
        <li>Microsoft Certifications</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center mt-20 py-12 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.png"
          alt="about image"
          width={820}
          height={820}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4"> About me</h2>
          <p className="text-base ld:text-lg">
            As a versatile professional in the realm of design and development,
            you'll find me immersed in the intersection of creativity and
            functionality. With a foundation in graphic design, I've expanded my
            expertise into the dynamic spheres of UI/UX design and frontend
            development. My journey began with a passion for visual
            storytelling, honing my skills in creating captivating designs that
            resonate with audiences. Over time, I've ventured into crafting
            seamless user experiences, leveraging my understanding of user
            behaviors and interactions. My foray into frontend development has
            equipped me with a holistic perspective, enabling me to bridge the
            gap between design aesthetics and technical implementation. This
            multidisciplinary background fuels my ability to conceptualize
            innovative solutions and translate them into intuitive, visually
            stunning interfaces that captivate and engage users. 
          </p>
          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}
              Skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}
              Education{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {""}
              Certifications{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
