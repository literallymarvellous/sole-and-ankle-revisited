/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss modal</VisuallyHidden>
        </CloseButton>

        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background: hsl(220deg 5% 40% / 0.5);
  width: 100%;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const Content = styled(DialogContent)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${COLORS.white};
  width: 80%;
  margin-left: auto;
  height: 100%;
  padding: 32px;

  a {
    text-decoration: none;
    color: ${COLORS.gray[900]};

    :focus,
    :active {
      color: ${COLORS.secondary};
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 32px;
  right: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
  font-size: ${18 / 16}rem;
  text-transform: uppercase;
  font-weight: ${WEIGHTS.medium};
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 14px;
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.normal};
  color: ${COLORS.gray[700]};
`;

export default MobileMenu;
