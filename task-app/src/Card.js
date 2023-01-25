function Card(props) {
  return (
    <div className="Card">
      <img loading="lazy" src={props.image} alt={`${props.name}`} />
      <p>{props.name}</p>
    </div>
  );
}
// the individual cards in the grid - contains a logo and an album name, when clicked calls the checkAlbum function in app

export { Card };
