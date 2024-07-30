/*que exporte un objeto con información relevante para una página web. Este objeto podría incluir 
propiedades como title, subtitle y description. Puedes añadir las que quieras y los valores puedes inventártelos. */

const webPage = {
    title: "Mi primera página web desde el servidor",
    subtitle: "Creada con node.js",
    description: "En esta página web, tenemos un head, un body y un footer. Todo está creado con node.js y su módulo nativo http.",
    author: "Agostina Zavia",
    year: 2024,
    gifURL: "https://i.gifer.com/1vDs.gif"
}

// exportamos el objeto
module.exports = {webPage};

// con mjs sería export default {webPage}