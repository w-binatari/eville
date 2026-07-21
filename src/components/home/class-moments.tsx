"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ClassMoment = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  poster: string;
  video: string;
};

const moments: ClassMoment[] = [
  {
    id: "jss",
    title: "Junior Secondary",
    subtitle: "JSS 1–3 · Curious minds, first big steps",
    href: "/programs#secondary",
    poster:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    // Placeholder clip: swap for real classroom footage from the academy
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "sss",
    title: "Senior Secondary",
    subtitle: "SS 1–3 · Exam-ready, future-facing",
    href: "/programs#secondary",
    poster:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: "tertiary",
    title: "Tertiary & Diplomas",
    subtitle: "Skills with weight in the real world",
    href: "/programs#tertiary",
    poster:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "pro",
    title: "Professional Courses",
    subtitle: "Data, design, tech, built for careers",
    href: "/programs#professional",
    poster:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
];

function ClassCard({ moment }: { moment: ClassMoment }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [failed, setFailed] = useState(false);

  const start = async () => {
    setActive(true);
    const video = videoRef.current;
    if (!video || failed) return;
    try {
      video.currentTime = 0;
      await video.play();
    } catch {
      // Autoplay may fail; lift + ring still give the energy.
    }
  };

  const stop = () => {
    setActive(false);
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <Link
      href={moment.href}
      className={cn(
        "group relative block aspect-[4/5] overflow-hidden bg-navy outline-none transition-transform duration-500 ease-out",
        "hover:-translate-y-2 hover:z-10 focus-visible:-translate-y-2",
        active && "ring-2 ring-orange ring-offset-4 ring-offset-paper",
      )}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      onTouchStart={start}
    >
      <Image
        src={moment.poster}
        alt={moment.title}
        fill
        className={cn(
          "object-cover transition duration-700",
          active && videoReady && !failed ? "scale-105 opacity-0" : active ? "scale-105" : "scale-100",
        )}
        sizes="(max-width: 768px) 100vw, 25vw"
      />

      <video
        ref={videoRef}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition duration-700",
          active && videoReady && !failed ? "scale-105 opacity-100" : "scale-100 opacity-0",
        )}
        muted
        loop
        playsInline
        preload="metadata"
        poster={moment.poster}
        onLoadedData={() => setVideoReady(true)}
        onError={() => setFailed(true)}
      >
        <source src={moment.video} type="video/mp4" />
      </video>

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent transition duration-500",
          active ? "opacity-90" : "opacity-70",
        )}
      />

      <div className="absolute inset-x-0 bottom-0 p-5 text-paper sm:p-6">
        <p
          className={cn(
            "text-[10px] uppercase tracking-[0.2em] transition",
            active ? "text-orange" : "text-paper/70",
          )}
        >
          {active ? "Now playing · Peek inside" : "Hover to peek inside"}
        </p>
        <h3 className="mt-2 font-serif text-2xl leading-tight">{moment.title}</h3>
        <p className="mt-1.5 text-sm text-paper/75">{moment.subtitle}</p>
      </div>
    </Link>
  );
}

export function ClassMoments() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.22em] text-orange">Life on campus</p>
            <h2 className="mt-4 font-serif text-3xl text-navy md:text-4xl">
              Meet the classrooms
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Still frames for parents. Motion for students. Hover a pathway to feel the energy, then jump into the full program.
            </p>
          </div>
          <Link
            href="/programs"
            className="text-sm tracking-wide text-navy underline-offset-4 transition hover:text-orange hover:underline"
          >
            All pathways →
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {moments.map((moment) => (
            <ClassCard key={moment.id} moment={moment} />
          ))}
        </div>
      </div>
    </section>
  );
}
