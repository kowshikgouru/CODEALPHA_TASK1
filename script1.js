const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

/* Open Lightbox */

galleryItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        currentIndex = index;

        const img = item.querySelector("img");

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        caption.textContent =
            item.querySelector("h3").textContent;
    });

});

/* Close Lightbox */

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

/* Next Image */

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= galleryItems.length){
        currentIndex = 0;
    }

    updateLightbox();
});

/* Previous Image */

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = galleryItems.length - 1;
    }

    updateLightbox();
});

/* Update Lightbox */

function updateLightbox(){

    const item = galleryItems[currentIndex];

    lightboxImg.src =
        item.querySelector("img").src;

    caption.textContent =
        item.querySelector("h3").textContent;
}

/* Close on Background Click */

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){
        lightbox.style.display = "none";
    }

});

/* Filter Buttons */

const filterButtons =
document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active"));

        button.classList.add("active");

        const filter =
        button.getAttribute("data-filter");

        galleryItems.forEach(item => {

            if(filter === "all"){

                item.style.display = "block";

            }
            else if(
                item.classList.contains(filter)
            ){

                item.style.display = "block";

            }
            else{

                item.style.display = "none";

            }

        });

    });

});