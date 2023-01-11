// Set a variable with the URL to the website
const website = 'https://memegen-link-examples-upleveled.netlify.app/'

// ???  Request HTML information from the URL (maybe "fetch get request")

// ???  Inside htmlContent:
 // - look for all matching elements (maybe an <a> element that contains an image or maybe an <img />)
 // - extract the img src attribute (string)
 // - assign this array of strings to a new variable called imgSrcs / links / imageUrls



//Save this HTML into a variable called htmlContent (string)
// !! Dummy-Version
const htmlContent = [`img src="https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg?width=300`, `img src="https://api.memegen.link/images/rollsafe/can't_get_fired/if_you_don't_have_a_job.jpg?width=300"`, `img src="https://api.memegen.link/images/xy/all_the_things!!!.jpg?width=300"`]

//console.log(htmlContent)

// Filter the array to create a new array of only 10 elements (since I have only 3 elements I created an new aray with 2 elements)
const  htmlContentOnlyTwo = htmlContent.slice(0,2)
console.log(htmlContentOnlyTwo)

// ?? save the jpeg data in folders (e.g. data of first image into 01.jpeg-folder etc.), maybe with the command touch??





//Old versions:

//First sanity check:
// console.log("hello")

// Second try fetching data from website via crawler
//import Crawler from 'node-html-crawler';
//const crawler = new Crawler('website');
//console.log(crawler)

