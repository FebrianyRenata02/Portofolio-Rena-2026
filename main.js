// Menjalankan JavaScript setelah semua HTML selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    // Feather Icons
    if (typeof feather !== "undefined") {
        feather.replace();
    }

    // Typed.js
    if (typeof Typed !== "undefined" && document.querySelector(".text")) {
        new Typed(".text", {
            strings: [
                "Web Developer",
                "UI/UX Designer",
                "Front-End Developer",
                "DevOps Engineer",
            ],
            typeSpeed: 100,
            backSpeed: 70,
            backDelay: 1000,
            loop: true,
        });
    }

    // Hamburger Menu
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll("section");

    if (menuIcon && navbar) {
        menuIcon.addEventListener("click", () => {
            menuIcon.classList.toggle("fa-xmark");
            navbar.classList.toggle("active");
        });

        // Menutup menu saat link navbar diklik
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                menuIcon.classList.remove("fa-xmark");
                navbar.classList.remove("active");
            });
        });
    }

    // Navbar active sesuai posisi scroll
    function activeNavbarOnScroll() {
        let currentSectionId = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 160;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });

        // Tutup navbar saat halaman discroll
        if (menuIcon && navbar) {
            menuIcon.classList.remove("fa-xmark");
            navbar.classList.remove("active");
        }
    }

    window.addEventListener("scroll", activeNavbarOnScroll);
    activeNavbarOnScroll();

    // Animasi skill saat section terlihat
    const skillObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target
                        .querySelectorAll(".bar, .radial-bars")
                        .forEach((item) => {
                            item.classList.add("animate");
                        });

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
        }
    );

    document
        .querySelectorAll(".Technical-Skills, .Professional-Skills")
        .forEach((skillSection) => {
            skillObserver.observe(skillSection);
        });

    // Contact form sementara
    const contactForm = document.querySelector(".contact-form form");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            alert(
                "Thank you! Your message has been submitted. Please connect this form to EmailJS, Formspree, or backend to send real emails."
            );

            contactForm.reset();
        });
    }
});
