const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiURL = 'http://numbersapi.com'

let favNum = 5;
async function getNumFact(num) {
let data = await $.getJSON(`${apiURL}/${num}?json`)
console.log(data)
}
getNumFact(favNum)


let favNums = [ 3, 5, 7, 13 ]
async function getNumFacts(num) {
    let data = await $.getJSON(`${apiURL}/${favNums}?json`)
    console.log(data)
}
getNumFacts(favNums)


async function getAllNums() {
    let fact = await Promise.all(
        Array.from({ length: 4 }, () => 
             $.getJSON(`${apiURL}/${favNum}?json`))
    )
    fact.forEach(data => {
        $('body').append(`<p>${data.text}</p>`)
    })
}
getAllNums()