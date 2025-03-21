gsap.registerPlugin(ScrollTrigger);
      gsap.to(".scroll-content", {
        x: () => "-300vw", 
        ease: "none",
          scrollTrigger: {
              trigger: ".horizontal-scroll",
              start: "top top",
              end: () => "+=" + document.querySelector(".scroll-content").scrollWidth,
              scrub: true,
              pin: true,
          }
      });