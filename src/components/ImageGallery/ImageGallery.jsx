import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
function ImageGallery({ openModal, data, afterOpenModal }) {
  return (
    <ul className={css.container}>
      {data.map(item => {
        const handlerOnClick = () => {
          openModal();
          afterOpenModal(item);
        };
        return (
          <li className={css.item} key={item.id} onClick={handlerOnClick}>
            <ImageCard
              afterOpenModal={afterOpenModal}
              openModal={openModal}
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
