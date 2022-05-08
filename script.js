const miniCont = document.querySelector(".miniCont");

// miniCont.innerHTML =
//   '<div class="linha"></div> <div class="linha"></div> <div class="linha"></div>';
// const linha = document.querySelectorAll(".linha");

// linha.forEach((item) => {
//   item.innerHTML =
//     '<div class="celula"></div><div class="celula"></div><div class="celula"></div>';
// });

const newDiv = [];
for (i = 0; i < 3; i++) {
  newDiv[i] = document.createElement("div");
}
newDiv.forEach((item) => {
  item.classList.add("linha");
  miniCont.appendChild(item);
});

const linha = document.querySelectorAll(".linha");
const newDiv2 = [];
for (i = 0; i < 3; i++) {
  newDiv2[i] = document.createElement("div");
}
newDiv2.forEach((item) => {
  item.classList.add("celula");
  linha.forEach((i) => {
    i.appendChild(item.cloneNode(true));
  });
});

// linha.forEach((item) => {
//   item.classList.add("celula");
//   console.log(item);
// });

const a = document.querySelectorAll(".celula");
const Arr = [...a];
const Arr2 = [];

const w1 = [];

const x = Math.sqrt(Arr.length);

let cont = 0;
for (let i = 0; i < x; i++) {
  for (let j = 0; j < x; j++) {
    if (!Array.isArray(Arr2[i])) {
      Arr2[i] = [];
    }
    Arr2[i][j] = Arr[cont];
    cont++;
  }
}

function ganhouH(item) {
  let risco = document.createElement("div");
  risco.classList.add("riscoH");
  item.appendChild(risco);
  item.style.position = "relative";
  function addAtivo() {
    risco.classList.add("ativoH");
  }
  setTimeout(addAtivo, 10);
  pai.removeEventListener("click", onClick);
}
function ganhouV(item) {
  let risco = document.createElement("div");
  item.appendChild(risco);
  item.style.position = "relative";
  function addAtivo() {
    risco.classList.add("ativoV");
  }
  setTimeout(addAtivo, 10);
  risco.classList.add("riscoV");
  pai.removeEventListener("click", onClick);
}
function ganhouDP(item) {
  let risco = document.createElement("div");
  item.appendChild(risco);
  item.style.position = "relative";
  function addAtivo() {
    risco.classList.add("ativoDP");
  }
  setTimeout(addAtivo, 10);
  risco.classList.add("riscoDP");
  pai.removeEventListener("click", onClick);
}
function ganhouDS(item) {
  let risco = document.createElement("div");
  item.appendChild(risco);
  item.style.position = "relative";
  function addAtivo() {
    risco.classList.add("ativoDS");
  }
  setTimeout(addAtivo, 10);
  risco.classList.add("riscoDS");
  pai.removeEventListener("click", onClick);
}
// console.log(x);
// console.log(Arr2[0][0].parentNode);
let j = 0;
function onClick(itemClasse) {
  if (!itemClasse.target.classList.contains("celula")) {
    return;
  }

  if (
    (itemClasse.target.innerText != "X") &
    (itemClasse.target.innerText != "O")
  ) {
    if (j % 2 == 0) {
      itemClasse.target.innerText = "X";
    } else {
      itemClasse.target.innerText = "O";
    }
    ++j;
  }

  for (let i = 0; i < Arr2.length; i++) {
    let t = [];
    let o = [];
    for (let j = 0; j < Arr2.length; j++) {
      t[j] = Arr2[i][j].innerText;
      o[j] = Arr2[j][i].innerText;

      if (j === Arr2.length - 1) {
        if (t.every((x) => x === "X")) {
          ganhouH(Arr2[i][0]);
        } else if (t.every((x) => x === "O")) {
          ganhouH(Arr2[i][0]);
        } else if (o.every((x) => x === "X")) {
          ganhouV(Arr2[0][i]);
        } else if (o.every((x) => x === "O")) {
          ganhouV(Arr2[0][i]);
        }
      }
    }
  }
  const diagP = [];
  const diagS = [];
  cont = 0;

  for (let m = 0; m < Arr2.length; m++) {
    for (let n = 0; n < Arr2.length; n++) {
      if (m == n) {
        diagP[cont] = Arr2[m][n].innerText;
        cont++;
      }
    }
  }

  cont = 0;
  let coluna = Arr2.length - 1;
  for (let i = 0; i < Arr2.length; i++) {
    diagS[cont] = Arr2[i][coluna].innerText;
    cont++;
    --coluna;
  }
  if (diagP.every((x) => x === "X")) {
    ganhouDP(Arr2[0][0]);
  } else if (diagP.every((x) => x === "O")) {
    ganhouDP(Arr2[0][0]);
  } else if (diagS.every((x) => x === "X")) {
    ganhouDS(Arr2[0][2]);
  } else if (diagS.every((x) => x === "O")) {
    ganhouDS(Arr2[0][2]);
  }
}

const pai = document.querySelector(".miniCont");
pai.addEventListener("click", onClick);

function reset() {
  Arr.forEach((item) => {
    item.innerText = "";
  });
  const linha = document.querySelectorAll(".riscoH");
  const coluna = document.querySelectorAll(".riscoV");
  linha.forEach((item) => {
    item.classList.remove("riscoH");
    item.classList.remove("ativo");
  });
  coluna.forEach((item) => {
    item.classList.remove("riscoV");
    item.classList.remove("ativo");
  });
  j = 0;
  pai.addEventListener("click", onClick);
}
const botao = document.querySelectorAll(".botaoJgrDnv");
botao.forEach((item) => {
  item.addEventListener("click", reset);
});
// const botao = document.querySelectorAll(".botaoJgrDnv");
