import './AboutCrad.scss'


const AboutCard = ({ HandleSeeModale, selectedMovie, filteredProducts }) => {
    return (
      <>
        <div className="wrapper_about">
          {filteredProducts.map((item) => (
            <>
              {selectedMovie === item.id && (
                <div className='wrapper_text'>

<p><span className='span_header_text_about'>Назва:</span> {item.name}</p>
<p><span className='span_header_text_about'>Ціна:</span> {item.prise}</p>
<p><span className='span_header_text_about'>Опис:</span> {item.datails}</p>
<img src={item.image} alt="photo" className='img_header_about'/>
                </div>
                     
              )}
            </>
          ))}
          <button onClick={HandleSeeModale}>Скасувати</button>
        </div>
      </>
    );
  };
  
  export default AboutCard;