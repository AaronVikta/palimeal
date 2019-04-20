//import express since this is an express application
import express from 'express'

//import body-parser for the forms
import body_parser from 'body-parser'

//import cors for crosssite origin requests
import cors from 'cors'

//import morgan, to kown my request sourses
import morgan from 'morgan'


//setup the application
const app = express();
app.set('view engine', 'ejs');
app.use(morgan('combined'))
app.use(body_parser.json())
app.use(cors({credentials:true, origin: 'http://locahost:3000'}))

//server static files
app.use(express.static('public'))


//import routes 
import routes from './api/routes.js'
app.use(routes)

//server the application
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Application running and listening to port ${PORT}`);
});


