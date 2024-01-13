"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React portfolio",
    description: "I created this website myself using NextJs as my frontend tool",
    image: "/images/port.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "CISWP",
    description:
      "Associated with Conestoga College, The Canadian Institute for Safety, Wellness & Performance (CISWP) is committed to building productive and sustainable workplaces through a collaborative and transdisciplinary approach. ",
    image: "/images/cisp.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Checkerchain",
    description: "Checkerchain is a review-2-earn blockchain platform.",
    image: "/images/checkerchain.png",
    tag: ["All", "Product Design"],
    gitUrl: "/",
    previewUrl: "https://checkerchain.com",
  },
  {
    id: 4,
    title: "Social Media Posts",
    description:
      "I have created social media banners for various marketing campaigns",
    image: "/images/social.png",
    tag: ["All", "Graphic Design"],
    gitUrl: "/",
    previewUrl: "https://www.behance.net/gallery/169076747/Social-Media-Posts",
  },
  {
    id: 5,
    title: "The Aroma Restaurant",
    description:
      "The Aroma is a small restaurant that provides authentic Indian and Hakka cuisine.",
    image: "/images/aroma.png",
    tag: ["All", "Graphic Design"],
    gitUrl: "/",
    previewUrl: "https://www.instagram.com/thearomacambridge/",
  },
  {
    id: 6,
    title: "CISWP Product Design",
    description: "Along with the development, I was also responsible for designing the wireframes and UI/UX of CISWP.",
    image: "/images/uicsip.png",
    tag: ["All", "Product Design"],
    gitUrl: "/",
    previewUrl: "https://checkerchain.com",
  },
  {
    id: 7,
    title: "Zoro.to Clone",
    description:
      "During my learning days, I also created a clone of a site that I frequently visited.",
    image: "/images/zorox.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://github.com/Aakash-rai1/Zorox.to",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Website"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Graphic Design"
          isSelected={tag === "Graphic Design"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Product Design"
          isSelected={tag === "Product Design"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgurl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
