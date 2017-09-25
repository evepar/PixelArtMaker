// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// document.getElementById
var table = document.getElementById("pixel_canvas");

function makeGrid(height, width) {
  for (var h = 1; h <= height; h++) {
    var newRow = table.insertRow();
      for (var w = 1; w <= width; w++) {
        var newCell = newRow.insertCell();
          newCell.onclick = colorBox;
      };
  };
}

var color = document.getElementById("colorPicker");

function colorBox() {
  this.style.background = color.value;
  console.log(this)
};


var sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener("submit", function(){
  event.preventDefault();
  var height = document.getElementById("input_height").value;
  var width = document.getElementById("input_width").value;
  makeGrid(height, width);
})
//submit refreshes the page and we want to stop that in this case

//access colour and add click listener on each of the cells
//document.getElementById("pixel_canvas").addEventListener("click",
//  function() {
//    var color = document.getElementById("input_color").value;
//});

// maybe something with the HTML table tags
// <td onclick="function()"> </td>
// in JavaScript
// object.onclick = function(){myScript};

//onclick documentation
// https://www.w3schools.com/jsref/event_onclick.asp

//the colour picker documentation in HTML
// https://www.w3schools.com/colors/colors_picker.asp
