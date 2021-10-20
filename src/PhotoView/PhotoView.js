import { useState } from 'react';
import Gallery from '../Gallery/Gallery';
import "./PhotoView.css";

function PhotoView() {
  const [path, setpath] = useState("Gallery/1.jfif");

  return (
    <div className="view-wrapper-wrapper">
      <div className="view-wrapper">
        <div className="view">
          <img src={`${process.env.PUBLIC_URL}/${path}`}/>
        </div>
      </div>
      <Gallery path={path} setpath={setpath}/>
    </div>
    
  )
}
  
export default PhotoView;