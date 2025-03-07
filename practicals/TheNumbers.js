const readline = require('readline-sync');

let grid = [];
let gridSize;

function getInput(){
    gridSize = readline.question("Enter the grid size: ");

    initializeGrid();
}

function initializeGrid(){
    for(let i=0;i<gridSize;i++){
        let temp = [];
        for(let j=0;j<gridSize;j++){
            temp.push(null);
        }
        grid.push(temp);
    }
    getBoard();
}

function getBoard(){
    let numbers = new Set();
    for(let i=0;i<gridSize*gridSize;i++){
        numbers.add(i+1);
    }
    
    for(let i=0;i<gridSize;i++){
        for(let j=0;j<gridSize;j++){
            while(numbers.size != 0){
                let randomNumber = Math.floor(Math.random()*(gridSize*gridSize));
        
                if(numbers.has(randomNumber)){
                    grid[i][j] = randomNumber;
                    break;
                }
            }
        }
    }
}

function printGrid() {
    const horizontalLine = '-'.repeat(gridSize * 5 + 1);

    for (let i = 0; i < gridSize; i++) {
        let row = "|";
        for (let j = 0; j < gridSize; j++) {
            row += grid[i][j].toString().padStart(4, ' ') + "|";
        }
        console.log(horizontalLine); 
        console.log(row);
    }
    console.log(horizontalLine);
}

getInput();
console.log(grid);
printGrid();