import bannerImage from '../assets/banner.jpg'; // Ruta relativa correcta

function Banner() {
  return (
    <div className="banner container-fluid">
      <img 
        src={bannerImage}
        alt="Banner" 
        className="banner-image"
      />
    </div>
  );
}

export default Banner;