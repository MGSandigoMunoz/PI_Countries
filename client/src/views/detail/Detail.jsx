import styles from './Detail.module.css'

function Detail() {

    return (
      <div>
        <p> DETAIL!</p>
        <p>ID: </p>
          <p>Name: </p>
          <p>IMAGE</p>
          <p>Continent: </p>
          <p>Capital: </p>
          <p>Subregion: </p>
          {/* Área se pone si tiene, sino no. Usar condicional ternario */}
          <p>Area: </p>
          <p>Population: </p>
      </div>
    );
  }

  export default Detail;

