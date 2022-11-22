//open this in devtools and see the result

console.log('this working!!')

let div=document.createElement('div'); //create element
div.classList.add('btn'); //add class to element

console.log(div)

//add element to page - must be added to a parent
document.querySelector('.container').appendChild(div);

//add and remove classes
div.classList.add('btn-click');
div.classList.remove('btn');

div.innerText='dude whats up';
document.querySelector('h1').innerText='Assignment week 11'

//select element to reference
let header = document.querySelector('h1');
//change one style at a time
header.style.color='red';
// if the style has a dash in it - you have to reference it using brackets
header.style["padding-top"] = "10px";

//i can also specify multiple styles at once. however if i do this, i will overwrite all the styles that were applied (no longer red)
header.style='font-family:monospace; font-size:60px';

//we can also straight up edit the HTML by specifying it all to one string- but this will replace the element entirely - notice how our previous div element is gone and replaced by the string we specified
document.querySelector('.btn-click').innerHTML='<div class="test-outer"><div class="test-inner">Benjamin Moerch</div></div>'

//let's create a new element for fun
let newDiv = document.createElement('div');
newDiv.classList.add('clickme');
newDiv.innerText = 'Try to hover over me!';
newDiv.style['font-size'] = '30px';
newDiv.style.border = '1px solid black';
document.querySelector('.container').appendChild(newDiv);

let colors = ['red', 'blue', 'purple', 'green', 'black', 'yellow'];

newDiv.addEventListener('mouseover', function(){
    console.log('is this workin');
    //generates random number between 0 and 4
    let randomColorIndex = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomColorIndex];
    newDiv.style.color = randomColor;
})

let arr = ['red', 'green', 'blue']
arr.forEach(myFunction);

function bigImg(x) {
    x.style.height = "200px";
    x.style.width = "200px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }