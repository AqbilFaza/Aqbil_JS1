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
