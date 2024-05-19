import css from './ImageCard.module.css';
function ImageCard({ url: { small }, alt }) {
  return (
    <div>
      <img className={css.img} src={small} alt={alt} width="300" height="200" />
    </div>
  );
}
export default ImageCard;
