import React from "react";
import Photo from "./Photo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Imgix from "react-imgix";
import PropTypes from "prop-types";
import Masonry from "react-masonry-component";

const PhotoContainer = (props) => {
  const displayPhotos = () => (
    <div className="gallery">
      {props.photos.map((photo) => (
        <div className="container">
          <Imgix className="image" src={photo.url} />
          <div className="overlay">
            <h1 className="title font-weight-bolder">{photo.title}</h1>
            <h2 className="eye">{photo.photographer}</h2>
          </div>
        </div>
      ))}
    </div>
  );

  return <div>{displayPhotos()}</div>;
};

export default PhotoContainer;
