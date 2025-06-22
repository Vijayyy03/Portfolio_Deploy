import { motion } from "framer-motion";
import { Award, Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const certifications = [
  {
    title: "Introduction to SQL",
    issuer: "IBM (edX)",
    href: "https://drive.google.com/file/d/1FxgeUQB95C2Pme2MgBf3Nyz9BMKgpHHW/view?usp=drive_link",
  },
  {
    title: "OpenCV Bootcamp",
    issuer: "OpenCV University",
    href: "https://drive.google.com/file/d/1NUqw9olBddPM7SBawMSDYuXS0n_LYVaE/view?usp=drive_link",
  },
  {
    title: "Introduction to Programming using JavaScript",
    issuer: "Microsoft",
    href: "https://drive.google.com/file/d/1Pt1SHxr2a3HvOFZXA8QUNiKno6R1YE7V/view?usp=drive_link",
  },
  {
    title: "Python for Data Science",
    issuer: "EXCELR",
    href: "https://drive.google.com/file/d/1mIugfzfjxfqu0mf5rdgFD6i7dRmJh4_R/view?usp=drive_link",
  },
  {
    title: "HACK MIT Hackathon",
    issuer: "MIT",
    href: "https://drive.google.com/file/d/1JgXbQVjkOioF7Sci9Hul2aS8f0vtvzzt/view?usp=drive_link",
  },
  {
    title: "MongoDB Basics",
    issuer: "MongoDB",
    href: "https://drive.google.com/file/d/1Hjgjvq1RHE-EleVRKdHt3NCLyHuMTSUd/view?usp=drive_link",
  },
  {
    title: "Microsoft Data Analyst Associate",
    issuer: "Honeywell",
    href: "https://drive.google.com/file/d/1wge6Qc43tjKGCZOJHtUCkROx9tUEyTBG/view?usp=drive_link",
  },
  {
    title: "NDG Linux Essentials",
    issuer: "NDG",
    href: "https://drive.google.com/file/d/1wQZGDtHEmnOyyV6o9P3oPD8qXdGlSwCa/view",
  },
  {
    title: "Gemini Workshop",
    issuer: "GDSC",
    href: "https://drive.google.com/file/d/1ssdPj2fsgsEGWl30SumCJHta2NyI2Dxg/view?usp=drive_link",
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

export default function Certifications() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const handlePreview = (url: string) => setPreviewUrl(url);
  const handleClose = () => setPreviewUrl(null);

  return (
    <section id="certifications" data-scroll-section>
      <div className="my-24 flex flex-col items-center justify-center gap-y-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-x-2"
        >
          <Award className="h-10 w-10 text-primary" />
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Certifications & Achievements
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex h-full transform-gpu flex-col justify-between rounded-lg bg-secondary/30 p-6 text-left shadow-lg transition-transform hover:scale-105 hover:shadow-primary/30">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-end">
                  <button
                    className="flex items-center gap-1 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-sm font-medium text-primary shadow-md transition-all duration-200 hover:bg-primary/20 hover:shadow-glow-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                    onClick={() => handlePreview(cert.href)}
                    type="button"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Preview
                  </button>
                  <Link href={cert.href} target="_blank" passHref className="ml-2">
                    <Award className="h-6 w-6 text-primary/70" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Modal Overlay */}
      {previewUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="relative w-[90vw] max-w-xl bg-background rounded-lg shadow-lg p-4"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-lg text-primary hover:text-red-500"
              onClick={handleClose}
            >
              ×
            </button>
            <iframe
              src={previewUrl.replace("/view", "/preview")}
              className="w-full h-[60vh] rounded"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
} 