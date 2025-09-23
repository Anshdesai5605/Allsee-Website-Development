import React from 'react'
import { testimonials } from "../../utils/constants";
import Rating from "@mui/material/Rating";
import {
    TestimonialsWrapper,
    BgImage,
    TestimonialsContainer,
    Heading,
    TestimonialsList,
    TestimonialCard,
    CustomerName,
    TestimonialText
} from "./styles";

const Testimonials = () => {
  return (
        <TestimonialsWrapper>
            <BgImage src="/assets/testimonials_bg.png" />
            <TestimonialsContainer>
                <Heading>Tales of our customers</Heading>
                <TestimonialsList>
                    {
                    testimonials.map((testimonial) => {
                        return (
                            <TestimonialCard
                            key={testimonial.id}
                            bgColor={testimonial.bgColor}
                            className={`testimonial-caard-${testimonial.id}`}
                            >
                                <CustomerName>{testimonial.name}</CustomerName>
                                <TestimonialText>{testimonial.testimonial}</TestimonialText>
                                <Rating name="read-only" value={testimonial.stars} readOnly />
                            </TestimonialCard>
                        )
                    })
                }
                </TestimonialsList>
            </TestimonialsContainer>
        </TestimonialsWrapper>
  ) 
}

export default Testimonials;