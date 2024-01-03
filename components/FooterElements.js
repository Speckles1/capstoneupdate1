import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #ff0000;
  justify-content: center;
  width: 100%;
`;

export const FooterWrap = styled.div`
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0auto;
  width: 100%;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    width: 100%;
    box-sizing: border-box;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
  width: 100%;
`;

export const FooterLinkitems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0;
  justify-content: center;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 13px;
  text-align: center;
  width: 100%;
`;

export const FooterLink = styled.h1`
 color:#fff
 text-decoration: none;
 margin-bottom: 0.5rem;
 font-size: 14px;
 width: 100%;

 &:hover{
    color: #01bf71;
    transition: 0.3s ease-out
 }

 `;
