import axios from 'axios';
// install dulu axios abis itu import disini, fungsi nya untuk membuat HTTP request ke server

export const login = (data, callback) => {
    // (data, callback) ini parameter yang nanti di pake buat jalanin fungsi nya, data buat data yang nanti kita ambil dari form sedangkan callback itu fungsi yang di panggil setelah request selesai
    // const credentials = { username: 'john_doe', password: 'pass123' };
    axios.post('https://fakestoreapi.com/auth/login', data).then((response) => {
        // axios.post itu method untuk ngirim data ke server
        // url itu adalah endpoint yang kita tuju, data itu adalah data yang kita kirim ke server
        // .then itu adalah method yang di panggil setelah request berhasil
        console.log(response) // Cek response dari server lewat console
        callback(true, response.data.token) // true itu kalo request berhasil, response.data.token itu adalah token yang kita dapet dari server dan dikirim ke callback supaya bisa diproses di component yang manggil fungsi ini
    }).catch((error) => {
        // .catch error itu method yang di panggil ketika request gagal
        callback(false, error) // false itu kalo request gagal, kita kirim error ke callback supaya bisa diproses di component 
        console.error(error); // Cek error dari server lewat console
    })
}