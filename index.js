import * as cheerio from "cheerio";
// const cheerio = require('cheerio');
import axios from "axios";

const main = async () => {
  // Hacer una request a un sitio web a scrapear
  // Cargar ese HTML en Cheerio
  // Usar $ para obtener elemento de esa web
  const recetas = [];
  for (let i = 1; i <= 3; i++) {
    const webResponse = await axios.get(
      `https://www.paulinacocina.net/recetas/page/${i}`
    );
    const paulinaCocinaRecetas = webResponse.data;

    const $ = cheerio.load(paulinaCocinaRecetas);

    $("h3.elementor-heading-title")
      .toArray()
      .forEach((elem) => {
        recetas.push($(elem).text());
      });
  }
  console.log("La cantidad recetas es: ", recetas.length);
  console.log("Recetas: ", recetas)
};

main();
