//*Debe tener: 
//Botones/Opciones para filtrar por continente y por tipo de actividad turística.
//Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población.
//Paginado: el listado de países se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 10 países por página.
import Card from '../card/Card';

import styles from './CardsView.module.css'

function CardsView() {

    return (
      <div>
        <p> CARDS VIEW!</p>
        <Card/>
      </div>
    );
  }

  export default CardsView;