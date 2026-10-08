import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initAnimations() {
  if (typeof window === 'undefined') return;

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero Entrance Animations
  const heroTitle = document.getElementById('hero-title');
  const heroImg = document.getElementById('hero-img');

  if (heroTitle && heroImg) {
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl.from(heroTitle, {
      y: 40,
      opacity: 0,
      duration: 1.2,
      scale: 0.98,
    });

    heroTl.from(
      heroImg,
      {
        y: 60,
        opacity: 0,
        duration: 1.4,
        scale: 1.05,
      },
      '-=0.8'
    );
  }

  // 2. Scroll Reveals for General Content Sections
  const revealElements = document.querySelectorAll<HTMLElement>(
    '#about h2, #about p, #services h2, #blog h2, #contact-cta h2'
  );

  revealElements.forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: 'power2.out',
    });
  });
}
