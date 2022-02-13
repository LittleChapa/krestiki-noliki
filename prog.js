let tds = document.getElementsByTagName("td");
let reswin = document.getElementById("reswin");
let y = document.getElementById("y");
let btn = document.getElementById("btn");
let x = true;

for (let i = 0; i < tds.length; i++) {
  tds[i].addEventListener("click", f1);
}

btn.addEventListener("click", resetall);

function f1() {
  if (this.innerHTML) {
    y.innerHTML = "Ячейка уже заполнена!";
    return this.innerHTML;
  }

  if (!this.innerHTML) {
    y.innerHTML = "";
  }

  if (x == true) {
    this.innerHTML = "X";
  } else {
    this.innerHTML = "0";
  }

  x = !x;
  setTimeout(win, 200);
}

function resetall() {
  location.reload();
}

function win() {
  if (!x) {
    str1 = "крестики";
  } else str1 = "нолики";
  if (checkdiag() || checkhor() || checkvert()) {
    reswin.innerText = "Победили " + str1 + "!";
    for (let i = 0; i < tds.length; i++) {
      tds[i].removeEventListener("click", f1);
    }
  }
}

function checkdiag() {
  w = false;
  if (tds[4].innerHTML == "") return w;
  else if (
    (tds[0].innerHTML == tds[4].innerHTML && tds[4].innerHTML == tds[8].innerHTML) ||
    (tds[2].innerHTML == tds[4].innerHTML && tds[4].innerHTML == tds[6].innerHTML)
  ) {
    w = true;
  }
  return w;
}

function checkhor() {
  w = false;
  for (let i = 0; i < 3; i++) {
    w = onehor(i);
    if (w) break;
  }
  return w;
}

function onehor(nhor) {
  let firstin = 3 * nhor;
  w = false;
  if (tds[firstin].innerHTML == "") return w;

  if (tds[firstin].innerHTML == tds[firstin + 1].innerHTML && tds[firstin + 1].innerHTML == tds[firstin + 2].innerHTML) {
    w = true;
  }
  return w;
}

function checkvert() {
  w = false;
  for (let i = 0; i < 3; i++) {
    w = onevert(i);
    if (w) break;
  }
  return w;
}

function onevert(nvert) {
  w = false;
  if (tds[nvert].innerHTML == "") return w;

  if (tds[nvert].innerHTML == tds[nvert + 3].innerHTML && tds[nvert + 3].innerHTML == tds[nvert + 6].innerHTML) {
    w = true;
  }
  return w;
}
