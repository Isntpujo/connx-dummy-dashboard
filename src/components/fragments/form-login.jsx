import InputForm from '../elements/input';
import Button from '../elements/button';
import { useState } from 'react';
import { login } from '../../services/auth.service';

const FormLogin = () => {
  const [form, setForm] = useState({
    username: '', // Tampung username dari input form
    password: '', // Tampung password dari input form
  });

  // const [errors, setErrors] = useState({});

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1); // Fungsi ini buat ngambil huruf pertama dari string dan diubah jadi huruf kapital
  }

  const [loginFailed, SetLoginFailed] = useState(''); // Tampung error massage dari server disini

  const capitalizeMessage = capitalize(loginFailed); // Panggil fungsi capitalize untuk ngubah huruf pertama dari error message jadi huruf kapital

  const handleChange = (event) => {
    // Fungsi handle ketika user ngetik di input form
    // Kita set form nya, ketika user ngetik sesuatu di form kita set value form nya
    setForm({
      ...form, // Kita pake Spread operator buat ambil semua value yang ada di form
      [event.target.name]: event.target.value, // Ketika user ngetik sesuatu di form kita ambil value nya dan set value nya ke setForm
    });
  };

  // const handleLogin = (event) => {
  //   event.preventDefault();

  //   const newErrors = {};

  //   if (!form.username.trim()) {
  //     newErrors.username = 'Username is required';
  //   }

  //   if (!form.password.trim()) {
  //     newErrors.password = 'Password is required';
  //   } else if (form.password.length < 6) {
  //     newErrors.password = 'Password must be at least 6 characters long';
  //   }

  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //   } else {
  //     localStorage.setItem('token', 'tkn123lgn');
  //     window.location.href = '/dashboard';
  //     console.log('Login successful!');
  //   }
  // };

  const handleTestLogin = (event) => {
    event.preventDefault(); // Biar browser gak reload ketika kita submit form

    // const data = {
    //   username: event.target.username.value, // Ambil username dari input form
    //   password: event.target.password.value, // Ambil password dari input form
    // };

    login(form, (status, res) => {
      // parameter pertama -> form dapet dari useState form yang kita buat diatas
      // parameter kedua -> yang ada didalam kurung (status, res) itu adalah callback function yang kita buat di auth.service.js
      console.log('STATUS:', status); // Cek statusnya apa ketika login, kalo gagal bakal false
      console.log('RES:', res); // Cek response dari server yang isinya info
      if (status) {
        localStorage.setItem('token', res); // Kalo login berhasil kita simpen token nya ke localStorage
        localStorage.setItem('username', form.username); // Kalo login berhasil kita simpen username ke localStorage
        window.location.href = '/dashboard'; // Login berhasil kira redirect ke dashboard page
      } else {
        SetLoginFailed(res.response.data); // Kalo login gagal kita tampilkan error message dari server
        console.log(res.response.data); // Cek isi pesan dari server
      }
    });
  };

  return (
    <form onSubmit={handleTestLogin} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        {loginFailed && <p className="text-xs text-red-700">{capitalizeMessage}</p>}
        <InputForm value={form.username} onChange={handleChange} type="text" placeholder="Username" name="username" />
        {/* {errors.username && <p className="text-xs text-red-700">{errors.username}</p>} */}
        <InputForm value={form.password} onChange={handleChange} type="password" placeholder="Password" name="password" />
        {/* {errors.password && <p className="text-xs text-red-700">{errors.password}</p>} */}
      </div>
      <Button color="primary">Login</Button>
    </form>
  );
};

export default FormLogin;
