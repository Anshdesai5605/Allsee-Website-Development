import React from 'react'
import {
  FooterWrapper,
  FooterContainer,
  FooterInformation,
  CompanyName,
  Logo,
  CompanyNameText,
  CompanyAddress,
  AddressTitle,
  Address,
  CompanyContact,
  ContactDetails,
  ContactIcon,
  ContactText,
  Icon as EmailIcon,
  Icon as PhoneIcon,
  CompanySocialMedia,
  SocialMediaTitle,
  SocialMediaLinks,
  SocialMediaLink,
  SocialMediaIcon,
  Icon as InstagramIcon,
  FooterLinks,
  FooterLinksContainer,
  LinksTitle,
  QuickLinks,
  QuickLink,
  FooterCopyright,
} from "./Styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterInformation>
          <CompanyName>
            <Logo loading="lazy" src="/assets/logo.svg" />
            <CompanyNameText>ALLSEE TEXTILES</CompanyNameText>
          </CompanyName>
          <CompanyAddress>
            <AddressTitle>Registered Office</AddressTitle>
            <Address>182/3, Magarmuha, Ujjain, Madhya Pradesh, 456010</Address>
          </CompanyAddress>
          <CompanyContact>
            <ContactDetails>
              <ContactIcon>
                <EmailIcon src="/assets/email.svg" />
              </ContactIcon>
              <ContactText>allseetextiles@gmail.com</ContactText>
            </ContactDetails>
            <ContactDetails>
              <ContactIcon>
              <PhoneIcon src="/assets/phone.svg" />
              </ContactIcon>
              <ContactText>+91 9873543210</ContactText>
            </ContactDetails>
          </CompanyContact>
          <CompanySocialMedia>
            <SocialMediaTitle>Follow Us</SocialMediaTitle>
            <SocialMediaLinks>
              <SocialMediaIcon>
                <InstagramIcon src="/assets/instagram.svg" />
              </SocialMediaIcon>
            </SocialMediaLinks>
          </CompanySocialMedia>
        </FooterInformation>
        <FooterLinks>
          <FooterLinksContainer>
            <LinksTitle>Ouick Links</LinksTitle>
            <QuickLinks>
            <QuickLink to="/">Home</QuickLink>
            <QuickLink to="/about">About</QuickLink>
            <QuickLink to="/contact">Contact Us</QuickLink>
            <QuickLink to="/categories">Categories</QuickLink>
            </QuickLinks>
          </FooterLinksContainer>
          <FooterLinksContainer>
            <LinksTitle>Catgories</LinksTitle>
            <QuickLinks>
              <QuickLink to="/categories/corporate-wear">Corporate Wear</QuickLink>
              <QuickLink to="/catagories/hotel-linen">Hotel Linen</QuickLink>
              <QuickLink to="/categories/hospital-linen">Hospital Linen</QuickLink>
            </QuickLinks>
          </FooterLinksContainer>
        </FooterLinks>
      </FooterContainer>
      <FooterCopyright>
        <p>
          &copy; {new Date().getFullYear()} Allsee Textiles. All rights reserved.
        </p>
      </FooterCopyright>
    </FooterWrapper>
  );
}

export default Footer;