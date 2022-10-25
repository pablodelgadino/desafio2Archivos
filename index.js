const Contenedor = require( './contenedor.js')
const contenedor = new Contenedor()

let product = {
    name:"Pavlova",
    price: 1600,
    img:'https://www.ohmargott.com/content/uploads/2022/05/WhatsApp-Image-2022-05-22-at-5.11.08-PM.jpeg'
}

contenedor.save(product).then (result=> console.log (result))
/* contenedor.getAll() .then (result=> console.log (result)) */
/* contenedor.getById(2) .then (result=> console.log (result)) */
/* contenedor.deleteById(2) .then (result=> console.log (result)) */
/* contenedor.deleteAll().then(result=> console.log (result)) */
