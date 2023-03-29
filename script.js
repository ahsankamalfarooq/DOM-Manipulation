// Dom Manupulation (Document Object Model)

///////////-1- get element by id////////////////

// const heading = document.getElementById("heading")

// console.log(heading) 
// // console.log(document)

////////Get element by tag name ////////////////

// const heading = document.getElementsByTagName('h1')
// console.log(heading[0])


//////////////getelement by claaname//////////////////


// const heading = document.getElementsByClassName('heading')
// console.log(heading[1])

//////////////query selector//////////////////

// const heading = document.querySelector('.heading')
// console.log(heading)

//////////////   query selector All   //////////////////


// const heading = document.querySelectorAll('.heading')
// console.log(heading)

//////////////   Traverse DOM  //////////////////

///Parent Node////

// const heading = document.querySelector('.heading')
// const parent = heading.parentNode;

// // console.log(heading)
// console.log(parent)


///////Children Node////

// const parent = document.querySelector('.parent')
// const heading = parent.;

// // console.log(heading)
// console.log(parent.childNodes)


/////////////// Next Element Sibling //////////////////


// const heading = document.querySelector('.heading')

// // const parent = heading.parentNode;

// console.log(heading.nextElementSibling)
// // console.log(parent)



/////////////// Previous Element Sibling //////////////////


// const heading = document.querySelector('h3')

// const parent = heading.parentNode;

// console.log(heading.previuosElementSibling)
// console.log(heading.previousElementSibling)
// console.log(heading)


/////////////// Previous Element Sibling //////////////////


// const heading = document.querySelector('.heading')

// // const parent = heading.parentNode;

// console.log(heading.previousElementSibling);
// // console.log(parent)



/////////////// MANIPULATION //////////////////


// const heading = document.querySelector('.heading')

// // const parent = heading.parentNode;
// heading.innerHTML = 'Hello World'
// heading.style.color = 'green'
// heading.style.fontSize = '30px'
// heading.classList.add('title')
// heading.classList.remove('heading')

// console.log(heading.);
// console.log(parent)

////////////////////// CREATE ELEMENT //////////////////////


// const heading = document.createElement('h1') //just created

// heading.innerHTML = 'this is create element'
// heading.classList.add('heading')

// const parent = document.querySelector('.parent')
// parent.appendChild(heading)



// const subHeading = document.createElement('h3') //just created
// subHeading.innerHTML = 'hello sub world'

// // append at the last of the page
// parent.appendChild(subHeading)

// // if we want to put it before the some tag so we should do this

// heading.insertAdjacentElement('beforeBegin', subHeading)

// console.log(heading)



////////////////////// DOM Events //////////////////////


// const button =  document.querySelector('#btn');
// const heading = document.querySelector('#heading');


// button.addEventListener('click', (event) => {
//     heading.style.color = 'cyan'
//     heading.style.fontSize = '50px'
//     console.log('button clicked', event)
// })

/////////////////////Bulb Project//////////////////////////

const bulb = document.querySelector('#bulb')  // img
console.log(bulb)
const bulbSwitch = document.querySelector('#bulbSwitch') //btn

bulbSwitch.addEventListener('click', (event) => {
    // console.log(bulb.src)
    if( bulb.src.match('off') ) {
        
        bulb.src = './bulb-on.gif'
        bulbSwitch.innerHTML = "Turn Off"
    } else {
        bulb.src = './bulb-off.png'
        bulbSwitch.innerHTML = "Turn On"
        
    }
})












































