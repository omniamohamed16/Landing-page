
settingBox = document.querySelector(".setting-box")
gear= document.querySelector(".fa-gear") 

gear.addEventListener("click" , function(){
    gear.classList.toggle("fa-spin")
    settingBox.classList.toggle("open")
})




let land = document.querySelector(".landing-page");
imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

setInterval(() => {
  let randnumb = Math.floor(Math.random() * imgArray.length);

  land.style.backgroundImage = 'url("../imgs/' + imgArray[randnumb] + '")';
}, 5000);