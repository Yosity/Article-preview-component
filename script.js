
let sharebtn = document.querySelector(".share");
let media = document.querySelector(".media");
let body = document.querySelector("body");
let hiddenShare = document.querySelector("#hidden-share");
sharebtn.addEventListener("click", () => {

    if(body.clientWidth <= 900)
    {
        if( hiddenShare.style.display == "block")
        hiddenShare.style.display = "none";
        else  hiddenShare.style.display = "block";
    }
    sharebtn.classList.toggle("active");
    if( media.style.display == "flex")
    media.style.display = "none";
    else
    media.style.display = "flex"

})