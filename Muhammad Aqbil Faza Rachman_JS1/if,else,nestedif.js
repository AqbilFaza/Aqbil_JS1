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
