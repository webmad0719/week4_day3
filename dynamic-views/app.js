const express = require('express')
const app = express()
const port = 3000



app.use(express.static('public'))
app.set('views', __dirname + '/views')

app.set('view engine', 'hbs')

// El método render() no requiere extensión ni directorio, ya indicados en los middlewares
app.get('/', (req, res) => {

    const data = {
        name: 'Carlos',
        course: 'Web Development Bootcamp',
        place: 'IronHack Madrid',
        warning: 'Al que madruga, Dios le ayuda. <strong>Al que no, Ruleta</strong>',
        modules: ['Front', 'Back', 'React', 'Career Week', 'Hiring Fair'],
        paid: false,
        address: {
            street: 'García Luna, 12',
            cp: 28002,
            city: 'Madrid'
        },
        actualJob: {
            title: 'Auxiliar de enfermería',
            salary: 3200,
            seniority: 4
        }
    }

    res.render('index', data)
})


app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`))