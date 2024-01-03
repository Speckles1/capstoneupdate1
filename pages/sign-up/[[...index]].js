import { SignUp } from '@clerk/nextjs';
import styled from 'styled-components';

const StyledSignUpPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export default function SignUpPage() {
  return (
    <StyledSignUpPage>
      <SignUp />
    </StyledSignUpPage>
  );
}
