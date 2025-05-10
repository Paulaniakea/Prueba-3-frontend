import bannerImage from '../assets/banner.jpg'; // Ruta relativa correcta

function Banner() {
  return (
    <div className="banner">
      <img 
        src={bannerImage}
        alt="Banner" 
        className="banner-image"
      />
    </div>
  );
}

export default Banner;