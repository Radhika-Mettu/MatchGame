import './index.css'

const PhotoItem = props => {
  const {each, selectedImage} = props
  const {id, thumbnailUrl, category} = each
  const clickingCorrectImage = () => {
    selectedImage(id)
  }

  return (
    <li className="list-item">
      <button type="button" onClick={clickingCorrectImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="image6" />
      </button>
    </li>
  )
}
export default PhotoItem
