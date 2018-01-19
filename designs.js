// Select color input
// Select size input

var row = $('#input_height');
var column = $('#input_width');

column.next().on('click', function(){
	var r = row.val();
	var c = column.val();

	makeGrid(r, c);
});


// When size is submitted by the user, call makeGrid()

function makeGrid(row, column) {

// Your code goes here!
for(var i = 0; i < row; i++){
	var cell = "<tr>";
	  for(var j =0; j < column; j++){
			(cell += '<td></td>');
		}
		cell += '</tr>';
	console.log(cell);
	document.write('<table>' + cell + '</table>');
	}	
}

makeGrid(15,25);

    function setTextColor(picker) {
        document.getElementsByTagName('body')[0].style.color = '#' + picker.toString()
    }


