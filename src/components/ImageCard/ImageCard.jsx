function ImageCard({ url: { small, regular }, alt, onClick }) {
  const handlerClick = () => {
    onClick(regular);
  };
  return (
    <div onClick={handlerClick}>
      <img src={small} alt={alt} />
    </div>
  );
}
export default ImageCard;
