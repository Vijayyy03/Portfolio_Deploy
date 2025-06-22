import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const journeyData = [
  {
    title: "B.Sc. IT",
    text: "My journey into tech began with a deep curiosity about how things work — especially how code can shape the world around us. During my B.Sc. in Information Technology at Vidyalankar School of Information Technology, I built a strong foundation in core computer science subjects like Networking, Operating Systems, DBMS, and Linux. That period gave me my first real taste of problem-solving through code — and I was hooked.",
    image: "/assets/1.png",
    align: "left",
  },
  {
    title: "MCA",
    text: "While pursuing my Master of Computer Application at MIT World Peace University, I began focusing more on Machine Learning, Web Development, and Data Structures & Algorithms. I applied my learning to real-world problems through hands-on projects — building everything from a College Admission Predictor using Python and Streamlit to a full-stack Job Portal built in Java and MySQL.",
    image: "/assets/2.webp",
    align: "right",
  },
  {
    title: "Internship at BARC",
    text: "The turning point in my journey came during my internship at the Bhabha Atomic Research Centre (BARC). There, I had the opportunity to work on a high-impact project — designing and implementing a machine learning-driven defect detection system for industrial pipelines using Computer Vision and Deep Learning. This experience taught me how to combine precision engineering with scalable design, while also working with cross-functional teams to deploy real-world solutions.",
    image: "/assets/3.jpeg",
    align: "left",
  },
  {
    title: "Today",
    text: "Today, I stand as a problem-solver who loves blending creativity with code. Whether I'm training a neural network, sketching a new UI idea, or debugging SQL queries, I'm driven by a single goal: to build things that matter.",
    image: "/assets/8.jpeg",
    align: "right",
  },
];

export default function Journey() {
  return (
    <section id="journey" data-scroll-section>
      <div className="my-24 flex flex-col justify-start space-y-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            staggerChildren: 0.5,
          }}
          viewport={{ once: true }}
          className="flex items-center gap-x-2"
        >
          <Lightbulb className="text-primary" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Journey: From Curiosity to Real-World Impact
          </h2>
        </motion.div>
        <div className="flex flex-col gap-16">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col gap-8 md:flex-row ${
                item.align === "right" ? "md:flex-row-reverse" : ""
              } items-center`}
            >
              <div className="md:w-1/4">
                <div className="relative h-40 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 md:w-3/4">
                <h3 className="text-2xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 