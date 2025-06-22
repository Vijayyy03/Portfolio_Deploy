import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
  Download,
  Github,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Journey from "@/components/Journey";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";

const aboutStats = [
  { label: "Years of technical foundation", value: "3+" },
  { label: "Technologies mastered", value: "8+" },
  { label: "Projects & collaborations", value: "4+" },
];

const projects = [
  {
    title: "Pipe Fault Detection System",
    description:
      "A real-time defect detection system for industrial pipelines, built using deep learning and computer vision. Achieved 95% precision across over 10,000 video frames, reducing manual inspection time by 30% and improving operational safety.",
    image: "/assets/pipe.png",
    href: "https://github.com/Vijayyy03",
    techStack: ["Python", "OpenCV", "TensorFlow", "Flask", "React"],
  },
  {
    title: "Crop Yield Prediction Model",
    description:
      "Developed a machine learning model trained on over a decade of agricultural data to predict crop yields with 92% accuracy. Deployed to help farmers make data-driven decisions, improving planning and boosting potential yields.",
    image: "/assets/crop.png",
    href: "https://github.com/Vijayyy03/crop_project",
    techStack: ["Python", "Pandas", "Scikit-learn", "NumPy"],
  },
  {
    title: "HireEase Job Portal",
    description:
      "A full-stack job portal supporting multiple user roles (employers and job seekers). Features include secure registration, job posting, and application management using a robust backend architecture.",
    image: "/assets/HireEase_Job.png",
    href: "https://github.com/Vijayyy03",
    techStack: ["Java", "MySQL", "JDBC"],
  },
  {
    title: "College Admission Predictor",
    description:
      "A web app that predicts students' chances of college admission based on caste and academic performance using a linear regression model. Designed with a clean UI in Streamlit for ease of use.",
    image: "/assets/admission.png",
    href: "https://github.com/Vijayyy03",
    techStack: ["Python", "Streamlit"],
  },
];

