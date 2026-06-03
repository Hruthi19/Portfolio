// components/home/hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "../../data/socials";
import { getIconComponent } from "../../lib/icons";
import { StarHeader } from "../shared/star-header";

const displayedSkills = [
  "Software Engineer",
  "Full Stack Developer",
  "Backend Engineer",
  "Systems Thinker",
  "AI Enthusiast",
];

const TYPE_SPEED_MS = 85;
const DELETE_SPEED_MS = 45;
const PAUSE_MS = 1200;

export function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [typedSkill, setTypedSkill] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const currentSkill = displayedSkills[currentSkillIndex % displayedSkills.length] ?? "";

  // Parallax effect setup
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 40]);
  const y2 = useTransform(scrollY, [0, 800], [0, 60]);

  useEffect(() => {
    if (!currentSkill) {
      return;
    }

    const isFullyTyped = typedSkill === currentSkill;
    const isFullyDeleted = typedSkill.length === 0;
    const delay = isFullyTyped && !isDeleting
      ? PAUSE_MS
      : isDeleting
        ? DELETE_SPEED_MS
        : TYPE_SPEED_MS;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && isFullyTyped) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isFullyDeleted) {
        setIsDeleting(false);
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % displayedSkills.length);
        return;
      }

      setTypedSkill((currentText) =>
        isDeleting
          ? currentText.slice(0, -1)
          : currentSkill.slice(0, currentText.length + 1)
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [currentSkill, isDeleting, typedSkill]);

  return (
    <StarHeader>
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div className="flex flex-col justify-center space-y-4" style={{ y: y1 }}>
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I&apos;m Hruthi Muggalla
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="h-14 sm:h-16"
                >
                  <div className="relative flex h-full items-center overflow-hidden">
                    <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
                      {typedSkill}
                      <span className="ml-1 inline-block h-7 w-[2px] translate-y-1 animate-pulse bg-primary sm:h-8" />
                    </h2>
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-[600px] text-muted-foreground md:text-xl"
                >
                  Software engineer building full-stack applications and decentralized systems. MS
                  Computer Science graduate at University of Georgia. 
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <Button asChild size="lg" className="group">
                  <Link href="/#projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="/resume.pdf"
                    download="Hruthi_Muggalla_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </motion.div>

              {/* Social Links - Added here from navbar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-3 pt-2"
              >
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.id}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="rounded-full bg-muted/50 hover:bg-primary/10"
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                      >
                        {getIconComponent(social.icon)}
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center"
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-full">
                <Image
                  src="/images/profile.webp"
                  alt="Hruthi Muggalla"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </StarHeader>
  );
}
