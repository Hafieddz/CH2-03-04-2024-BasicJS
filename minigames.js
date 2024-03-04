/* 
1. jika student mengisi MAU pada student wish, maka prompt lagi 
pertanyaan, BERAPA KAH NILAI AKHIR SMA/SMK mu ?
2. jika nilai akhir dari SMA/SMK mu kurang dari 30, maka 
alert "tidak mungkin masuk univ"
3. jika nilai akhir dari SMA/SMK mu kurang dari 50, maka 
lakukan perhitungan chanceGetUniv = 

3a. jika hasil chanceGetUniv dibawah 50 persen, berikan
    alert "hmm kemungkinan kamu (NAMA) kecil masuk UNIV"

3b. jika hasil chanceGetUniv diatas 50 persen, berikan
alert "hmm kemungkinan kamu (NAMA) bisa masuk UNIV"

4. jika hasil chanceGetUniv diatas 70 persen DAN Nilai SMA
nya diatas 60 maka berikan alert "hei (NAMA) pasti masuk UNIV dengan (NILAI SMA) mu yang besar itu"

5. jika hasil chanceGetUniv diatas 70 persen ATAU Nilai SMA
nya diatas 80 maka berikan alert "hei (NAMA) pasti masuk UNIV dengan (NILAI SMA) mu yang besar itu"
*/

var nama = prompt('Masukkan nama kamu..');
var studentWish = prompt('Mau masuk universitas tidak?');


// 1
if (studentWish === 'mau') {
    var nilai = prompt('Berapa nilai akhir SMA/SMK mu?');
    var chanceGetUniv = Math.floor(Math.random() * 100) + 1;

    // 2
    if (nilai < 30) {
        alert('Tidak mungkin untuk masuk univ');
        // 3
    } else if (nilai < 50) {
        // 3a
        if (chanceGetUniv < 50) {
            alert(`Hmmm kemungkinan kamu ${nama} kecil untuk masuk univ`)
            // 3b
        } else if (chanceGetUniv > 50)
            alert(`Hmmm kemungkinan kamu ${nama} bisa untuk masuk univ`)
        // 4
    } else if (chanceGetUniv > 70 && nilai > 60) {
        alert(`Hei ${nama} pasti masuk univ dengan nilai ${nilai} mu yang besar itu`)
        // 5
    } else if (chanceGetUniv > 70 || nilai > 80) {
        alert(`Hei ${nama} pasti masuk univ dengan nilai ${nilai} mu yang besar itu`)
    // Jika nilai >= 50
    } else {
        alert(`Kemungkinan kamu untuk lulus adalah ${chanceGetUniv} dengan nilai ${nilai}`)
    }
} else {
    alert('Goodluck bang..')
}