//first select the btn and the color.
const btn = document.getElementById('btn');
const color = document.getElementById('color');


////The value for each color is written using the hexadecimal or hex, a base-16 numbering system. The hexadecimal numbers start from 0 to 9 and then add the letters a through f before switching to 10.
//two variables nums and letters to store numbers and allow hex letters.
const nums = '0123456789';
const letters = 'abcdef';


//we have two functions getRanNum() and getRanLetters(), which will take the nums and letters string and return a random item. Now, since strings can also be treated as an array, we can get a value by nums[0] or letters[3].

function getRanNum() {
    return nums[Math.floor(Math.random() * nums.length)]
}

function getRanLetters() {
    return letters[Math.floor(Math.random() * letters.length)]
}

//// In the getRan() function, we are declaring an empty array and then pushing two items to it- one for nums and other for letters. We will get a two item array as [“1”, “b”]. After that we are again returning a random item from it by arr[Math.floor(Math.random() * arr.length)].

function getRan() {
    let arr = []
    //forgot the () VERY IMPORTANT
    arr.push(getRanNum())
    arr.push(getRanLetters())
    return arr[Math.floor(Math.random() * arr.length)]
}

//add an event listener on the btn and on click of it, we are creating a hex variable with initial value of #.
// After that we are running a for loop six times, since hex codes are six items long. From inside the loop we are calling the getRan() function.
// when the loop stops we'll have example(#f1f5f8) in the hex variable. After that, we are changing the color of the body to a random color and also the innerText of the color.

btn.addEventListener('click', () => {
    let hexColor = "#"
    for(let i = 0; i < 6; i++) {
        //forgot the () VERY IMPORTANT
        hexColor += getRan()
    }
    document.body.style.backgroundColor = hexColor;
    color.innerText = hexColor
})

