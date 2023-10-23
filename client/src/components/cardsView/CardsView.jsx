import React, { useState }  from "react";
import Card from '../card/Card';

import styles from './CardsView.module.css'

function CardsView({countries}) {

  //?PAGINADO

  // Estados para el paginado
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el rango de páginas a mostrar
  const totalPages = Math.ceil(countries.length / itemsPerPage);
  const pageRange = Array.from({ length: totalPages }, (_, index) => index + 1);

  // Calcular el índice inicial y final para mostrar los países en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Obtener la lista de países para la página actual
  const countriesOnPage = countries.slice(startIndex, endIndex);


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


    return (
      <div>

        {countriesOnPage.map((country) => (
        <Card
          id={country.id}
          key={country.id}//Nombres con los que viene de la db
          name={country.name}
          continent={country.continents}
          image={country.flag}
          // capital={country.capital}
          // subregion={country.subregion}
          // area = {country.area}
          // population={country.population}
          />
      ))}


      <div >
        <span>Página {currentPage} de {totalPages}</span>
        {pageRange.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
      </div>


      </div>
    );
  }

  export default CardsView;


  


