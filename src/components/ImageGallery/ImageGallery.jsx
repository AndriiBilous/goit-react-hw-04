import ImageCard from '../ImageCard/ImageCard';
function ImageGallery({ modalOpen, data }) {
  return (
    <ul>
      {data.map(item => {
        return (
          <li key={item.id}>
            <ImageCard
              onClick={modalOpen}
              url={item.urls}
              alt={item.alt_description}
            />
          </li>
        );
      })}
    </ul>
  );
}
export default ImageGallery;
