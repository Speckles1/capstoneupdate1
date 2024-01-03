import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import {useContext, useState} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import SearchIcon from "@/components/icons/SearchIcon";

const StyledHeader = styled.header`
  background-color: #FF0000;
  position:sticky;
  top:-15px;
  z-index:10;
`;
const Logo = styled(Link)`
  color:#fff;
  text-decoration:none;
  position: relative;
  z-index: 3;
  top:-15px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;
const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #FF0000;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
  
`;
const NavLink = styled(Link)`
  display: block;
  color:#FFFFFF;
  text-decoration:none;
  min-width:30px;
  padding: 17px 0;
  svg{
    height:20px;
  }
  @media screen and (min-width: 768px) {
    padding:20;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
  
`;
const SideIcons = styled.div`
  display: flex;
  align-items: center;
  a{
    display:inline-block;
    min-width:20px;
    color:#FFFFFF;
    svg{
      width:19px;
      height:19px;
    }
  }
`;


export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive,setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
        
          <Logo href={"/"}> Harrys Toys 
          &nbsp;<img href={"/"} src="https://i.ibb.co/dgtLkCW/logogo.png"  alt="aa" width="50" height="50"  />
          </Logo>       
          <StyledNav mobileNavActive={mobileNavActive}>
         
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/products'}>All products </NavLink>
            <NavLink href={'/categories'}>Categories</NavLink>
            <NavLink href={'/account'}>Account</NavLink>
            <NavLink href={'/cart'}>Cart </NavLink>
            <NavLink href={'/models'}> AR </NavLink>
            <NavLink href={'/chatpage'}>Chat</NavLink>
          </StyledNav>
          <SideIcons>
            <Link href={'/search'}><SearchIcon /></Link>
            <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
              <BarsIcon />
            </NavButton>
          </SideIcons>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
 //({cartProducts.length})