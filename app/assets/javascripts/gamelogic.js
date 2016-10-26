$(document).ready(function() {
	var can = document.getElementById("canvas");
	var c = can.getContext('2d');
	var person

	

	var waldo = {
				name: "waldo",
				top: [1232,1359],
				bottom: [1325,1504]
				}
	var wenda = {
				name: "wenda",
				top: [1260,1103],
				bottom: [1297,1168]}
	var wizard = {
				name: "wizard",
				top: [1910,1420],
				bottom: [1949,1468]
				}

	var people = [waldo, wenda, wizard]

	function drawTargetBox(x,y){
   		c.rect( (x-25), (y-40), 50, 80)
   		c.stroke();
	}

	function whosThere(x,y){
		
		for (var i in people){
			var person = people[i]
			if (inRange(x,y, person.top, person.bottom)){
				return person.name
			}
		}
		return false
	}

	function inRange(x,y, top, bottom){
		if (((x) >= top[0]) && ((x) <= bottom[0] )){
			// console.log("x is in range")
			if (((y) >= top[1]) && ((y) <= bottom[1] )) {
				// console.log("y is in range")
				return true;
			}	
		}
		return false;
	}

	function addGuessDiv(x,y){
		$('body').append('<div class="guess" style = "top:' + (y-40) + 'px; left:' + (x+45) + 'px;"><ul></ul></div>')
		addGuessOptions();
	}

	function addGuessOptions(){
		for (var i in people){
			var person = people[i];
		$('ul').append("<li id='" + person.name + "'>"+ person.name +"</li>")}
	}

	function removeDiv(){
		$('div').remove();
	}

	function guess(li){
		var guess = li.attr('id')

		if (guess == person) {
			alert('you got it!')
		}
		else{
			alert('try again')
		}

	}

  $('canvas').click(function(e) {
  	//remove any boxes
  	can.width = can.width;

  	removeDiv();

    var offset = $(this).offset();
    var x = (e.pageX - offset.left)
    var y = (e.pageY - offset.top)

    drawTargetBox(x, y)
    addGuessDiv(x,y)
    person = whosThere(x,y)


  });

  $('body').on('click', 'li', function(e) {
  	guess($(this))
  });
});