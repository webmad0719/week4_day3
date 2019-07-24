const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/exampleApp-0719', { useNewUrlParser: true })


// Creamos el modelo
const Product = mongoose.model('Product', { name: String, price: Number })

// Instanciamos 
const myProduct = new Product({ name: 'Sartenes del Chef Tony', price: 350 })



// Guardamos
// El método .save() retorna una Promesa que es gestionada mediante .then() y .catch()
// Su .then() recibe como parámetro el objeto creado en la BBDD
myProduct.save()
    .then(newProduct => console.log('Este es el nuevo producto en la BBDD:', newProduct))
    .catch(err => console.log('¡OPS! Ha habido un error:', err))



// Filtrar
// El método .find() retorna una Promesa que es gestionada mediante .then() y .catch()
// Su .then() recibe como parámetro un array con los items matched
Product.find({})
    .then(foundProducts => console.log("Los productos encotrado son:", foundProducts))
    .catch(err => console.log('¡OPS! Ha habido un error:', err))



// Eventos Mongoose
mongoose.connection.on('connected', () => console.log('Mongoose se ha conectado'))
mongoose.connection.on('disconnected', () => console.log('Mongoose se ha desconectado'))
mongoose.connection.on('error', err => console.log('Error de Mongoose:', err))