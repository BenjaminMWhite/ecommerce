const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  getAllTags().then((allTags)=>res.json(allTags) )
  
});
async function getAllTags() {
var allTags = await Tag.findAll()
return allTags  
}
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  var requestID = req.params.id
  idCall(requestID).then((tag) =>{ res.json(tag)})
 
  // be sure to include its associated Product data
});
async function idCall(
  requestID  
  ){ var tagsByID= await Tag.findAll(
  {where: {id:requestID}}  
  )
   return tagsByID 
  }
router.post('/', (req, res) => {
  // create a new tag
  var tagName = req.body.tag
createTag(tagName).then((newTag)=>{res.json(newTag)})

});
async function createTag(tagName){
  var newTag = Tag.create({tag_name:tagName})
  return newTag
} 
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  var updatedName = req.body.name
var updatedID = req.params.id
updateTag(updatedID,updatedName).then((upName) =>{res.send(200)}) 


});
async function updateTag(Tag_id,name){
 await Tag.update(
    {tag_name:name},
  {where: {id:Tag_id}}  
  )
  //willUpdate.update({Tag_name:name})
  return
  }
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  var deleteID = req.params.id
  deleted(deleteID).then((destroy)=>{res.json(destroy)})
  
});
async function deleted(tag_id){
  Tag.destroy({where: {id:tag_id}}
  )
  }
module.exports = router;