const services = [
  {
    service: "Frontend Development",
    description:
      "Creating stellar user interfaces and web experiences using the latest technologies.",
    icon: Code2,
  },
  {
    service: "UX Design",
    description:
      "Building intuitive, user-centric designs that drive engagement and conversion.",
    icon: Frame,
  },
  {
    service: "SEO Optimization",
    description:
      "Enhancing your website's visibility in search engines for increased organic traffic.",
    icon: SearchCheck,
  },
  {
    service: "Responsive Design",
    description:
      "Designing websites that look and perform equally well on all devices and screen sizes.",
    icon: MonitorSmartphone,
  },
  {
    service: "Backend Development",
    description:
      "Developing robust, scalable server-side logic for a wide range of web applications.",
    icon: Eye,
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    const onSelect = () => {
      const newIndex = carouselApi.selectedScrollSnap();
      setPrevIndex(newIndex);
      setCurrent(newIndex + 1);
    };
    carouselApi.on("select", onSelect);
    setPrevIndex(carouselApi.selectedScrollSnap());
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi, prevIndex]);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  Vijay Jagdale.
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-4 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                I am a software engineer with strong fundamentals in Java,
                Python, and SQL, along with expertise in Data Structures,
                Algorithms, and Database Management. I have experience
                developing scalable machine learning solutions, applying deep
                learning and computer vision techniques, gained during an
                internship at BARC. I am passionate about building high-quality
                software products and solving real-world challenges through
                technology.
              </p>
            </div>
            <motion.div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="mt-8 flex flex-col items-start space-y-4"
            >
              <Link href="/assets/Vijay_Jagdale_Resume_2025.pdf" passHref>
                <Button className="shadow-glow-primary">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
              <div className="flex flex-row items-center space-x-1.5">
                <Link
                  href="https://www.linkedin.com/in/vijaysatishjagdale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.pill}
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/Vijayyy03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.pill}
                >
                  GitHub
                </Link>
                <Link
                  href="mailto:jagdalevijay92@gmail.com"
                  className={styles.pill}
                >
                  Email
                </Link>
              </div>
            </motion.div>
            <div className="mt-4">
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Learn more
              </Button>
            </div>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-14 h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="/assets/scene.splinecode" />
            </Suspense>
          </div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <h2 className="py-16  pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]">
              I&apos;m a software engineer with a strong foundation in Java,
              Python, and machine learning, currently pursuing an MCA at
              MIT-WPU. My journey began with a B.Sc. in Information
              Technology, where I built early web and data-driven projects.
              I&apos;ve since advanced into real-world applications—most recently,
              interning at BARC, where I developed deep learning-based
              pipeline inspection tools. My experience spans academic research
              and industry-focused development, with a passion for solving
              impactful problems using code and AI.
            </h2>
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Journey />

        <TechStack />

        {/* Projects */}
        <section id="projects" data-scroll-section>
          {/* Gradient */}
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-purple-500 to-pink-500 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ Projects
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Streamlined digital experiences.
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;ve worked on a variety of projects, from small websites to
              large-scale web applications. Here are some of my favorites:
            </p>

            {/* Carousel */}
            <div className="mt-14">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {projects.map((project, _i) => (
                    <CarouselItem key={project.title} className="md:basis-1/2" style={{ perspective: '1500px' }}>
                      <motion.div
                        key={current}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <Card className="group relative overflow-hidden rounded-lg">
                          <CardHeader className="p-0">
                            {project.image.endsWith(".webm") ? (
                              <video
                                src={project.image}
                                autoPlay
                                loop
                                muted
                                className="aspect-video h-full w-full bg-primary object-cover"
                              />
                            ) : (
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={300}
                                quality={100}
                                className="aspect-video h-full w-full bg-primary object-cover"
                              />
                            )}
                            {/* Always show project title */}
                            <div className="absolute left-0 bottom-0 z-10 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-2 transition-opacity duration-300 group-hover:opacity-0">
                              <span className="text-base font-semibold text-white drop-shadow-sm">{project.title}</span>
                            </div>
                          </CardHeader>

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 p-6 text-center opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                            <CardTitle className="text-lg font-semibold tracking-tight text-white">
                              {project.title}
                            </CardTitle>
                            <p className="mt-2 text-sm text-white/80">
                              {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap justify-center gap-2">
                              {project.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-white"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <Link
                              href={project.href}
                              target="_blank"
                              passHref
                              className="mt-4 text-white/80 transition-colors hover:text-primary hover:drop-shadow-glow-primary"
                            >
                              <Github className="h-6 w-6" />
                            </Link>
                          </div>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>
          </div>
        </section>

        <Certifications />

        {/* Services */}
        <section id="services" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col justify-center py-6 xl:p-6">
                <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Need more info?
                  <br />
                  <span className="text-gradient">I got you.</span>
                </h2>
                <p className="mt-6 max-w-md text-muted-foreground">
                  Here are some of the services I offer. If you have any
                  questions, feel free to reach out.
                </p>
              </div>
              {services.map(({ service, description, icon: Icon }) => (
                <div
                  key={service}
                  className="flex h-full flex-col items-start justify-between rounded-lg bg-secondary/30 p-8 shadow-lg transition-transform hover:scale-105 hover:shadow-primary/30"
                >
                  <Icon className="mb-4 h-8 w-8 text-primary/70" />
                  <span className="text-lg font-semibold tracking-tight text-foreground">
                    {service}
                  </span>
                  <span className="mt-2 text-sm tracking-tighter text-muted-foreground">
                    {description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Let's work together */}
        <section
          id="let's-work-together"
          data-scroll-section
          className="relative mx-auto mb-16 max-w-4xl overflow-hidden rounded-lg bg-secondary/30 shadow-lg transition-all hover:shadow-glow-primary"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative isolate px-6 py-24 sm:px-24 sm:py-32 lg:px-8"
          >
            <h2 className="mx-auto max-w-2xl text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let&apos;s work <span className="text-[#A7A7FF]">together.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-8 text-muted-foreground">
              I&apos;m currently available for freelance work and open to work
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#contact">
                <Button className="bg-[#A7A7FF] text-black hover:bg-[#A7A7FF]/80">Get in touch</Button>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Contact form */}
        <ContactForm />
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#945DD6" />
              <stop offset={1} stopColor="#FF0080" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EA00D9" />
              <stop offset={1} stopColor="#711c91" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
