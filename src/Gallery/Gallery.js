import { useState } from 'react';
import "./Gallery.css";

function Gallery(props) {
  return (
    <div className="view-wrapper-wrapper">
      <div className="view-wrapper">
        <div className="gallery">
          {/* TODO Need to do this programatically */}
          <Thumbnail setpath={props.setpath} url="Gallery/1.jfif" selected={props.path=="Gallery/1.jfif"}/>
          <Thumbnail setpath={props.setpath} url="Gallery/2.jfif" selected={props.path=="Gallery/2.jfif"}/>
          <Thumbnail setpath={props.setpath} url="Gallery/3.jfif" selected={props.path=="Gallery/3.jfif"}/>
          <Thumbnail setpath={props.setpath} url="Gallery/4.jfif" selected={props.path=="Gallery/4.jfif"}/>
          <Thumbnail setpath={props.setpath} url="Gallery/5.jfif" selected={props.path=="Gallery/5.jfif"}/>
          <Thumbnail setpath={props.setpath} url="Gallery/6.jfif" selected={props.path=="Gallery/6.jfif"}/>          
        </div>
      </div>
    </div>
  )
}

function Thumbnail(props) {
  return (
    <div className="thumbnail">
      <img src={props.url} onClick={() => props.setpath(props.url)} className={props.selected ? "selected" : "none"}/>
    </div>
  )
}
  
export default Gallery;