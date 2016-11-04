function changeCompletely(element, index, array) {
  array.forEach(element => {
    console.log(`${element} is pretty cool`)
  })
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}
