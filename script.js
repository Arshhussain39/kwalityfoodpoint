/* =========================================
   KWALITY FOOD POINT
   JAVASCRIPT
========================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       MOBILE NAVIGATION
    ====================================== */

    const menuToggle = document.getElementById("menuToggle");

    const navbar = document.querySelector(".navbar");

    if (menuToggle) {

        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("show");

        });

    }


    /* Close mobile menu after clicking */

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("show");

        });

    });


    /* =====================================
       ACTIVE NAVIGATION
    ====================================== */

    const sections = document.querySelectorAll("main section");

    const navigationLinks =
        document.querySelectorAll(".navbar a[href^='#']");


    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                currentSection = section.getAttribute("id");

            }

        });


        navigationLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    });


    /* =====================================
       MENU FILTER
    ====================================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const foodCards =
        document.querySelectorAll(".food-card");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const category =
                this.getAttribute("data-category");


            /* Active button */

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });

            this.classList.add("active");


            /* Filter cards */

            foodCards.forEach(function (card) {

                const cardCategory =
                    card.getAttribute("data-category");


                if (
                    category === "all" ||
                    category === cardCategory
                ) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });


    /* =====================================
       ADD FOOD TO ORDER
    ====================================== */

    const addButtons =
        document.querySelectorAll(".add-btn");

    const selectedFood =
        document.getElementById("selectedFood");


    addButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const food =
                this.getAttribute("data-food");


            /* Select food in order form */

            if (selectedFood) {

                selectedFood.value = food;

            }


            /* Scroll to order */

            document
                .getElementById("order")
                .scrollIntoView({
                    behavior: "smooth"
                });


            /* Button animation */

            const originalText = this.textContent;

            this.textContent = "✓";

            setTimeout(function () {

                button.textContent = originalText;

            }, 1000);

        });

    });


    /* =====================================
       ORDER FORM
    ====================================== */

    const orderForm =
        document.getElementById("orderForm");


    if (orderForm) {

        orderForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const name =
                document.getElementById("customerName").value;

            const food =
                document.getElementById("selectedFood").value;


            if (!food) {

                alert("Please choose your food.");

                return;

            }


            alert(
                "Thank you " +
                name +
                "! Your order for " +
                food +
                " has been received."
            );


            orderForm.reset();

        });

    }


    /* =====================================
       GALLERY
    ====================================== */

    const galleryImages =
        document.querySelectorAll(".gallery-grid img");


    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {


            /* Create overlay */

            const overlay =
                document.createElement("div");


            overlay.className =
                "gallery-overlay";


            overlay.innerHTML = `

                <button class="close-gallery">
                    ×
                </button>

                <img src="${this.src}" alt="${this.alt}">

            `;


            document.body.appendChild(overlay);


            /* Close */

            overlay.addEventListener("click", function (event) {

                if (
                    event.target === overlay ||
                    event.target.classList.contains("close-gallery")
                ) {

                    overlay.remove();

                }

            });

        });

    });


    /* =====================================
       NEWSLETTER
    ====================================== */

    const newsletterForm =
        document.getElementById("newsletterForm");


    if (newsletterForm) {

        newsletterForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert(
                "Thank you for subscribing to Kwality Food Point!"
            );

            newsletterForm.reset();

        });

    }


    /* =====================================
       CURRENT YEAR
    ====================================== */

    const year =
        document.getElementById("year");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =====================================
       SCROLL REVEAL
    ====================================== */

    const revealElements =
        document.querySelectorAll(
            ".food-card, .cuisine-card, .review-card, .offer-card, .about-image, .about-content"
        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

    });


    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


});