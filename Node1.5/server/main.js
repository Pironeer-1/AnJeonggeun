const express = require('express');
const app = express();
const port = 8000;

// client 접근 허용
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// Views
app.set('view engine', 'ejs');
app.set('views', 'views');
// app.set(1,2) 1을 2로 설정

// express ejs layout (템플릿 확장)
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'index.ejs');
app.set('layout extractStyles', true);
app.use(express.static('public'));

// Controllers
const homeController = require('./controllers/homeController.js');

app.get('/', homeController.home);

// Routes
const postRouter = require('./routers/postRouter.js');
app.use('/post', postRouter);
const commentRouter = require('./routers/commentRouter.js');
app.use('/comment', commentRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});