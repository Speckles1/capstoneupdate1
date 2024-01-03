import { createGlobalStyle } from 'styled-components';
import { CartContextProvider } from '@/components/CartContext';
import { ClerkProvider } from '@clerk/nextjs';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  html {
    overflow-x: hidden;
  }
  body{
    background-color: #eee;
    padding:0;
    margin:0;
    font-family: 'Poppins', sans-serif;
  }
  hr{
    display: block;
    border:0;
    border-top:1px solid #ccc;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: '#FF0000',
          },
        }}
      >
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </ClerkProvider>
    </>
  );
}
