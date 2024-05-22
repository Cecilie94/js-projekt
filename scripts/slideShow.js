    // select scroll container og nav knapper
    let scrollContainer = document.querySelector('.gallery');
    // scroll container vælger element med class 'gallery' og ID element for knapper 
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");
    
    // event listener til scroll container på mousewheel
    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault(); // forhindrer default scroll
        scrollContainer.scrollLeft += evt.deltaY; // 
        scrollContainer.style.scrollBehavior = "auto";
    });
    
    // event listener til back og next knapper
    nextBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth"; // gør scroll smooth
        scrollContainer.scrollLeft += 900; // scroll 900px til højre
    });
    backBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 900;
    });