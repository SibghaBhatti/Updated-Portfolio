const text = document.getElementById("text");
const readmore = document.getElementById("readmore");
const addtext = document.getElementById("addtext");
const originaltext = text.innerHTML;
const additionaltext = addtext.innerHTML;
readmore.onclick = function () {
  if (readmore.innerText === "Read More") {
    text.innerHTML = originaltext + additionaltext;
    readmore.innerHTML = "Read Less";
  } else {
    text.innerHTML = originaltext;
    readmore.innerHTML = "Read More";
  }
};
const bar = document.getElementById("bars");
const time = document.getElementById("times");
const element = document.getElementById("headerrightul");
time.onclick = function () {
  if (time.classList.contains("fa-times")) {
    time.classList.remove("fa-times");

    element.style.display = "none";
  }
};
let isOpen = false;
bar.onclick = function () {
  if (!isOpen) {
    element.style.display = "flex";
    element.style.flexDirection = "column";
    element.style.alignItems = "flex-start";
    // element.style.marginLeft = "490px";
    element.style.backgroundColor = "rgb(11, 61, 82)";
    element.style.paddingTop = "930%";
    element.style.paddingBottom = "900%";
    element.style.lineHeight = "20px";
    element.style.color = "white";
    element.style.position = "fixed";
    element.style.right = "0";
    isOpen = true;
  } else {
    element.style.display = "none";
    isOpen = false;
  }
};
