import express from 'express';
const app = express();
const port = 8080;
import path from 'path'
import products from './routes/products'

const server = app.listen(port, () => console.log(`Server running in port:  ${port}`));
server.on('error', (err) => console.error(`There was an error: ${err}`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));
app.use('/api', products)