import styled from "styled-components";

export const TestimonialsWrapper = styled.section`
    width: 100%;
    padding: 80px 20px;
    position: relative;
    overflow-x: hidden;

    @media screen and (max-width: 768px) {
        padding: 60px 20px;
    }

    @media screen and (max-width: 480px) {
        padding: 40px 20px;
    }
`

export const BgImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: blur(1px);
`

export const TestimonialsContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`

export const Heading = styled.h2`
    font-size: ${({ theme }) => theme.typography.desktopHeading};
    color: ${({ theme }) => theme.colors.secondarytext};
    margin-bottom: 60px;
    font-family: "Playfair Display", serif;

    @media screen and (max-width: 760px) {
    font-size: ${({ theme }) => theme.typography.tabletHeading};
    margin-bottom: 30px;
    }

    @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.mobileHeading};
    margin-bottom: 30px;
    }
`

export const TestimonialsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

export const TestimonialCard = styled.div`
    background-color: ${({ bgColor }) => 
        bgColor ? `${bgColor}9E` : rgba(255, 255, 255, 0.62)};
    padding: 40px 30px;
    border-radius: 30px;
    max-width: 350px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    &.testimonial-card-0,
    &.testimonial-card-1 {
        color: ${({ theme }) => theme.colors.secondarytext} !important;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`

export const CustomerName = styled.h3`
    font-size: calc(${({ theme }) => theme.typography.desktopSubheading} + 8px);
    color: ${({ theme }) => theme.colors.primarytext};
    margin-bottom: 10px;
    font-family: "Lato", serif;

    @media screen and (max-width: 768px) {
        font-size: calc(${({ theme}) => theme.typography.desktopSubheading} + 6px);
    }

    @media screen and (max-width: 480px) {
        font-size: calc(${({ theme}) => theme.typography.desktopSubheading} + 4px);
    }
`

export const TestimonialText = styled.p`
    font-size: calc(${({ theme}) => theme.typography.desktopSubHeading} + 8px);
    color: ${({ theme }) => theme.colors.primarytext};
    margin-bottom: 10px;
    font-family: "Lato", serif;
    line-height: 1.5;

    @media screen and (max-width: 768px) {
        font-size: calc(${({ theme}) => theme.typography.tabletBody} + 6px);
    }

    @media screen and (max-width: 480px) {
        font-size: calc(${({ theme}) => theme.typography.mobileBody} + 4px);
    }
`