const projects = [
  {
    title: "Toyota brochure",
    category: "Grafisch ontwerp",
    software: "Photoshop, InDesign",
    layout: "spreads",
    image: "images/toyota-brochure/page-01.png",
    images: [
      "images/toyota-brochure/page-01.png",
      "images/toyota-brochure/page-02.png",
      "images/toyota-brochure/page-03.png",
      "images/toyota-brochure/page-04.png",
      "images/toyota-brochure/page-05.png",
      "images/toyota-brochure/page-06.png",
      "images/toyota-brochure/page-07.png",
      "images/toyota-brochure/page-08.png",
      "images/toyota-brochure/page-09.png",
      "images/toyota-brochure/page-10.png",
      "images/toyota-brochure/page-11.png",
      "images/toyota-brochure/page-12.png",
      "images/toyota-brochure/page-13.png",
      "images/toyota-brochure/page-14.png",
      "images/toyota-brochure/page-15.png",
      "images/toyota-brochure/page-16.png",
    ],
    description:
      "Voor deze schoolopdracht heb ik een informatieve brochure ontworpen voor een zelfgekozen bedrijf. Ik koos voor Toyota vanwege de sterke en herkenbare huisstijl, wat ik een leuke uitdaging vond. In de brochure heb ik tekst, beeld en typografie gecombineerd tot een overzichtelijke publicatie met een strakke zwart-witte basis en rode accenten die aansluiten bij de uitstraling van het merk.",
  },
  {
    title: "Biermerk ontwerp",
    category: "Merkidentiteit",
    software: "Illustrator, Photoshop",
    layout: "pages",
    image: "images/hopke-merk/poster.png",
    images: [
      "images/hopke-merk/poster.png",
      "images/hopke-merk/onderzoek-page-1.png",
      "images/hopke-merk/onderzoek-page-2.png",
      "images/hopke-merk/onderzoek-page-3.png",
      "images/hopke-merk/onderzoek-page-4.png",
      "images/hopke-merk/onderzoek-page-5.png",
      "images/hopke-merk/onderzoek-page-6.png",
    ],
    oldDescription:
      "Voor deze schoolopdracht heb ik een complete merkidentiteit ontwikkeld voor mijn zelfbedachte biermerk Hopke. Tijdens het ontwerpproces heb ik veel onderzoek gedaan en verschillende ideeën uitgeprobeerd om tot een sterk eindresultaat te komen. Ik heb veel tijd en aandacht in dit project gestoken en ben trots op hoe het uiteindelijk is geworden. Het hoogtepunt was het moment waarop we de ontworpen stickers daadwerkelijk op bierflessen mochten plakken, waardoor het ontwerp echt tot leven kwam en ik goed kon zien hoe het in de praktijk zou werken.",
    description:
      "Voor deze schoolopdracht heb ik een complete merkidentiteit ontwikkeld voor mijn zelfbedachte biermerk Hopke. Tijdens het ontwerpproces heb ik veel onderzoek gedaan en verschillende ideeën uitgeprobeerd om tot een sterk eindresultaat te komen. Ik heb veel tijd en aandacht in dit project gestoken en ben trots op hoe het uiteindelijk is geworden.",
  },
  {
    title: "Huisstijlhand-boek",
    category: "Corporate Identity",
    software: "Photoshop, Illustrator",
    layout: "pages",
    image: "images/make-your-sign-handboek/beeldmerk-card.png",
    images: [
      "images/make-your-sign-handboek/handboek-page-01.png",
      "images/make-your-sign-handboek/handboek-page-02.png",
      "images/make-your-sign-handboek/handboek-page-03.png",
      "images/make-your-sign-handboek/handboek-page-04.png",
      "images/make-your-sign-handboek/handboek-page-05.png",
      "images/make-your-sign-handboek/handboek-page-06.png",
      "images/make-your-sign-handboek/handboek-page-07.png",
      "images/make-your-sign-handboek/handboek-page-08.png",
      "images/make-your-sign-handboek/handboek-page-09.png",
      "images/make-your-sign-handboek/handboek-page-10.png",
    ],
    description:
      "Tijdens mijn stage heb ik een huisstijlhandboek ontwikkeld waarin alle richtlijnen voor het gebruik van het logo, de kleuren en de typografie zijn vastgelegd. Ik heb veel aandacht besteed aan een consistente en professionele uitstraling die perfect aansluit bij de huisstijl van het bedrijf.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  splitHeroTitle();
  initLoader();
  initNavigation();
  initScrollProgress();
  initReveals();
  initCounters();
  initSkills();
  initCursor();
  initMagneticItems();
  initRippleButtons();
  initProjectCards();
  initProjectModal();
  initParticles();
  initGsapEnhancements();
});

