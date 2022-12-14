import styled from "styled-components";
import { FaTimes } from "react-icons/fa";


export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #5fb6f1;
  box-shadow: 3px 0px 5px 0px rgb(153 143 153);
  /* background: #2F7ED5; */
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  left: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;