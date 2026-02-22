import "./Colaboraciones.css";

const images = [
  "/img/carousel1.png",
  "/img/carousel2.png",
  "/img/carousel3.png",
  "/img/carousel4.png",
  "/img/carousel5.png",
  "/img/carousel7.png",
  "/img/carousel8.png",
  "/img/carousel9.png",
  "/img/carousel10.png",
  "/img/carousel11.png",
  "/img/carousel12.png",
    "/img/carousel6.jpg",
  "/img/carousel13.png",
  "/img/carousel14.png",
  "/img/carousel15.jpeg",  
  "/img/carousel17.png",
  "/img/carousel18.png",
  "/img/carousel16.jpg",
  "/img/carousel19.png"
];

const Colaboraciones = () => {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="colaboraciones-container">
      <h2 className="colaboraciones-title">Contamos con el respaldo y la colaboración de:</h2>

      <div className="carousel-wrapper">
        <div className="carousel-track infinite-scroll">
          {duplicatedImages.map((img, index) => (
            <div className="carousel-item" key={index}>
              <img
                src={img}
                alt={`Colaboración ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colaboraciones;