function initLoader() {
  const release = () => {
    window.setTimeout(() => document.body.classList.remove("is-loading"), 650);
  };

  if (document.readyState === "complete") {
    release();
  } else {
    window.addEventListener("load", release, { once: true });
  }
}

function splitHeroTitle() {
  const splitElements = document.querySelectorAll("[data-split]");
  let globalIndex = 0;

  splitElements.forEach((element) => {
    const words = element.textContent.trim().split(/\s+/);
    element.textContent = "";

    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "word";

      [...word].forEach((char) => {
        const letter = document.createElement("span");
        letter.className = "letter";
        letter.style.setProperty("--i", globalIndex);
        letter.textContent = char;
        wordSpan.appendChild(letter);
        globalIndex += 1;
      });

      element.appendChild(wordSpan);
      if (wordIndex < words.length - 1) {
        element.appendChild(document.createTextNode(" "));
      }
    });
  });
}

function initNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      menu.classList.toggle("is-open", !isOpen);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      const target = id && document.querySelector(id);

      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      if (toggle && menu) {
        toggle.setAttribute("aria-expanded", "false");
        menu.classList.remove("is-open");
      }
    });
  });
}

function initScrollProgress() {
  const bar = document.querySelector(".scroll-progress");
  const spotlight = document.querySelector(".ambient__spotlight");

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    if (bar) bar.style.transform = `scaleX(${progress})`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });

  window.addEventListener(
    "pointermove",
    (event) => {
      if (!spotlight) return;
      spotlight.style.setProperty("--mx", `${event.clientX}px`);
      spotlight.style.setProperty("--my", `${event.clientY}px`);
    },
    { passive: true }
  );
}

function initReveals() {
  const revealItems = document.querySelectorAll("[data-reveal]");
  const timeline = document.querySelector(".timeline");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));

  if (timeline) {
    const timelineObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        timeline.classList.add("is-visible");
        timelineObserver.disconnect();
      },
      { threshold: 0.2 }
    );
    timelineObserver.observe(timeline);
  }
}

