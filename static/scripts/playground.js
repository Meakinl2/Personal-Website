// Item 1 : Changes the colour of an element evertime it is hovered over.
function ChangeColour() {
    var div_obj = document.getElementById("colour-change");
    var obj_colour = div_obj.style.backgroundColor;
    const colour_cycle = ["red","yellow","hotpink","green","purple","orange","blue","cyan","crimson","gray"];
    
    for (let i = 0; i < colour_cycle.length; i++) {
        if (colour_cycle[i] == obj_colour) {
            document.getElementById("colour-change").style.backgroundColor = colour_cycle[i + 1];
            break
        }
        document.getElementById("colour-change").style.backgroundColor = colour_cycle[0];
    }
}


// Item 2 : Learning to create a slideshow that changes both automatically and upon user input
let slide_index = 0;
let slideshow_timeout;
let slides = document.getElementsByClassName("slide-test");
let dots = document.getElementsByClassName("dot");
AutoSlideshow();

function DefaultSlideState() {
    let i;
    for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
    for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace("dot-active", "");}
}


function AutoSlideshow() {
    DefaultSlideState();
    if (slide_index > slides.length - 1) {slide_index = 0} 
    slides[slide_index].style.display = "block";
    dots[slide_index].className += " dot-active";
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
    for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace("dot-active", "");}
    slides[slide_index].style.display = "block";
    dots[slide_index].className += " dot-active";
    clearTimeout(slideshow_timeout);
    slideshow_timeout = setTimeout(AutoSlideshow,60000);
}


// Item 3 : A display where an element can be enlarged to display more info, which then
// automatiocally shrink the other elemtns back down.

function MakeFocus(clicked_item) {
    let main_display = document.getElementsByClassName("enlarged-item");
    let item_displays = document.getElementByClassName("listed-item");
    let item_imgs = document.getElementByClassName("item-img");

    item_imgs.remove(clicked_item);

    main_display.textContent = "";
    for(let display of item_displays) {
        display.textContent = "";
    }
}