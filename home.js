var cours = document.querySelector('.courses');


function creationCours_(image, titre, prix) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2');
    let img = document.createElement('img');
    //img.setAttribute('src',image)
    img.src = image;

    let p = document.createElement('p');
    p.setAttribute('class', 'card-title');
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);

    let span = document.createElement('span');
    span.setAttribute('class', 'card-text');
    span.appendChild(document.createTextNode(prix + '$'));

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    cours.append(div);

}


var courses = [{
    image: './images/javascriptVariables.png',
    title: 'what is javascript?',
    category: 'JS',
    price: '$9.99'
   
},

{
    image: './images/htmlBasics.PNG',
    title: 'basics of HTML',
    category: 'HTML',
    price: '$5.99'
},


{
    image: './images/htmlElements.png',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: '$10.99'
},
{
    image: './images/cssSelectors.jpg',
    title: 'CSS selectors',
    category: 'CSS',
    price: '$69.99'
},
{
    image: './images/javascriptVariables.png',
    title: 'variables and data type of javascript',
    category: 'JS',
    price:'$19.99'
},
{
    image: './images/javascriptOperators.png',
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: '$29.99'
},
{
    image: './images/htmlAttrVal.jpg',
    title: 'HTML attributes and values',
    category: 'HTML',
    price: '$19.99'
},
{
    image: './images/cssProperties.png',
    title: 'CSS properties',
    category: 'CSS',
    price: '$29.99'
},
{
    image: './images/javascriptObjects.png',
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: '$39.99'
},
{
    image: './images/cssMesures.png',
    title: 'mesures and unites of CSS',
    category: 'CSS',
    price: '$19.99'
},
{
    image: './images/cssAnimation.png',
    title: 'CSS animations',
    category: 'CSS',
    price:' $19.99'
},
{
    image: './images/javascriptObjects.png',
    title: 'The basics of javascript',
    category: 'JS',
    price: '$29.99'
},
{
    image: './images/javascriptEvents.png',
    title: 'javascript events',
    category: 'JS',
    price: '$59.99'
},

{
    image: './images/cssColors.png',
    title: 'css colors',
    category: 'CSS',
    price:' $29.99'
},
{
    image: './images/phpBasics.png',
    title: 'getting started with php',
    category: 'PHP',
    price: '$15.99'
},
{
    image: './images/javascriptFunctions2.png',
    title: 'functions and loops with javascript',
    category: 'JS',
    price: '$19.99'
},
{
    image: './images/phpDataBase.png',
    title: 'connecting to database using PHP',
    category: 'PHP',
    price: '$29.99'
},


{
    image: './images/phpCRUD.png',
    title: 'manipulating crud using php',
    category: 'PHP',
    price: '$45.99'
},



{
    image: './images/javascriptDOM.png',
    title: 'DOM the power of javascript',
    category: 'JS',
   price : '$23.99'
},

]
    var c1=courses[Math.floor(Math.random() * courses.length)];
    creationCours_(c1.image, c1.title, c1.price);

    var c2=courses[Math.floor(Math.random() * courses.length)];
    while(c1.title==c2.title){
        var c2=courses[Math.floor(Math.random() * courses.length)];
    }

    creationCours_(c2.image, c2.title, c2.price);
 
    var c3=courses[Math.floor(Math.random() * courses.length)];
    while(c2.title==c3.title || c3.title==c1.title){
        var c3=courses[Math.floor(Math.random() * courses.length)];
    }
    creationCours_(c3.image, c3.title, c3.price);
  
    