import "./Ajax.js";
import { Postes } from "./postes.js";

const posterContainer = document.querySelector(".movie-box-container");
const mainPost = new Postes(posterContainer);

mainPost.init();
