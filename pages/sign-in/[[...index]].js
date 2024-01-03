import { SignIn } from '@clerk/nextjs';
import styled from 'styled-components';

const StyledSignInPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export default function SignInPage() {
  return (
    <StyledSignInPage>
      <SignIn />
    </StyledSignInPage>
  );
}
