// Bilangan Prima
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
  