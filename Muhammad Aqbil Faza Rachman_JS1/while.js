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
