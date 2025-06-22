import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { useState, useEffect } from "react";

const techStack = [
  "JavaScript", "Python", "Java", "SQL", "React", "Node.js", "Tailwind CSS", 
  "GitHub", "Git", "Docker", "VS Code", "HTML/CSS", "REST APIs", "Linux", 
  "Pandas", "Scikit-learn", "OpenCV", "Streamlit", "Data Structures", 
  "Algorithms", "DBMS", "OOP", "Next.js", "Computer Vision"
];

// Fisher-Yates shuffle algorithm
const shuffleArray = (array: string[]) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex]!, array[currentIndex]!
    ];
  }

  return array;
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
    },
  }),
};

export default function TechStack() {
  const [shuffledTechs, setShuffledTechs] = useState<string[]>([]);

  useEffect(() => {
    setShuffledTechs(shuffleArray([...techStack]));
  }, []);

  return (
    <section id="tech" data-scroll-section>
      <div className="my-24 flex flex-col items-center justify-center gap-y-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-x-2"
        >
          <BrainCircuit className="h-10 w-10 text-[#94b9ff]" />
          <h2 className="text-4xl font-bold tracking-tight text-[#94b9ff] sm:text-5xl">
            My Tech Stack
          </h2>
        </motion.div>
        <div className="flex max-w-4xl flex-wrap justify-center gap-4">
          {shuffledTechs.filter((tech): tech is string => typeof tech === "string").map((tech, i) => (
            <motion.div
              key={tech}
              custom={i}
              variants={tagVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              viewport={{ once: true }}
              className="rounded-full bg-primary/10 px-4 py-2 text-sm text-primary/80 backdrop-blur-sm md:text-base hover:shadow-glow-primary"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 