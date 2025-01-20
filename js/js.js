// setting box opening
settingBox = document.querySelector(".setting-box");
gear = document.querySelector(".fa-gear");
specialDesign = document.getElementById(".option-box h5");
gear.addEventListener("click", function () {
  gear.classList.toggle("fa-spin");
  settingBox.classList.toggle("open");
});

// start colors switch
let colorsLi = document.querySelectorAll(".colors li");
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // set color on Local storage
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("colors-options", e.target.dataset.color);

    // Remove active class from all children
    e.target.parentElement
      .querySelectorAll(".active")
      .forEach((element) => element.classList.remove("active"));
    // Add active class for the targeted element only
    e.target.classList.add("active");
  });
});
let mainColor = localStorage.getItem("colors-options");

if (mainColor !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("colors-options")
  );

  // Remove active class from all children
  document.querySelectorAll(".colors li").forEach((element) => {
    element.classList.remove("active");
    // Add active class for the targeted element only
    if (element.dataset.color === mainColor) {
      element.classList.add("active");
    }
  });
}

// start random background change ////////////////////////////////////////////////////////////////////////////////////////////////////////////

let backgroundopt = true;
let myInterval;
start = document.querySelector(".Random-background span.yes");
end = document.querySelector(".Random-background span.no");
if (localStorage.getItem("randChoice") === "true") {
  backgroundopt = true;
  start.classList.add("active");
} else {
  backgroundopt = false;
  end.classList.add("active");
}

randback = document.querySelectorAll(".Random-background span");

randback.forEach((e) =>
  e.addEventListener("click", function (e) {
    e.target.parentElement
      .querySelectorAll(".active")
      .forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      localStorage.setItem("randChoice", true);
      backgroundopt = true;
      randombackInterval();
    } else {
      localStorage.setItem("randChoice", false);
      backgroundopt = false;
      clearInterval(myInterval);
    }
  })
);

// Landing page img change
let land = document.querySelector(".landing-page");
imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

// random background function

randombackInterval = function () {
  if (backgroundopt === true) {
    myInterval = setInterval(() => {
      let randnumb = Math.floor(Math.random() * imgArray.length);

      land.style.backgroundImage = 'url("../imgs/' + imgArray[randnumb] + '")';
    }, 5000);
  }
};

randombackInterval();
