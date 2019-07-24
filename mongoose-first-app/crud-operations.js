const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/exampleApp-0719', { useNewUrlParser: true })

// Importación del modelo
const Product = require('./models/Product.model')


// CREATE
// Alternativa a save() - no requiere instancia previa
Product.create({
    name: 'gafas de sol',
    price: 70,
    available: true,
    color: 'red',
    barcode: 746494,
    url: 'https://www.pccomponentes.com/yayks'
})
    .then(newProduct => console.log('Este es el nuevo producto en la BBDD:', newProduct))
    .catch(err => console.log('¡OPS! Ha habido un error:', err))



// READ
//Product.find({ name: 'La Batamanta' })            //.find() retorna un Array
//Product.find({ price: { $lt: 100 } })
//Product.find({ name: /sol/ })
//Product.findOne({ name: /sol/ })                  //.findOne() retorna un objeto
Product.findById("5d3847326dd47f51e457e1a0")        //.findById() retorna un objeto
    .then(productResults => console.log('EL resultado de la búsqueda es:', productResults))
    .catch(err => console.log('¡OPS! Ha habido un error:', err))


// UPDATE
Product.updateMany({ name: /sol/ }, { $inc: { price: 10000 } })
    .then(productResults => console.log('Los resultados de la actualización son:', productResults))
    .catch(err => console.log('¡OPS! Ha habido un error:', err))


// COUNT
Product.countDocuments({ price: { $gte: 200 } })
    .then(count => console.log(`Hay ${count} productos de alto valor`))
    .catch(err => console.log('¡OPS! Ha habido un error:', err))



mongoose.connection.on('connected', () => console.log('Mongoose se ha conectado'))
mongoose.connection.on('disconnected', () => console.log('Mongoose se ha desconectado'))
mongoose.connection.on('error', err => console.log('Error de Mongoose:', err))