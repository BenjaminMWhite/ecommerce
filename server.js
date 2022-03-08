const express = require('express');
//const { sync } = require('../../01-Activities/22-Stu_One-to-One/Unsolved/config/connection');
const { sequelize } = require('./models/Category');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

function syncdb(){
  sequelize.sync().then((res) =>{
  console.log("db has N*synced")
  })
.catch((err) =>{console.log(err) 
})

}
syncdb()