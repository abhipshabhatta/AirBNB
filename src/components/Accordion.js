import Arrow from "../assets/arrow.svg";
import React, { useState } from 'react';
import '../styles.css';


const Accordion = ({item}) => {
    const [isActiveIndex, setIsActiveIndex] = useState(false);

    const toggleAccordion = () => {
        console.log(isActiveIndex)
        setIsActiveIndex(!isActiveIndex);
    };

    return(
		<div  className={`accordion-item ${isActiveIndex ? "active": ""}`}>
            <div
                className="accordion-header"
                role="button"
                onClick={() => toggleAccordion()}
            >
                <h2>{item.title}</h2>
                <button>
                <img src={Arrow} alt="arrow" style={{transform:  'rotate(0deg)' }} />
                </button>
            </div>
            {isActiveIndex && (
                <div className="accordion-body">

                    {!Array.isArray(item.content) ? item.content : item.content.map((e, index) => <p key={index}>{e}</p>) }
                    </div>
            )}
		</div>
    )
}

export default Accordion;