"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./project.module.css";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://assets.codepen.io/16327/portrait-image-1.jpg",
  "https://assets.codepen.io/16327/portrait-image-2.jpg",
  "https://assets.codepen.io/16327/portrait-image-3.jpg",
  "https://assets.codepen.io/16327/portrait-image-4.jpg",
  "https://assets.codepen.io/16327/portrait-image-5.jpg",
  "https://assets.codepen.io/16327/portrait-image-6.jpg",
  "https://assets.codepen.io/16327/portrait-image-7.jpg",
  "https://assets.codepen.io/16327/portrait-image-8.jpg",
];

export default function Project() {
  useEffect(() => {
    const horizontalSections = gsap.utils.toArray(`.${styles.horizGalleryWrapper}`);

    horizontalSections.forEach((sec) => {
      const pinWrap = sec.querySelector(`.${styles.horizGalleryStrip}`);

      let pinWrapWidth;
      let horizontalScrollLength;

      function refresh() {
        if (!pinWrap) return;
        pinWrapWidth = pinWrap.scrollWidth;
        horizontalScrollLength = pinWrapWidth - window.innerWidth;
      }

      refresh();

      gsap.to(pinWrap, {
        scrollTrigger: {
          scrub: true,
          trigger: sec,
          pin: true,
          pinSpacing: true,
          start: "center center",
          end: () => `+=${pinWrap.scrollWidth}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
        x: () => -(pinWrap.scrollWidth - window.innerWidth),
        ease: "none",
      });

      ScrollTrigger.addEventListener("refreshInit", refresh);
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <section className={`${styles.panel} ${styles.plain}`}>
        <h2 className="text-white text-4xl md:text-8xl font-black uppercase">Projects</h2>
      </section>

      <section id="portfolio">
        <div className={styles.containerFluid}>
          <div className={styles.horizGalleryWrapper}>
            <div className={styles.horizGalleryStrip}>
              {images.map((src, i) => (
                <div className={styles.projectWrap} key={i}>
                  <img src={src} alt="" className="rounded-2xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.panel} ${styles.plain}`}>
        <h2 className="text-white text-4xl md:text-8xl font-black uppercase tracking-tighter">
          Work with us
        </h2>
      </section>
    </>
  );
}