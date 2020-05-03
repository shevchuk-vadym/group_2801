import "./Ajax.js";
import { Postes } from "./postes.js";

const posterContainer = document.querySelector("body");
const mainPost = new Postes(posterContainer);

mainPost.init();
