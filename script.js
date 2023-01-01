var courses = [{
    image: './images/javascriptVariables.png',
    title: 'what is javascript?',
    category: 'JS',
    price: 9.99
   
},

{
    image: './images/htmlBasics.PNG',
    title: 'basics of HTML',
    category: 'HTML',
    price: 5.99
},


{
    image: './images/htmlElements.png',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 10.99
},
{
    image: './images/cssSelectors.jpg',
    title: 'CSS selectors',
    category: 'CSS',
    price: 69.99
},
{
    image: './images/javascriptVariables.png',
    title: 'variables and data type of javascript',
    category: 'JS',
    price:19.99
},
{
    image: './images/javascriptOperators.png',
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: 29.99
},
{
    image: './images/htmlAttrVal.jpg',
    title: 'HTML attributes and values',
    category: 'HTML',
    price: 19.99
},
{
    image: './images/cssProperties.png',
    title: 'CSS properties',
    category: 'CSS',
    price: 29.99
},
{
    image: './images/javascriptObjects.png',
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: 39.99
},
{
    image: './images/cssMesures.png',
    title: 'mesures and unites of CSS',
    category: 'CSS',
    price: 19.99
},
{
    image: './images/cssAnimation.png',
    title: 'CSS animations',
    category: 'CSS',
    price: 19.99
},
{
    image: './images/javascriptObjects.png',
    title: 'The basics of javascript',
    category: 'JS',
    price: 29.99
},
{
    image: './images/javascriptEvents.png',
    title: 'javascript events',
    category: 'JS',
    price: 59.99
},

{
    image: './images/cssColors.png',
    title: 'css colors',
    category: 'CSS',
    price: 29.99
},
{
    image: './images/phpBasics.png',
    title: 'getting started with php',
    category: 'PHP',
    price: 15.99
},
{
    image: './images/javascriptFunctions2.png',
    title: 'functions and loops with javascript',
    category: 'JS',
    price: 19.99
},
{
    image: './images/phpDataBase.png',
    title: 'connecting to database using PHP',
    category: 'PHP',
    price: 29.99
},


{
    image: './images/phpCRUD.png',
    title: 'manipulating crud using php',
    category: 'PHP',
    price: 45.99
},



{
    image: './images/javascriptDOM.png',
    title: 'DOM the power of javascript',
    category: 'JS',
   price : 23.99
},

]

var content = document.querySelector('.courses');

function creationCours(path, title, price) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2 cours');
    let img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');
    img.src = path;
    img.setAttribute('class', 'card-img');
    let contenu = document.createTextNode(title);
    p.appendChild(contenu);
    p.setAttribute('class', 'card-tilte');
    let contenu2 = document.createTextNode(price+" $");
    span.appendChild(contenu2);
    span.setAttribute('class', 'card-text')
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    content.append(div)
}

//searching  courses by category
courses.forEach(function(element) {
    creationCours(element.image, element.title, element.price);
})

function SEARCHCategory(el){
    for(var i=0;i<courses.length;i++){
        if(el==courses[i].category){
            document.getElementsByClassName("cours")[i].style.display="block"
        }
        else{
            document.getElementsByClassName("cours")[i].style.display="none"
        }
    }
}


document.getElementById("ALL").addEventListener("click",function(){
    for(var i=0;i<courses.length;i++){       
        document.getElementsByClassName("cours")[i].style.display="block"
        }
    }
)

// by price
function displayCard(data){
    text = "";
    data.forEach((e)=>{
        text += `<div class="card col-3 me-2 mb-2 cours">
        <img src="${e.image}" class="card-img">
        <p class="card-tilte">${e.title} </p>
        <span class="card-text">$ ${e.price}</span>
        </div>`
    })
    content.innerHTML = "";
    content.innerHTML = text;
}


let slider =document.querySelector(".range");
let val =document.querySelector(".value");
slider.addEventListener("input",()=>{
    val.innerText= slider.value;
    content.innerHTML="";
    filterarr = courses.filter((e)=>{
        return e.price <= slider.value;
    })  
    displayCard(filterarr);
})


// SEARCHING BY SEARCH
function CheckBySearch(){
    for(var i=0;i<courses.length;i++){
        var input=document.getElementById("input").value.toUpperCase();
        if(courses[i].title.toUpperCase().indexOf(input)>-1){
            document.getElementsByClassName("cours")[i].style.display="block";
        }
        else{
            document.getElementsByClassName("cours")[i].style.display="none";
        } 
    }
}