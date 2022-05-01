const a = document.querySelectorAll(".celula");

const Arr = [...a];
// Arr.forEach((item) => {
//   console.log(item);
// });

function ganhou(item) {
  const vit = document.querySelector(".ganhou");
  const xo = document.querySelector(".XO");
  vit.style.display = "block";
  const texto = item.innerText;
  xo.innerText = texto;
}

console.log(Arr[0]);
let j = 0;
function onClick(itemClasse) {
  if (j % 2 == 0) {
    itemClasse.target.innerHTML = "X";
  } else {
    itemClasse.target.innerHTML = "O";
  }
  if (
    (Arr[0].innerText === Arr[1].innerText) &
    (Arr[2].innerText === Arr[1].innerText) &
    (Arr[0].innerText != "")
  ) {
    ganhou(Arr[0]);
  } else if (
    (Arr[3].innerText === Arr[4].innerText) &
    (Arr[5].innerText === Arr[4].innerText) &
    (Arr[3].innerText != "")
  ) {
    ganhou(Arr[3]);
  } else if (
    (Arr[6].innerText === Arr[7].innerText) &
    (Arr[8].innerText === Arr[7].innerText) &
    (Arr[6].innerText != "")
  ) {
    ganhou(Arr[6]);
  } else if (
    (Arr[0].innerText === Arr[4].innerText) &
    (Arr[8].innerText === Arr[0].innerText) &
    (Arr[0].innerText != "")
  ) {
    ganhou(Arr[0]);
  } else if (
    (Arr[2].innerText === Arr[6].innerText) &
    (Arr[4].innerText === Arr[6].innerText) &
    (Arr[2].innerText != "")
  ) {
    ganhou(Arr[2]);
  } else if (
    (Arr[0].innerText === Arr[3].innerText) &
    (Arr[0].innerText === Arr[6].innerText) &
    (Arr[0].innerText != "")
  ) {
    ganhou(Arr[0]);
  } else if (
    (Arr[1].innerText === Arr[4].innerText) &
    (Arr[1].innerText === Arr[7].innerText) &
    (Arr[1].innerText != "")
  ) {
    ganhou(Arr[1]);
  } else if (
    (Arr[2].innerText === Arr[5].innerText) &
    (Arr[2].innerText === Arr[8].innerText) &
    (Arr[5].innerText != "")
  ) {
    ganhou(Arr[2]);
  }
  ++j;
}

Arr.forEach((item) => {
  item.addEventListener("click", onClick);
});

function reset() {
  Arr.forEach((item) => {
    item.innerText = "";
  });
  const vit = document.querySelector(".ganhou");
  vit.style.display = "none";
  j = 0;
}
const botao = document.querySelectorAll(".botaoJgrDnv");
botao.forEach((item) => {
  item.addEventListener("click", reset);
});
// const botao = document.querySelectorAll(".botaoJgrDnv");
