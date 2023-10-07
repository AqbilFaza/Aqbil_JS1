let tinggi = 5; // Ganti nilai ini dengan tinggi segitiga yang diinginkan

for (let x = 1; x <= tinggi; x++) {
  let baris = '';
  for (let y = 1; y <= x; y++) {
    baris += y + ' ';
  }
  console.log(baris);
}