import React from 'react'

const AboutCounter = (props) => {
    if (props !== '') {
        return (
            <div className="col-12 col-md-4">
                <div className="counter_box">
                    <div className="divider"></div>
                    <span className="counter">{props.data.counter}</span>
                    <h5>{props.data.desctiption}</h5>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default AboutCounter;
