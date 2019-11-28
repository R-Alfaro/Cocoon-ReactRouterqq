import React from 'react'

const ServicesBoxes = (props) => {
    if (props !== '') {
        return (
            <div className="col-md-6 col-12">
                <div className="img_box_one text-left">
                    <img src={props.data.image} alt={props.data.imageAlt} />
                    <div className="content">
                        <h5>{props.data.header}</h5>
                        <p>{props.data.paragraph}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default ServicesBoxes;
