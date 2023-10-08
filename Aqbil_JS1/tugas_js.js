// If Else
let nilai = 91;

if (nilai >= 80) {
  console.log("Nilai Kamu A");
} else if (nilai >= 70) {
  console.log("Nilai Kamu B");
} else if (nilai >= 60) {
  console.log("Nilai Kamu C");
} else if (nilai >= 50) {
  console.log("Nilai Kamu D");
} else {
  console.log("Nilai Kamu E");
}



// Nested if
let jamParkir = 5; 

const biayaPerJamPertama = 2000; 
const biayaPerJamSelanjutnya = 3000; 
const maxBiaya = 30000; 

let biayaParkir = 0;

if (jamParkir > 0) {
  biayaParkir += biayaPerJamPertama; 

  if (jamParkir > 1) {
    biayaParkir += (jamParkir - 1) * biayaPerJamSelanjutnya; 
  }

  if (biayaParkir > maxBiaya) {
    biayaParkir = maxBiaya; 
  }

  console.log(`Biaya parkir Anda adalah Rp.${biayaParkir}`);
} else {
  console.log("Jam parkir harus lebih dari 0");
}



// Switch Case
let nomorPlat = "P 1234 AB";

let kota;

let kodeKategori = nomorPlat.slice(0, 2);

switch (kodeKategori) {
  case "L ":
    kota = "Surabaya";
    break;
  case "M ":
    kota = "Bangkalan";
    break;
  case "N ":
    kota = "Malang";
    break;
  case "S ":
    kota = "Bojonegoro";
    break;
  case "W ":
    kota = "Gresik";
    break;
  case "P ":
    kota = "Banyuwangi";
    break;
  default:
    kota = "Kendaraan tidak dikenali";
    break;
}

console.log(`Nomor plat ${nomorPlat} adalah kendaraan dari ${kota}.`);



// For Statement
let tinggi = 5; // Ganti nilai ini dengan tinggi segitiga yang diinginkan

for (let x = 1; x <= tinggi; x++) {
  let baris = '';
  for (let y = 1; y <= x; y++) {
    baris += y + ' ';
  }
  console.log(baris);
}



//While
let pilih;

while (true) {
  pilih = prompt("Pilih konversi : \n(1) Celsius ke Fahrenheit \n(2) Fahrenheit ke Celsius \n(3) Keluar");

  if (pilih === "1") {
    let celsius = parseFloat(prompt("Masukkan suhu dalam Celsius :"));
    let fahrenheit = (celsius * 9/5) + 32;
    console.log("Suhu dalam Fahrenheit : " + fahrenheit.toFixed(2) + " °F");
  } else if (pilih === "2") {
    let fahrenheit = parseFloat(prompt("Masukkan suhu dalam Fahrenheit :"));
    let celsius = (fahrenheit - 32) * 5/9;
    console.log("Suhu dalam Celsius : " + celsius.toFixed(2) + " °C");
  } else if (pilih === "3") {
    break;
  } else {
    console.log("Pilihan tidak valid. Silakan coba lagi.");
  }
}



//Do While
let kata = prompt("Masukkan kata:");
let balik = "";
let i = kata.length - 1;

do {
  balik += kata[i];
  i--;
} while (i >= 0);

console.log("Kata setelah dibalik: " + balik);



//Function
function bilanganPrima(angka) {
    if (angka <= 1) {
      return false;
    }
    for (var i = 2; i < angka; i++) {
      if (angka % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  var cekAngka = 23;
  if (bilanganPrima(cekAngka)) {
    console.log(cekAngka + " adalah bilangan prima.");
  } else {
    console.log(cekAngka + " bukan bilangan prima.");
  }
  
