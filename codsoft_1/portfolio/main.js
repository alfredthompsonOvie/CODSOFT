const navList = document.querySelector(".navList");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
// const cv = document.querySelector(".cv");


hamburgerMenu.addEventListener("click", () => {
  navList.classList.toggle("open")
})

// cv.addEventListener("click", () => {
//   const fileName = 'Alfred Thompson Ovie.pdf';
//   const link = document.createElement('a');

//   link.href = `https://drive.google.com/file/d/1nJJ_Ik4g-y3yR7j152GSNDMq5NZlQLNy/view?usp=drive_link/${fileName}`;
//   link.download = fileName;
//   link.click();
// })