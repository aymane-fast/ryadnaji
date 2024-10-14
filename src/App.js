import React, { useEffect } from 'react';
import Topbar from "./components/topbar";
import "./assets/css/style.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Service from "./components/service";
import About from "./components/about";
import SpecialDish from "./components/specialDish";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Location from "./components/location";
import Events from './components/events';
import Video from './components/video';
import Preloader from './components/preloader';

function App() {

  useEffect(() => {

    // Navbar toggling
    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const overlay = document.querySelector("[data-overlay]");

    const toggleNavbar = () => {
      navbar?.classList.toggle("active");
      overlay?.classList.toggle("active");
      document.body.classList.toggle("nav-active");
    };

    navTogglers.forEach(toggler => {
      toggler.addEventListener("click", toggleNavbar);
    });

    // Header and Back-to-top button
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    let lastScrollPos = 0;

    const hideHeader = () => {
      const isScrollBottom = lastScrollPos < window.scrollY;
      if (isScrollBottom) {
        header?.classList.add("hide");
      } else {
        header?.classList.remove("hide");
      }
      lastScrollPos = window.scrollY;
    };

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        header?.classList.add("active");
        backTopBtn?.classList.add("active");
        hideHeader();
      } else {
        header?.classList.remove("active");
        backTopBtn?.classList.remove("active");
      }
    });

    // Hero Slider
    const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
    const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
    const heroSliderNextBtn = document.querySelector("[data-next-btn]");

    let currentSlidePos = 0;
    let lastActiveSliderItem = heroSliderItems[0];

    const updateSliderPos = () => {
      lastActiveSliderItem?.classList.remove("active");
      heroSliderItems[currentSlidePos]?.classList.add("active");
      lastActiveSliderItem = heroSliderItems[currentSlidePos];
    };

    const slideNext = () => {
      if (currentSlidePos >= heroSliderItems.length - 1) {
        currentSlidePos = 0;
      } else {
        currentSlidePos++;
      }
      updateSliderPos();
    };

    const slidePrev = () => {
      if (currentSlidePos <= 0) {
        currentSlidePos = heroSliderItems.length - 1;
      } else {
        currentSlidePos--;
      }
      updateSliderPos();
    };

    heroSliderNextBtn?.addEventListener("click", slideNext);
    heroSliderPrevBtn?.addEventListener("click", slidePrev);

    // Auto Slide
    let autoSlideInterval = setInterval(slideNext, 7000);

    [heroSliderNextBtn, heroSliderPrevBtn].forEach(btn => {
      btn?.addEventListener("mouseover", () => clearInterval(autoSlideInterval));
      btn?.addEventListener("mouseout", () => {
        autoSlideInterval = setInterval(slideNext, 7000);
      });
    });

    // Parallax Effect
    const parallaxItems = document.querySelectorAll("[data-parallax-item]");

    window.addEventListener("mousemove", event => {
      let x = (event.clientX / window.innerWidth * 10) - 5;
      let y = (event.clientY / window.innerHeight * 10) - 5;

      x = x - (x * 2);
      y = y - (y * 2);

      parallaxItems.forEach(item => {
        const parallaxSpeed = Number(item.dataset.parallaxSpeed);
        item.style.transform = `translate3d(${x * parallaxSpeed}px, ${y * parallaxSpeed}px, 0px)`;
      });
    });

  }, []);

  return (
    <div className="App">
      <Preloader />
      <section>
        <Topbar />
        <Header />
      </section>
      <main>
        <Hero />
        <Service />
        <About />
        <Video />
        <Events />
        <SpecialDish />
        <Menu />
        <Location />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;