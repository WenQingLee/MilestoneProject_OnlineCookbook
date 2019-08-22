// Global variable to number the ingredients input
var i = 0;
// Global variable to number the preparations input
var j = 0;

$(document).ready(function() {
  $('select').formSelect();
});

// To add an input field for ingredients when the add button is clicked
$("#add-ingredient").on("click", function() {
  i++;
  $("#ingredients-input").append('<div class="input-field col s12"> Ingredient ' + i + '<input placeholder="Ingredient" name="ingredientInput" type="text" class="validate"></div>')
});

// To remove an input field for ingredients when the remove button is clicked
$("#remove-ingredient").on("click", function() {
  $("#ingredients-input > div").last().remove()
  i--;
});


// To add an input field for preparations when the add button is clicked
$("#add-prep").on("click", function() {
  j++;
  $("#preparations-input").append('<div class="input-field col s12"> Step ' + j + '<input placeholder="Preparation Step" name="prepInput" type="text" class="validate"></div>')
});


// To remove an input field for preparationss when the remove button is clicked
$("#remove-prep").on("click", function() {
  $("#preparations-input > div").last().remove()
  j--;
});