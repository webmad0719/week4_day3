const mongoose = require('mongoose')
const Schema = mongoose.Schema


// set: función que retorna el valor final para la BBDD
// validate: propiedades validator (función que al retornar 'false' emerge el error) y message (mensaje de error)

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        set: text => text.charAt(0).toUpperCase() + text.substring(1, text.length)
    },
    price: Number,
    available: { type: Boolean, default: false },
    color: { type: String, enum: ['red', 'green'] },
    barcode: { type: Number },
    url: {
        type: String,
        validate: {
            validator: text => text.startsWith('https://www.pccomponentes.com'),
            message: 'Error: la URL debe comenzar con nuestro dominio'
        }
    }
}, {
        timestamps: true        // Genera sello temporal
    })


const Product = mongoose.model('Product', productSchema)


// Exportación del modelo
module.exports = Product