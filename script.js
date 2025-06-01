// Tailwind CSS Accordion Component
document.querySelectorAll('[data-accordion-target]').forEach(button => {
    button.addEventListener('click', () => {
        const bodyId = button.getAttribute('data-accordion-target');
        const body = document.querySelector(bodyId);
        const icon = button.querySelector('.accordion-icon');

        const isHidden = body.classList.contains('hidden');

        // Close all sections
        document.querySelectorAll('[id^="accordion-flush-body-"]').forEach(b => {
            b.classList.add('hidden');
        });
        document.querySelectorAll('.accordion-icon').forEach(i => {
            i.classList.remove('rotate-180');
        });

        // Open current if it was hidden
        if (isHidden) {
            body.classList.remove('hidden');
            icon.classList.add('rotate-180');
        } else {
            body.classList.add('hidden');
            icon.classList.remove('rotate-180');
        }
    });
});


// Tailwind CSS Carousel Component
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carouselExampleControls");
    const items = carousel.querySelectorAll("[data-twe-carousel-item]");
    const prevBtn = carousel.querySelector("[data-twe-slide='prev']");
    const nextBtn = carousel.querySelector("[data-twe-slide='next']");

    let currentIndex = 0;
    const total = items.length;

    function updateCarousel(newIndex) {
        items.forEach((item, i) => {
            if (i === newIndex) {
                item.classList.remove("hidden");
                item.setAttribute("data-twe-carousel-active", "");
            } else {
                item.classList.add("hidden");
                item.removeAttribute("data-twe-carousel-active");
            }
        });
        currentIndex = newIndex;
    }

    prevBtn.addEventListener("click", () => {
        const newIndex = (currentIndex - 1 + total) % total;
        updateCarousel(newIndex);
    });

    nextBtn.addEventListener("click", () => {
        const newIndex = (currentIndex + 1) % total;
        updateCarousel(newIndex);
    });

    // Optional: Auto slide every 5s
    const autoSlide = true;
    if (autoSlide) {
        setInterval(() => {
            const newIndex = (currentIndex + 1) % total;
            updateCarousel(newIndex);
        }, 5000);
    }

    // Initialize carousel
    updateCarousel(currentIndex);
});