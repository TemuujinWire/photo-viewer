import "./Gallery.css";

const urls = [
  "Gallery/1.jfif",
  "Gallery/2.jfif",
  "Gallery/3.jfif",
  "Gallery/4.jfif",
  "Gallery/5.jfif",
  "Gallery/6.jfif",
]

function Gallery(props) {
  return (
    <div className="view-wrapper-wrapper">
      <div className="view-wrapper">
        <div className="gallery">
          {urls.map((url) => <Thumbnail key={url} onClick={() => props.setImg(url)} url={url} isSelected={props.selectedImg===url ? "selected" : undefined}/>)}        
        </div>
      </div>
    </div>
  )
}

function Thumbnail(props) {
  return (
    <div className="thumbnail">
      <img src={props.url} onClick={props.onClick} className={props.isSelected}/>
    </div>
  )
}
  
export default Gallery;