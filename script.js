const barang = {
    kode: "INV-001",
    nama: "Laptop",
    stok: 10,
    harga: 7500000
};

console.log(barang.nama);
console.log(barang.stok);
console.log(`Nama barang = ${barang.nama}, stoknya = ${barang.stok}`);

const stock = 0;
const status = "habis";

if (stock === 0 || status === "habis") {
    console.log("Periksa Ketersediaan Barang");
}

const stok1 = 0

if (stok1 === 0) {
    console.log("habis");
} else if (stok1 < 3) {
    console.log("stok menipis");
} else {
    console.log("stok aman");
}

for (let i =1; i <= 5; i++) {
    console.log("perulangan ke-", i);
}

for (let i =10; i >= 0; i--) {
    console.log("perulangan ke-", i);
}

for (let i = 10; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(i + " angka genap");
    } else {
        console.log(i + " angka ganjil");
    }
}

const daftarbarang = [
    "laptop",
    "mouse",
    "keyboard",
    "monitor"
];

for (let i = 0; i < daftarbarang.length; i++) {
    console.log(daftarbarang[i]);
}

let number = 1;

do {
    console.log(`iterasi perulangan do while ke-${number}`);
    number++;
} while (number <= 5);

function sisastok(sisa) {
    if (sisa === 0) {
        return "habis";
    } else if (sisa < 5) {
        return "menipis";
    } else {
        return "aman";
    }
}

console.log(sisastok(0));
console.log(sisastok(2));
console.log(sisastok(10));

const hitungLuas = function(panjang, lebar) {
    return panjang * lebar;
}

console.log(hitungLuas(5, 3));
document.write(hitungLuas(5, 3));