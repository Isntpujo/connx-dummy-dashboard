import FormRegister from '../components/fragments/form-register';
import AuthLayout from '../components/layouts/auth-layouts';

const RegisterPage = () => {
  return (
    <AuthLayout title="Create Your Account" type="register" description="Please register first to have an account.">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
