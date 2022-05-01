const a = document.querySelector(".zeroZero");
const b = document.querySelector(".zeroUm");
const c = document.querySelector(".zeroDois");
const d = document.querySelector(".umZero");
const e = document.querySelector(".umUm");
const f = document.querySelector(".umDois");
const g = document.querySelector(".doisZero");
const h = document.querySelector(".doisUm");
const i = document.querySelector(".doisDois");

const Arr = [a, b, c, d, e, f, g, h, i];

function ganhou(item) {
  const vit = document.querySelector(".ganhou");
  const xo = document.querySelector(".XO");
  vit.style.display = "block";
  const texto = item.innerText;
  xo.innerText = texto;
}

let j = 0;
function onClick(itemClasse) {
  if (j % 2 == 0) {
    itemClasse.target.innerHTML = "X";
  } else {
    itemClasse.target.innerHTML = "O";
  }
  ++j;

  //   if (
  //     (a.innerText === b.innerText) &
  //       (c.innerText === b.innerText) &
  //       (a.innerText != "") ||
  //     (d.innerText === e.innerText) &
  //       (f.innerText === e.innerText) &
  //       (d.innerText != "") ||
  //     (g.innerText === h.innerText) &
  //       (i.innerText === h.innerText) &
  //       (g.innerText != "") ||
  //     (a.innerText === e.innerText) &
  //       (i.innerText === a.innerText) &
  //       (a.innerText != "") ||
  //     (c.innerText === g.innerText) &
  //       (e.innerText === g.innerText) &
  //       (c.innerText != "") ||
  //     (a.innerText === d.innerText) &
  //       (a.innerText === g.innerText) &
  //       (a.innerText != "") ||
  //     (b.innerText === e.innerText) &
  //       (b.innerText === h.innerText) &
  //       (b.innerText != "") ||
  //     (c.innerText === f.innerText) &
  //       (c.innerText === i.innerText) &
  //       (f.innerText != "")
  //   ) {
  //     ganhou();
  //   }
  // }
  if (
    (a.innerText === b.innerText) &
    (c.innerText === b.innerText) &
    (a.innerText != "")
  ) {
    ganhou(a);
  } else if (
    (d.innerText === e.innerText) &
    (f.innerText === e.innerText) &
    (d.innerText != "")
  ) {
    ganhou(d);
  } else if (
    (g.innerText === h.innerText) &
    (i.innerText === h.innerText) &
    (g.innerText != "")
  ) {
    ganhou(g);
  } else if (
    (a.innerText === e.innerText) &
    (i.innerText === a.innerText) &
    (a.innerText != "")
  ) {
    ganhou(a);
  } else if (
    (c.innerText === g.innerText) &
    (e.innerText === g.innerText) &
    (c.innerText != "")
  ) {
    ganhou(c);
  } else if (
    (a.innerText === d.innerText) &
    (a.innerText === g.innerText) &
    (a.innerText != "")
  ) {
    ganhou(a);
  } else if (
    (b.innerText === e.innerText) &
    (b.innerText === h.innerText) &
    (b.innerText != "")
  ) {
    ganhou(b);
  } else if (
    (c.innerText === f.innerText) &
    (c.innerText === i.innerText) &
    (f.innerText != "")
  ) {
    ganhou(c);
  }
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

// a.addEventListener("click", onClick);
// b.addEventListener("click", onClick);
// c.addEventListener("click", onClick);
// d.addEventListener("click", onClick);
// e.addEventListener("click", onClick);
// f.addEventListener("click", onClick);
// g.addEventListener("click", onClick);
// h.addEventListener("click", onClick);
// i.addEventListener("click", onClick);
