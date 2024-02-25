import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  @media (max-width: 640px) {
    grid-template-columns: 80%;
  }

  @media (max-width: 500px) {
    grid-template-columns: 95%;
  }
`;

const AdminContainer = styled.main`
  display: grid;
  align-content: center;
  justify-content: center;
  gap: 1.2rem;
`;

const Text = styled.div`
  text-align: center;
`;

function Login() {
  return (
    <LoginLayout>
      <AdminContainer>
        <Logo />
        <Text>Admin</Text>
      </AdminContainer>
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
