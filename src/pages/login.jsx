import FormLogin from '../components/fragments/form-login';
import AuthLayout from '../components/layouts/auth-layouts';

const LoginPage = () => {
  return (
    <AuthLayout type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
