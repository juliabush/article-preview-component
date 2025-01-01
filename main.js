const attributionIconShare = document.querySelector(".attribution__icon-share");
const socialMediaMiniHero = document.querySelector(".social-media__mini-hero");
const attributionMichelleImage= document.querySelector(".attribution__michelle-image");
const attributionFlexColumn = document.querySelector(".attribution__flex-column")
const attributionMainFlexRow = document.querySelector(".attribution__main-flex-row");


attributionIconShare.addEventListener("click", () => {
    socialMediaMiniHero.classList.toggle("active");
    attributionMichelleImage.classList.toggle("invisible");
    attributionFlexColumn.classList.toggle("invisible")
    attributionMainFlexRow.classList.toggle("bg")
});