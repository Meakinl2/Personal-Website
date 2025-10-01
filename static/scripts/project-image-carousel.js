

let project_carousels = document.getElementsByClassName("project-image-reserve");
project_carousels.addEventListener("click", ChangeFocusImage);



function ChangeFocusImage() {
    let i;
    for (i = 0; i < project_carousels.length; i++) {
        project_carousels[i].style.backgroundColor = "#0000ff";
    }
}


