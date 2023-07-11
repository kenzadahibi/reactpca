import React from "react";
import "C:/Users/hp/reactpca/src/SharedComponents/CenterContainer/Container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
const Container = () => {
  return (
    <div class="container">
      <div class="search-container">
        <form class="search-form">
          <input type="text" placeholder="Recherche..." />
          <button type="submit">Rechercher</button>
        </form>
      </div>
      <div class="sort-container">
        <div class="sort-box" id="level-sort">
          <FontAwesomeIcon icon={faSort} />
          <label for="level-sort-select">Trier par niveau :</label>
        </div>
        <div class="sort-box" id="date-sort">
          <FontAwesomeIcon icon={faSort} />
          <label for="date-sort-select">Trier par date :</label>
        </div>
        <div class="sort-box" id="date-sort">
          <FontAwesomeIcon icon={faSort} />
          <label for="date-sort-select">Trier par type :</label>
        </div>
      </div>
    </div>
  );
};
export default Container;
