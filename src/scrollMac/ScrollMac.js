"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Dock.module.css";

const MIN = 48;
const MAX = 120;
const BOUND = MIN * Math.PI;
// About Projects Contact Experiences Skills
const items = [
  { src: "https://assets.codepen.io/16327/2D-star.png",     alt: "star" },
  { src: "https://assets.codepen.io/16327/2D-wobble.png",   alt: "wobble" },
  { src: "https://assets.codepen.io/16327/2D-windmill.png", alt: "windmill" },
  { src: "https://assets.codepen.io/16327/2D-sparkle.png",  alt: "sparkle" },
  { src: "https://assets.codepen.io/16327/2D-lightning.png",alt: "lightning" },
  { src: "https://assets.codepen.io/16327/2D-flower.png",   alt: "flower" },
  { src: "https://assets.codepen.io/16327/2D-diamond.png",  alt: "diamond" },
  { src: "https://assets.codepen.io/16327/2D-keyframe.png", alt: "keyframe" },
  { src: "https://assets.codepen.io/16327/3D-combo.png",    alt: "combo" },
  { src: "https://assets.codepen.io/16327/2D-label.png",    alt: "label" },
  { src: "https://assets.codepen.io/16327/3D-cone.png",     alt: "cone" },
  { src: "https://assets.codepen.io/16327/3D-hoop.png",     alt: "hoop" },
];

export default function Dock() {
  const dockRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    const dock = dockRef.current;
    const icons = iconRefs.current;
    const firstIcon = icons[0];

    gsap.set(icons, { transformOrigin: "50% 120%", height: 40 });
    gsap.set(dock, { position: "relative", height: 60 });

    function updateIcons(pointer) {
      icons.forEach((icon, i) => {
        const distance = i * MIN + MIN / 2 - pointer;
        let scale = 1;
        let x = 0;

        if (-BOUND < distance && distance < BOUND) {
          const rad = (distance / MIN) * 0.5;
          scale = 1 + (MAX / MIN - 1) * Math.cos(rad);
          x = 2 * (MAX - MIN) * Math.sin(rad);
        } else {
          x = (-BOUND < distance ? 2 : -2) * (MAX - MIN);
        }

        gsap.to(icon, { duration: 0.3, x, scale });
      });
    }

    function onMouseMove(e) {
      const offset = dock.getBoundingClientRect().left + firstIcon.offsetLeft;
      updateIcons(e.clientX - offset);
    }

    function onMouseLeave() {
      gsap.to(icons, { duration: 0.3, scale: 1, x: 0 });
    }

    dock.addEventListener("mousemove", onMouseMove);
    dock.addEventListener("mouseleave", onMouseLeave);

    return () => {
      dock.removeEventListener("mousemove", onMouseMove);
      dock.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.toolbar} ref={dockRef}>
        {items.map((item, i) => (
          <li
            key={i}
            className={styles.toolbarItem}
            ref={(el) => (iconRefs.current[i] = el)}
          >
            <a className={styles.toolbarLink} href="#!">
              <img className={styles.toolbarImg} src={item.src} alt={item.alt} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}