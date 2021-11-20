import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useState, useEffect } from "react";

function ListingPictures({ photos, setDisplayPictures }) {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [trackPhotos, setTrackPhotos] = useState([]);

  // Inscreasing the resultion of pictures by changing the "s" to "x" at the end of the url
  useEffect(() => {
    if (!photos) return;
    if (photos.length < 1) return;
    const newPhotos = photos.map((photo) => {
      return photo.href.split("")[photo.href.length - 5] === "s"
        ? photo.href.slice(0, -5) + "x.jpg"
        : photo.href;
    });
    setTrackPhotos([...newPhotos]);
    setPhotoIndex(0);
  }, [photos]);

  const prevPhoto = () => {
    if (photoIndex === 0) {
      setPhotoIndex(trackPhotos.length - 1);
      return;
    } else {
      setPhotoIndex((prevIndex) => prevIndex - 1);
    }
  };
  const nextPhoto = () => {
    if (photoIndex === trackPhotos.length - 1) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex((prevIndex) => prevIndex + 1);
    }
  };

  const changeImage = (e) => {
    if (e.key === "ArrowRight") {
      nextPhoto();
    }
    if (e.key === "ArrowLeft") {
      prevPhoto();
    }
  };

  if (!trackPhotos && !photoIndex) {
    return <div>Loading images...</div>;
  }

  if (trackPhotos.length < 1) {
    return <div></div>;
  }
  return (
    <div
      className="listing-pictures-wrapper"
      tabIndex="0"
      onKeyDown={changeImage}
    >
      <div className="displayed">
        <button onClick={prevPhoto} className="prev-btn">
          <span className="visually-hidden">prev image</span>
          <MdKeyboardArrowLeft aria-hidden="true" />
        </button>
        <button onClick={nextPhoto} className="next-btn">
          <span className="visually-hidden">next image</span>
          <MdKeyboardArrowRight aria-hidden="true" />
        </button>
        <span className="image-count">
          {photoIndex + 1} of {trackPhotos.length}
        </span>
        <img
          onClick={() => setDisplayPictures((prevState) => !prevState)}
          src={trackPhotos[photoIndex]}
          alt=""
        />
      </div>
      <div className="track">
        {trackPhotos.map((trackPhoto, i) => {
          return (
            <div
              onClick={() => setPhotoIndex(i)}
              key={i}
              className={`img-wrapper ${i === photoIndex ? "is-selected" : ""}`}
            >
              <img src={trackPhoto} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListingPictures;
