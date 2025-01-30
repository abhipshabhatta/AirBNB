
const Lightbox = ({toggled, detoggle, aptImg, alt}) => {
    return (
        <div className={`lightbox-background ${toggled? '' : 'd-none'}`} onClick={() => detoggle(false)}>
            <div className="lightbox-content"></div>
             <button tabIndex="0" onClick={() => detoggle(false)} >X</button>
             <img src={aptImg} alt={alt} /> 
        </div>
        
    );

};

export default Lightbox;