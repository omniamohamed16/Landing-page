function eventHandle(ev) {
  ev.target.parentElement
    .querySelectorAll(".active")
    .forEach((element) => element.classList.remove("active"));
  // Add active class for the targeted element only
  ev.target.classList.add("active");
}

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

    eventHandle(e);
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

randback = document.querySelectorAll(".option-box span");

randback.forEach((e) =>
  e.addEventListener("click", function (e) {
    eventHandle(e);

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

// Our Skill progress bar

skills = document.querySelector(".skills");

window.onscroll = function () {
  let skillsoffsettop = skills.offsetTop; // المسافة من أعلى الصفحة لـ Skills
  let skillsheight = skills.offsetHeight; // ارتفاع قسم الـ Skills
  let windowHeight = this.innerHeight; // ارتفاع النافذة الظاهرة
  let windoScrollTop = this.scrollY; // المقدار اللي تم Scrollه
  if (windoScrollTop > skillsoffsettop - windowHeight) {
    let colorprog = document.querySelectorAll(
      ".skill-progress .progress-color"
    );
    colorprog.forEach((el) => {
      el.style.width = el.dataset.prog;
    });
  }
};

// Start Our Gallery //////////////

// create overlay ///////
let ourGallery = document.querySelectorAll(".gallery-container img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overlay = document.createElement("div");

    // create overlay dark screen

    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);

    // create overlay-box

    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";

    // create Heading
    if (img.alt !== null) {
      // create Heading
      let imgHeading = document.createElement("h3");

      // create text for heading
      let ImgText = document.createTextNode(img.alt);

      // Append Text to heading h3
      imgHeading.appendChild(ImgText);

      // Apped heading to popupBox
      popupBox.appendChild(imgHeading);
    }

    // create img
    let popupImage = document.createElement("img");
    popupImage.className = "popup-image";
    popupImage.src = img.src;

    // Add popupImage to popupBox

    popupBox.appendChild(popupImage);

    // Add popupBox to overlay

    overlay.appendChild(popupBox);

    // Create Close Button
    closeButton = document.createElement("span");
    closeIcon = document.createTextNode("x");
    closeButton.appendChild(closeIcon);
    popupBox.appendChild(closeButton);
    closeButton.className = "close-button";
  });
});

// close popup

document.addEventListener("click", (e) => {
  if (e.target.className == "close-button") {
    document.querySelector(".popup-overlay").remove();
  }
});

// Start Nav Bullets //
navBullets = document.querySelector(".nav-bullets");
Bullets = document.querySelectorAll(".nav-bullets .bullets");
yes = document.querySelector(".nav-bullets-option span.yes");
no = document.querySelector(".nav-bullets-option span.no");

Bullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    document
      .querySelector(e.target.dataset.section)
      .scrollIntoView({ behavior: "smooth" });
  });
});

no.addEventListener("click", (e) => {
  navBullets.style.display = "none";
  no.classList.add("active");
  localStorage.setItem("naving", "none");
});

yes.addEventListener("click", (e) => {
  yes.classList.add("active");
  navBullets.style.display = "block";
  localStorage.setItem("naving", "block");
});

navingLS = localStorage.getItem("naving");

if (navingLS === "none") {
  no.classList.add("active");
} else {
  yes.classList.add("active");
}

if (navingLS !== null) {
  navBullets.style.setProperty("display", localStorage.getItem("naving"));
}

if (navingLS == null) {
  navBullets.style.setProperty("display", "block");
}
