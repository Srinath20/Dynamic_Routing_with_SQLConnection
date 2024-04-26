const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize
.sync()   //Creats table in database and also adds some timestamps column for us which can be diabled
.then(result =>{
   // console.log(result);
    app.listen(3000,()=>{
        console.log("Running in port 3000");
    });
})
.catch(err =>{
    console.log(err);
})


