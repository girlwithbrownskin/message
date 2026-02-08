const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay,now eat me out!!";
  gif.src ="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTk3YTF0M242cmZ1bjkxZG1ocDhxeW10c3pwbzgzcWhjc3ozanJ3MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eij0RsEQ7XVP6lollt/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
