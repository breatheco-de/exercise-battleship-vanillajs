/* create the 2d array that will contain the status of each square on the board
   and place ships on the board (later, create function for random placement!)

   0 = empty, 1 = part of a ship, 2 = a sunken part of a ship, 3 = a missed shot

    [1,1,1,1,1,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0],
    [1,0,0,1,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,0,0,0,0,0,0]
*/
var gameBoard = [];

//                  empty       ship       hit     missed
const backgrounds = ['#eaeaea', '#eaeaea', 'red', 'grey'];
                
function renderMap(rows,cols, showShips=false)
{
    // get the container element
    let gameBoardContainer = document.getElementById("gameboard");

    if(gameBoard.length == 0) gameBoard = new Array(rows).fill(0).map(r => new Array(cols).fill(0));
    console.log("gameboard", gameBoard);
    // create a new div HTML element for each grid square and make it the right size
    let content = "";
    for(let row = 0; row<rows; row++){
        for(let col = 0; col<cols; col++){
            if(row == 0 && col == 0) content += `<div class="top left hide"></div>`
            else if(row == 0) content += `<div class="top">${col}</div>`;
            else if(col == 0) content += `<div class="left">${row}</div>`;
            else content += `<div id="${row}${col}"
                class="${showShips && gameBoard[row][col] === 1 ? "highlight" : ""}" 
                style="background: ${backgrounds[gameBoard[row][col]]}"
                onClick="fireTorpedo(${col},${row}, event);"></div>`;
        }
    }	

    gameBoardContainer.innerHTML = content;
}



var hitCount = 0; // if anyone is able to hit 17 times, that means all ships are sunk.
function fireTorpedo(col,row, event=null)
{
    let target = event ? event.target : document.getElementById(row+col);
	// if player clicks a square with no ship, change the color and change square's value
	if (gameBoard[row][col] == 0) {
        // set this square's value to 3 to indicate that they fired and missed
		gameBoard[row][col] = 3;
		target.style.background = backgrounds[3];
		
	// if player clicks a square with a ship, change the color and change square's value
	} else if (gameBoard[row][col] == 1) {
        // set this square's value to 2 to indicate the ship has been hit
		gameBoard[row][col] = 2;
		target.style.background = backgrounds[2];
		
		// increment hitCount each time a ship is hit
		hitCount++;
		// this definitely shouldn't be hard-coded, but here it is anyway. lazy, simple solution:
		if (hitCount == 17) {
			alert("All enemy battleships have been defeated! You win!");
		}
		
	// if player clicks a square that's been previously hit, let them know
	} else if (gameBoard[row][col] > 1) {
		alert("Stop wasting your torpedos! You already fired at this location.");
	}		
}

function addShip(gameBoard, shipSize, initialPosition, orientation)
{
	var posX = initialPosition[0];
	var posY = initialPosition[1];

	if(orientation=="horizontal")
		for(var init = posX; init<(posX+shipSize); init++)
		{
			gameBoard[posY][init] = 1;
		}

	if(orientation=="vertical")
		for(var init = posY; init<(posY+shipSize); init++)
			gameBoard[init][posX] = 1;
    
}

function promtFire()
{
    var position = prompt("Fire positions");
    if(position)
    {
        var coordinates = position.split(',');
        fireTorpedo(coordinates[0], coordinates[1]);
    }
}

window.onload = function(){    
    renderMap(10,10);

    addShip(gameBoard,4,[0,3],"horizontal");
    addShip(gameBoard,5,[5,0],"vertical");
    addShip(gameBoard,2,[7,3],"vertical");
    addShip(gameBoard,3,[3,6],"vertical");
    addShip(gameBoard,4,[5,6],"horizontal");
}
