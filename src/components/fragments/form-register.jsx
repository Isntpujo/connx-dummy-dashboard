import InputForm from '../elements/input';
import Button from '../elements/button';

const FormRegister = () => {
  return (
    <form action="" className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <InputForm type="text" placeholder="Your full name" name="fullname" />
        <InputForm type="email" placeholder="example@gmail.com" name="email" />
        <InputForm type="password" placeholder="Your password" name="password" />
        <InputForm type="password" placeholder="Confirm your password" name="confirmPassword" />
      </div>
      <Button variant="w-full bg-blue-600 hover:bg-blue-700">Register</Button>
    </form>
  );
};

export default FormRegister;
