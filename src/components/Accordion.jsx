import React, { useState } from "react";
const arrow = "/assets/arrow.svg";

function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`accordion-item ${open ? "active" : ""}`}>
      <div
        className="accordion-header"
        role="button"
        onClick={() => setOpen(!open)}
      >
        <h2>{title}</h2>
        <button>
          {/* rotate arrow */}
          <img 
            src={arrow} 
            alt="toggle arrow"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>
      </div>
      <div className="accordion-body" style={{ maxHeight: open ? "500px" : 0 }}>
        {content}
      </div>
    </div>
  );
}

export default Accordion;
