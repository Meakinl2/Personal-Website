let slide_index = 0;
let slideshow_timeout;
let slides = document.getElementsByClassName("skill-slide");
let shortcuts = document.getElementsByClassName("skill-shortcut");

AutoSlideshow();

function DefaultSlideState() {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        shortcuts[i].className = shortcuts[i].className.replace("shortcut-active", "");
    }
}


function AutoSlideshow() {
    DefaultSlideState();
    if (slide_index > slides.length - 1) {slide_index = 0} 
    slides[slide_index].style.display = 'flex';
    shortcuts[slide_index].className += " shortcut-active";
    slide_index++;
    slideshow_timeout = setTimeout(AutoSlideshow,5000);
}


function RelativeSlideChange(n) {
    let target_slide = slide_index + n;
    if (target_slide < slides.length && target_slide > -1) {ManualSlideshow(target_slide);}
    else if (target_slide < 0) {ManualSlideshow(slides.length - 1);}
    else {ManualSlideshow(0);}
}


function ManualSlideshow(n) {
    slide_index = n;
    DefaultSlideState();
    for (i = 0; i < shortcuts.length; i++) {shortcuts[i].className = shortcuts[i].className.replace("dot-active", "");}
    slides[slide_index].style.display = 'flex';
    shortcuts[slide_index].className += " shortcut-active";
    clearTimeout(slideshow_timeout);
    slideshow_timeout = setTimeout(AutoSlideshow,60000);
}