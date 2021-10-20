import { useState } from 'react';
import "./PhotoView.css";

function PhotoView() {
  const [path, setpath] = useState("Gallery/1.jfif");

  return (
    <div className="view-wrapper">
      <div className="view">
        <img src={`${process.env.PUBLIC_URL}/${path}`}/>
      </div>
    </div>
    
  )
}
  
export default PhotoView;