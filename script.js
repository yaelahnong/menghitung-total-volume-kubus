function hitungTotalVolumeKubus(sisi) {
	// console.log(typeof sisi);
	// console.log(sisi);

	if (typeof sisi == 'object') {
		const kumpulanVolumeKubus = [];
		sisi.forEach((sisi) => {
			sisi = parseInt(sisi);
			let volumeTiapKubus = sisi ** 3;
			kumpulanVolumeKubus.push(volumeTiapKubus);
		});
		const totalVolumeKubus = kumpulanVolumeKubus.reduce((accumulator, currentValue) => accumulator + currentValue);
		return totalVolumeKubus;
	}

	const volume = sisi ** 3;
	return volume;
}

let inSisi = prompt('Masukkan panjang sisi kubus =');

if (inSisi.length > 0) {
	if (inSisi.indexOf(',') > -1) {
		inSisi = inSisi.split(',');
	}
	alert(`Total Volume Kubusnya ${hitungTotalVolumeKubus(inSisi)}`);
} else {
	alert('Kamu belum memasukkan sisi kubus.');
}
