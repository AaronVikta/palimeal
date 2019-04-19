import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello to Pali Meals!');
});

app.listen(PORT, () => {
	console.log(`Application running and listening to port ${PORT}`);
});