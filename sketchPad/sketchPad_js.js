//javascript file for sketchPad
/*
var smallDivs;
function createDivs(){

  smallDivs = document.createElement("div");
  //smallDivs.classlList.add("grid_item_color");
  smallDivs.addEventListener('mouseover', )
  //smallDivs.id = "grid_item";
  smallDivs.style.padding = "30px";
  smallDivs.style.background = "silver";


  //smallDivs.innerHTML = "hello world";
  document.getElementById("bigDiv").appendChild(smallDivs);

  //smallDivs.addEventListener("mouseenter",changeColor());
  //document.ElementById("grid_item").addEventListener('mouseover', changeColor(){smallDivs.target.getElementById('grid_item')});
  smallDivs.addEventListener("mouseover", changeColor());
}
for (var i = 0; i < 200; i++) {

  createDivs();
  //document.getElementById("grid_item").addEventListener('click',changeColor());
}





function changeColor(){
  //document.getElementById('grid_item').className += 'grid_item_color';

  //smallDivs.style.background = "black";

  if(document.target.style.background === "white"){
    this.style.
  }

  //smallDivs.classList.add("grid_item_color");


}
*/




//------- This code is taken from Mr.Omulosi


//created a variable here
var gridSize;

/*queryselector bascially works like this,
it brings in the element specified in the parentheses
so here it will select body element but if i write
.grid_container it will bring in the element with the
id grid_container and so on
*/
const body1 = document.querySelector('body'); 



/*this is used for adding a class in an element
here we are adding a class named "container"
in and element/node body
*/
body1.classList.add('container'); 


/*here we are creating variable and in it creating and
storign an element called div
*/
const heading = document.createElement('div');

heading.innerHTML =  '<h1>sketchPad</h1>' ;


/*here we are adding the div element that is called
heading in another element body which is in a variable
called body1
*/
body1.appendChild(heading);


const mainContent = document.createElement("div");
mainContent.classList.add('main');
body1.appendChild(mainContent);

const sidePanel = document.createElement('div');
sidePanel.classList.add('side-panel');
mainContent.appendChild(sidePanel);

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.classList.add("btn");

resetButton.addEventListener('click', ()=>{
      gridSize = Number(prompt('how many squares per side?')) || gridSize;
      clearGrid();

      createGrid(gridSize);
});


sidePanel.appendChild(resetButton);

const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
clearButton.classList.add('btn');


clearButton.addEventListener('click', ()=>{
  clearGrid();
  createGrid();
});


sidePanel.appendChild(clearButton);

const eraseButton = document.createElement('button');
eraseButton.textContent = 'Erase';
eraseButton.classList.add('btn');

eraseButton.addEventListener('click', ()=>{
      let allCells = Array.from(document.querySelectorAll('div.item'));

      allCells.forEach(function(cell){
          cell.addEventListener('mouseover', ()=>{
              cell.removeAttribute('style');
          });
      });
});



sidePanel.appendChild(eraseButton);


fucntion createGrid(gridSize){
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.setAttribute('style', 'display: grid';
                        grid-template-rows: repeat(${gridSize}, 1fr);
                        grid-template-columns: repeat (${gridSize}, 1fr);
  numberOfCells = gridSize * gridSize;
  for (var i = 0; i<= numberOfCells; i++) {
    let gridCell = document.createElement('div');
    gridCell.classList.add('item');
    wrapper.appendChild(gridCell);
  }



  mainContent.appendChild(wrapper);


  //adding addEventListener

  let allCells = Array.from(document.querySelectorAll('div.item'));
  allCells.forEach(function(cell)){
    cell.addEventListener('mouseover', ()=>{
      cell.setAttribute('style', 'background-color: red');
    })
  };

}



function clearGrid(){
  let wrapper = document.querySelector(".wrapper");
  while(wrapper.firstChild){
    wrapper.removeChild(wrapper.firstChild);
  }

  wrapper.remove();
  createGrid(gridSize = 16);
}
