let kata = prompt("Masukkan kata:");
let balik = "";
let i = kata.length - 1;

do {
  balik += kata[i];
  i--;
} while (i >= 0);

console.log("Kata setelah dibalik: " + balik);
