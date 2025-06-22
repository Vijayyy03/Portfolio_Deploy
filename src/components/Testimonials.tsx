import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Vijay consistently demonstrated a deep curiosity and enthusiasm for learning during his time at VSIT. He was one of those students who went beyond the classroom — building real-world projects and exploring tech topics independently. His final-year work showed exceptional clarity in applying core IT concepts to practical scenarios.",
    name: "Professor",
    title: "Vidyalankar School Of Information Technology(VSIT)",
  },
  {
    quote:
      "At MIT-WPU, Vijay stood out as someone who not only mastered complex subjects like Machine Learning and Data Structures but also actively applied them to meaningful use cases. His Crop Yield Prediction Model was a standout example of blending academic theory with real-world impact. A dedicated, thoughtful, and skilled engineer.",
    name: "Faculty Mentor",
    title: "MIT-World Peace University",
  },
  {
    quote:
      "Vijay made an immediate impact during his internship at BARC. He approached complex computer vision challenges with clarity, built scalable ML solutions, and delivered a defect detection system with real-world precision. What set him apart was not just his technical ability, but his consistency, attention to detail, and collaborative mindset. He's the kind of engineer you want on critical projects.",
    name: "Mentor",
    title: "Bhabha Atomic Research Centre(BARC)",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Testimonials() {
  return (
    <section id="testimonials" data-scroll-section>
      <div className="my-24 flex flex-col items-center justify-center gap-y-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-x-2"
        >
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            What Others Say
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex h-full flex-col justify-between rounded-lg bg-secondary/30 p-6 shadow-lg transition-transform duration-300 hover:scale-95 hover:shadow-glow-primary"
            >
              <Quote className="h-8 w-8 text-primary/70" />
              <p className="mt-4 text-base italic text-muted-foreground">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-6 text-right">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 