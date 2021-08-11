import express from 'express';
import handlebars from 'express-handlebars'
import products from './routes/products'
import path from 'path'
const app = express();
const port = 8080;

const server = app.listen(port, () => console.log(`Server running in port:  ${port}`));
server.on('error', (err) => console.error(`There was an error: ${err}`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const viewsPath = path.resolve(__dirname, "./views")
const defaultLayoutPath = path.resolve(__dirname, './views/layouts/index.hbs')

app.set('view engine', "hbs");
app.set('views', viewsPath)
app.engine('hbs', handlebars({
    extname: 'hbs',
    defaultLayout: defaultLayoutPath,
}))
app.use('/api', products)