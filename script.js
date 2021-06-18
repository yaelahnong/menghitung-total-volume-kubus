function hitungTotalVolumeKubus(sisi) {
  if (sisi.length > 0) {
    if (sisi.indexOf(',') > -1) {
      sisi = sisi.split(',');
      return sisi.map(s => s ** 3).reduce((acc, curr) => acc + curr);
    }
    return sisi ** 3;
  } else {
    alert('Kamu belum memasukkan sisi kubus.');
  }
}

let inSisi = prompt('Masukkan panjang sisi kubus =');
alert(`Total Volume Kubusnya ${hitungTotalVolumeKubus(inSisi)}`);
