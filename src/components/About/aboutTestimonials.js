import React from 'react'

const AboutTestimonials = (props) => {
    if (props !== '') {
        return (
            <div className="testimonial_box">
                <p>{props.data.paragraph}</p>
                <div className="testimonial_author">
                    <img src={props.data.image} alt={props.data.imageAlt} />
                    <h5>{props.data.header}</h5>
                    <p>{props.data.title}
                        <span>{props.data.Company}</span>
                    </p>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default AboutTestimonials;
