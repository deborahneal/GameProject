console.log('Game App');           // testing out the JS on website.

let allElement = document.querySelectorAll('.items1');   // declare variable allElement equal to document.querySelectorAll to enable all items.
let popUp = document.querySelector('.div');              // devalre variable popUp to select the div class.

addClicks(allElement);                                  // Invoking the function addClick with its args allElement.

// creating the function called addClick.
function addClicks(arr){
    //console.log(param);                               // we console.log to check our parameter(array).
    for(let i = 0; i < arr.length; i++){                // Using a for loop to run through the array (the box of colored boxes).
        arr[i].addEventListener('click', changeColor);  // Setting a addEventListener allowing the click with the next function changeColor.
    }
}

// Creating the function changeColor with the actual event as parameter.
function changeColor(event){
    console.log(event.target.innerHTML)                  // console.loging check.
    //document.body.style.color = `${event.target.innerHTML}`   // trying out the templates litterals.
    let colorText = event.target.innerHTML                      // Declaring another variable called colorText equal to the event.target.innerHTML.
    console.log(colorText.toLowerCase());                       // logging colorText.toLowerCase to test.

    // declaring variable audio equal to new Audio using the templates litterals with the Assets file and .mp3.
    let audio = new Audio(`./Assets/${event.target.innerHTML.toLowerCase()}.mp3`);
    //let audio = new Audio(`./Assets/red.mp3`);
    audio.play()                                                 // when the function run, Audio will play.
}

//console.log(event);




