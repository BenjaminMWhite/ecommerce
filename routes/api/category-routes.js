const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
getAllCategories().then((allCats) =>{res.json(allCats)})

});

router.get('/:id', (req, res) => {

  // find one category by its `id` value
  // be sure to include its associated Products
  var requestID = req.params.id
 idCall(requestID).then((category) =>{  res.json(category)})
});

router.post('/', (req, res) => {
  // create a new category
var catName = req.body.category
console.log(catName)
createCategory(catName).then((newCat) =>{res.json(newCat)})
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
var updatedName = req.body.name
var updatedID = req.params.id
updateCategory(updatedID,updatedName).then((upName) =>{res.send(200)}) 

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  var deleteID = req.params.id
  deleted(deleteID).then((destroy)=>{res.json(destroy)})
  
});
async function deleted(Category_id){
await Category.destroy({where: {id:Category_id}}
)
}



async function updateCategory(Category_id,name){
await Category.update(
  {category_name:name},
{where: {id:Category_id}}  
)

return 
}



async function getAllCategories() {
var allCategories = await Category.findAll()

return allCategories  
}
async function idCall(
requestID  
){ var categoriesByID= await Category.findAll(
{where: {id:requestID}}  
)
 return categoriesByID 
}
async function createCategory(catName){
var newCategory = await Category.create({category_name:catName})
return newCategory
}

module.exports = router;
