import Express from 'express';
import router from './routes/router';

const app = Express();

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

app.use(router);

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server is running on http://localhost/${port}`);
})