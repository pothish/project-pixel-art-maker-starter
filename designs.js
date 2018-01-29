// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}
let row, column, table;
  const max=60;
// Select size input
row=$('#input_height').val();
column=$('#input_width').val();
//select table
table=$('#pixel_canvas')
  //Reset the table --- in case one already created
  table.children().remove();
  //reset grid
  $('#resetGrid').click(function() { 
  var row=$('#input_height').val();
  var column=$('#input_width').val();
row=1;
column=1;
    table.children().remove();
});
// create row's
  if (row <= max && column <= max) {
  for (var i=0; i < row; i++) {
      table.append('<tr></tr>');
   //create colms
          for (var j=0; j < column; j++){
              table.children().last().append('<td class="colors"></td>')
          };
    }
  }
  else {
      table.prepend('<p class="colors" >The canvas is to big, max value is 60 </p>')
         }
// When size is submitted by the user, call makeGrid()
table.on('click', 'td', function() {
//selecting color
 var color=$('#colorPicker').val();
  // to the clicked <td> element puting the background color of var color
  $(this).css('background-color', color);
  //la <td> trebuie sa ii adaugam atributul bgcolor care sa fie egal cu val color
});
  $('#reset_color').on('click',function(){
  $('td').css('background-color','white');
});
}
//functie resetare culoare dar nu merge

$("#button").click(function(e) {
  e.preventDefault(); //Required to avoid submit and page reload
  makeGrid();
});
