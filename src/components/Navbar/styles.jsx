import styled from "styled-components";
import { NavLink } from "react-router";

export const NavbarWrapper = styled.nav`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 80px;
    padding: 0 20px;
    border-bottom: 1px solid #dbdbdb;
    position: fixed;
    z-index: 1000;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur()(12px), saturate(180%);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);

    @media (max-width: 768px) {
        padding: 15px;
        height: 60px;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px; /* Important */
    margin: 0 auto; /* Keeps the content in the center */
    width: 100%;
`

export const Logo = styled.img`
    height: 45px;
    width: auto;

    @media screen and (max-width: 768px) {
        height: 35px;
    }
`

export const NavLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 650px) {
        display: none;
    }
`

export const NavItem = styled(NavLink)`
     width: fit-content;
     color: ${({theme}) => theme.colors.primarytext};
     font-size: ${({theme}) => theme.typography.desktopBody};
     cursor: pointer;
     text-decoration: none;
     -webkit-tab-highlight-color: transparent;

     &::before {
        content: "";
        display: block;
        width: 0;
        height: 2px;
     }

     &::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        margin-top: 3px;
        background-color: ${({theme}) => theme.colors.accent};
        transition: width 0.3s ease-in-out;
     }

     &:hover::after {
        width: 100%;
     }

     &.active::after {
        width: 100%;
     }

     @media screen and (max-width: 786px) {
        font-size: ${({theme}) => theme.typography.tabletBody};
     }

     @media screen and (max-width: 480px) {
        font-size: ${({theme}) => theme.typography.mobileBody};
     }
`

export const Anchor = styled.a`
    width: fit-content;    
    text-decoration: none;
    color: inherit;
    display: inline-block;
`

export const CTAEnquiryNow = styled.button`
    background-color: ${({theme}) => theme.colors.accent};
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: ${({theme}) => theme.typography.desktopBody};

    @media screen and (max-width: 650px) {
        margin-top: 10px;
    }

    /* When the mobile menu appears */
    @media screen and (max-width: 400px) {
        font-size: ${({theme}) => theme.typography.mobileBody};
    }

    @media screen and (max-width: 480px) {
        font-size: ${({theme}) => theme.typography.mobileBody};
    }
`

export const NavbarMobileMenuIcon = styled.img`
    display: none;
    height: 35px;
    width: auto;

    /* It appears at 650px */
    @media screen and (max-width: 650px) {
        display: block;
        cursor: pointer;
    }
`

export const NavbarMobileMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 100%;
    width: 100%;
    background-color: ${({theme}) => theme.colors.secondary};
    display: none; /* it will apperar on desktop */
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px 40px;
    gap: 10px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    height: calc(100vh - 60px);
    overflow-y: auto; /* For scrolling */
    transition: left ease-in-out 0.3s;

    &.active {
        left: 0;
    }

    /* It will appear when the screen width goes below 650px */
    @media screen and (max-width: 650px) {
        display: flex;
    }

    /* For making it responsive */
    @media screen and (max-width: 768px) {
        padding: 20px 20px;
        max-height: calc(100vh - 60px);
        top: 60px;
    }

    @media screen and (max-width: 480px){
        padding: 20px 20px;
    }
` 

export const NavbarMobileItem = styled(NavLink)`
    width: fit-content;
    color: ${({theme}) => theme.colors.primarytext};
    font-size: ${({theme}) => theme.typography.desktopSubHeadings};
    cursor: pointer;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent; /* In mobile browsers we cannot select this text to improve the user experirence  */
    transition: color ease-in-out 0.2s;
    user-select: none;

    &.active {
        color: ${({theme}) => theme.colors.accent};
    }

    &:hover {
        color: ${({theme}) => theme.colors.accent};
    }

    @media screen and (max-width: 768px) {
        font-size: ${({theme}) => theme.typography.tabletSubHeadings};
    }

    @media screen and (max-width: 480px) {
        font-size: ${({theme}) => theme.typography.MobileSubHeadings};
    }
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #dbdbdb;
    margin: 10px 0;

    @media screen and (max-width: 768px) {
        margin: 5px 0;
    }
`