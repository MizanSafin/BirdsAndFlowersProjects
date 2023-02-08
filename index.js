const buttonsEl = document.querySelectorAll("button");
const flowersOrBirdsEl = document.querySelector("#flowersOrBirds");

const birdAndFlowerArr = [
  {
    name: "birds",
    img: "./images/magpie.jpg",
  },
  {
    name: "birds",
    img: "./images/pigeon.jpg",
  },
  {
    name: "birds",
    img: "./images/kingfisher.jpg",
  },
  {
    name: "flowers",
    img: "./images/flower1.jpg",
  },
  {
    name: "flowers",
    img: "./images/Rose.jpg",
  },
  {
    name: "flowers",
    img: "./images/waterLillies.jpg",
  },
];

buttonsEl.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const newArr = birdAndFlowerArr.filter(
      (item) => item.name == e.target.textContent
    );

    flowersOrBirdsEl.innerHTML = newArr
      .map((item) => {
        return `
             <img src=${item.img} alt=${item.name} >
             
        `;
      })
      .join("");
  });
});
