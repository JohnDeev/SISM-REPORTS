import styled from 'styled-components'
import { NavLink as Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai'

export const Nav = styled.nav`
  width:100vw;
  /* background: #5fb6f1; */
  background: #2F7ED5;
  height: 60px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 1.7rem;
  color: white;
  box-shadow: 0px 3px 5px 0px rgb(153 143 153);
  padding: 0 80px;
  
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const NavMenu = styled.div`
  display:flex;
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
  width: 200px;
`;

export const Bars = styled(AiOutlineMenu)`
  font-size: 1.7rem;
`;
