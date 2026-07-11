import "./Main.css";

function Main({ comics }) {
  return (
    <main>
      <div className="jumbotron"></div>
      <div className="badge-series">
        <section>CURRENT SERIES</section>
      </div>
      <Comics comics={comics} />
      <div className="btn-container">
        <button className="load-more-btn">LOAD MORE</button>
      </div>
    </main>
  );
}

function Comics({ comics }) {
  return (
    <div className="comicsSection">
      {comics.map((comic) => (
        <div key={comic.id} className="comic">
          <img src={comic.thumb} alt={comic.title} className="cover" />
          <p className="title">{comic.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Main;

/* <img className="jumbotron" src="./img/jumbotron.jpg" alt="jumbotron" /> */
