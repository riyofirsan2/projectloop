cekNilai = (nilaiSiswa) => {

     if (nilaiSiswa < 60) {
        return 'adalah D';
} else if (nilaiSiswa < 75) {
        return 'adalah C';
} else if (nilaiSiswa < 90) {
            return 'adalah B';
} else {
            return 'adalah A';
        }
    }
    
 for (let i = 1; i < 100; i++) {
 let nilai = cekNilai(i);
 console.log(`Nilai kamu adalah ${i} dengan skor ${nilai}`);
 }