function initCounters() {
  const stats = document.querySelectorAll(".stat");

  const animateCounter = (stat) => {
    if (stat.dataset.done) return;
    stat.dataset.done = "true";

    const target = Number(stat.dataset.count || 0);
    const suffix = stat.dataset.suffix || "";
    const output = stat.querySelector("strong");
    const duration = 1350;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      output.textContent = `${Math.round(target * eased)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) animateCounter(entry.target);
      });
    },
    { threshold: 0.45 }
  );

  stats.forEach((stat) => observer.observe(stat));
}

function initSkills() {
  const skills = document.querySelectorAll(".skill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const level = entry.target.dataset.level || 0;
        entry.target.style.setProperty("--level", `${level}%`);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.35 }
  );

  skills.forEach((skill) => observer.observe(skill));
}

function initCursor() {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");

  if (!canHover || !dot || !ring) return;

  document.body.classList.add("has-cursor");

  let ringX = 0;
  let ringY = 0;
  let mouseX = 0;
  let mouseY = 0;

  const move = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  };

  const render = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(render);
  };

  window.addEventListener("pointermove", move, { passive: true });
  render();

  document
    .querySelectorAll("a, button, input, textarea, [role='button']")
    .forEach((item) => {
      item.addEventListener("pointerenter", () => document.body.classList.add("cursor-active"));
      item.addEventListener("pointerleave", () => document.body.classList.remove("cursor-active"));
    });
}

function initMagneticItems() {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!canHover) return;

  document.querySelectorAll(".magnetic").forEach((item) => {
    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      item.style.transform = `translate3d(${x * 0.12}px, ${y * 0.16}px, 0)`;
    });

    item.addEventListener("pointerleave", () => {
      item.style.transform = "";
    });
  });
}

function initRippleButtons() {
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;
      button.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 700);
    });
  });
}

function initProjectCards() {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  document.querySelectorAll(".project-card").forEach((card) => {
    const open = () => openProject(Number(card.dataset.project || 0));

    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      open();
    });

    if (!canHover) return;

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--ry", `${x * 7}deg`);
      card.style.setProperty("--rx", `${y * -7}deg`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--ry", "0deg");
      card.style.setProperty("--rx", "0deg");
    });
  });
}

function initProjectModal() {
  const modal = document.querySelector("#project-modal");
  if (!modal) return;

  modal.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", closeProject);
  });

  modal.querySelector("[data-prev-image]")?.addEventListener("click", () => {
    changeModalImage(-1);
  });

  modal.querySelector("[data-next-image]")?.addEventListener("click", () => {
    changeModalImage(1);
  });

  modal.querySelector("[data-zoom-out]")?.addEventListener("click", () => {
    changeModalZoom(-1);
  });

  modal.querySelector("[data-zoom-reset]")?.addEventListener("click", () => {
    setModalZoom(1);
  });

  modal.querySelector("[data-zoom-in]")?.addEventListener("click", () => {
    changeModalZoom(1);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeProject();
    }

    if (!modal.classList.contains("is-open")) return;

    if (event.key === "ArrowLeft") {
      changeModalImage(-1);
    }

    if (event.key === "ArrowRight") {
      changeModalImage(1);
    }

    if (event.key === "+" || event.key === "=") {
      changeModalZoom(1);
    }

    if (event.key === "-") {
      changeModalZoom(-1);
    }

    if (event.key === "0") {
      setModalZoom(1);
    }
  });
}

let lastFocusedElement = null;
let activeProjectIndex = 0;
let activeImageIndex = 0;
let modalZoom = 1;

function openProject(index) {
  const safeIndex = Number.isFinite(index) && projects[index] ? index : 0;
  const project = projects[safeIndex];
  const modal = document.querySelector("#project-modal");
  const title = document.querySelector("#modal-title");
  const category = document.querySelector("#modal-category");
  const software = document.querySelector("#modal-software");
  const softwareCard = software && software.closest(".project-meta");
  const description = document.querySelector("#modal-description");
  const info = document.querySelector("#modal-info");
  const gallery = document.querySelector("#modal-gallery");
  const closeButton = modal && modal.querySelector("[data-close-modal]:not(.project-modal__backdrop)");

  if (!modal || !title || !category || !software || !description || !info || !gallery) return;

  lastFocusedElement = document.activeElement;
  activeProjectIndex = safeIndex;
  activeImageIndex = 0;
  setModalZoom(1, false);
  title.textContent = project.title;
  category.textContent = project.category;
  description.textContent = project.description;

  if (project.software) {
    software.textContent = project.software;
    softwareCard && (softwareCard.hidden = false);
  } else {
    software.textContent = "";
    softwareCard && (softwareCard.hidden = true);
  }

  info.replaceChildren(
    ...(project.sections || []).map((section) => {
      const block = document.createElement("article");
      const heading = document.createElement("h3");
      const text = document.createElement("p");
      block.className = "project-info__block";
      heading.textContent = section.title;
      text.textContent = section.text;
      block.append(heading, text);
      return block;
    })
  );

  gallery.replaceChildren(
    ...createPageCards(project).map(({ label, index }) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "modal-thumb";
      button.textContent = label;
      button.setAttribute("aria-label", `Bekijk pagina ${label}`);
      button.addEventListener("click", () => setModalImage(index));
      return button;
    })
  );

  setModalImage(0);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  closeButton && closeButton.focus({ preventScroll: true });
}

function createPageCards(project) {
  return getProjectImageGroups(project).map(({ index, label }) => ({ index, label }));
}

function getProjectImageGroups(project) {
  const images = project.images || [];

  if (project.layout !== "spreads") {
    return images.map((_, index) => ({
      index,
      endIndex: index,
      label: String(index + 1).padStart(2, "0"),
    }));
  }

  const groups = [];
  if (!images.length) return groups;

  groups.push({
    index: 0,
    endIndex: 0,
    label: "01",
  });

  for (let index = 1; index < images.length; index += 2) {
    const endIndex = Math.min(index + 1, images.length - 1);
    const start = String(index + 1).padStart(2, "0");
    const end = String(endIndex + 1).padStart(2, "0");
    groups.push({
      index,
      endIndex,
      label: start === end ? start : `${start}-${end}`,
    });
  }

  return groups;
}

function getActiveImageGroup(project, index = activeImageIndex) {
  const groups = getProjectImageGroups(project);
  return groups.find((group) => index >= group.index && index <= group.endIndex) || groups[0];
}

function changeModalImage(direction) {
  const project = projects[activeProjectIndex] || projects[0];
  const groups = getProjectImageGroups(project);
  const activeGroup = getActiveImageGroup(project);
  const activeGroupIndex = Math.max(0, groups.findIndex((group) => group.index === activeGroup.index));
  const nextGroup = groups[(activeGroupIndex + direction + groups.length) % groups.length];

  setModalImage(nextGroup.index);
}

function setModalImage(index) {
  const project = projects[activeProjectIndex] || projects[0];
  const images = project.images || [];
  const group = getActiveImageGroup(project, index);
  const image = document.querySelector("#modal-image");
  const nextImage = document.querySelector("#modal-image-next");
  const spread = document.querySelector("#modal-spread");
  const counter = document.querySelector("#modal-counter");
  const thumbs = document.querySelectorAll(".modal-thumb");

  if (!image || !group) return;

  activeImageIndex = group.index;

  image.src = images[activeImageIndex] || project.image;
  image.alt = `Pagina ${activeImageIndex + 1} van ${project.title}`;

  if (nextImage) {
    const nextSrc = group.endIndex > group.index ? images[group.index + 1] : "";
    nextImage.hidden = !nextSrc;
    if (nextSrc) {
      nextImage.src = nextSrc;
      nextImage.alt = `Pagina ${group.index + 2} van ${project.title}`;
    } else {
      nextImage.removeAttribute("src");
      nextImage.alt = "";
    }
  }

  if (spread) {
    spread.classList.toggle("is-spread", group.endIndex > group.index);
    spread.classList.toggle("is-single-page", group.endIndex === group.index);
    spread.classList.toggle("is-pages-layout", project.layout !== "spreads");
  }

  if (counter) {
    counter.textContent = `${group.label} / ${images.length}`;
  }

  thumbs.forEach((thumb, thumbIndex) => {
    const groups = getProjectImageGroups(project);
    thumb.classList.toggle("is-active", groups[thumbIndex]?.index === activeImageIndex);
  });

  resetModalImageScroll();
}

function changeModalZoom(direction) {
  setModalZoom(modalZoom + direction * 0.25);
}

function setModalZoom(value, shouldResetScroll = true) {
  const spread = document.querySelector("#modal-spread");
  const book = document.querySelector(".project-modal__book");
  const zoomLabel = document.querySelector("#modal-zoom");

  modalZoom = Math.max(1, Math.min(2.5, value));

  if (spread) {
    spread.style.setProperty("--zoom-size", `${modalZoom * 100}%`);
  }

  if (book) {
    book.classList.toggle("is-zoomed", modalZoom > 1);
  }

  if (zoomLabel) {
    zoomLabel.textContent = `${Math.round(modalZoom * 100)}%`;
  }

  if (shouldResetScroll) {
    resetModalImageScroll();
  }
}

function resetModalImageScroll() {
  const book = document.querySelector(".project-modal__book");
  if (!book) return;

  window.requestAnimationFrame(() => {
    book.scrollLeft = Math.max(0, (book.scrollWidth - book.clientWidth) / 2);
    book.scrollTop = 0;
  });
}

function closeProject() {
  const modal = document.querySelector("#project-modal");
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus({ preventScroll: true });
  }
}

function initParticles() {
  const canvas = document.querySelector("#particle-canvas");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!canvas || reduceMotion) return;

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let particles = [];

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    createParticles();
  };

  const createParticles = () => {
    const count = Math.min(92, Math.max(34, Math.floor((width * height) / 24000)));
    particles = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: index % 5 === 0 ? 1.6 : 1,
    }));
  };

  const animate = () => {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      ctx.fillStyle = index % 3 === 0 ? "rgba(0, 123, 255, 0.72)" : "rgba(255, 255, 255, 0.38)";
      ctx.fill();

      for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
        const next = particles[nextIndex];
        const distance = Math.hypot(particle.x - next.x, particle.y - next.y);

        if (distance < 126) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(next.x, next.y);
          ctx.strokeStyle = `rgba(0, 123, 255, ${0.16 * (1 - distance / 126)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animate);
  };

  resize();
  animate();
  window.addEventListener("resize", resize, { passive: true });
}

function initGsapEnhancements() {
  if (!window.gsap || !window.ScrollTrigger) return;

  window.gsap.registerPlugin(window.ScrollTrigger);

  window.gsap.to(".hero__background-text", {
    y: -90,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  window.gsap.to(".portrait-shell", {
    rotateZ: 2,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  window.gsap.utils.toArray(".project-card").forEach((card, index) => {
    window.gsap.fromTo(
      card,
      { y: 48 },
      {
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 86%",
          end: "top 58%",
          scrub: 0.8,
        },
        delay: index * 0.03,
      }
    );
  });
}
