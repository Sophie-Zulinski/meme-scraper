// Used this NPM package to fetch HTML from Website: https://www.npmjs.com/package/node-fetch

import fetch from 'node-fetch';

const website = 'https://memegen-link-examples-upleveled.netlify.app/'
const response = await fetch(website);
const htmlContent = await response.text();


// Used function from this website, changed VAR to CONST: https://stackoverflow.com/questions/50883565/javascript-how-to-split-between-and-store-in-an-array
// Creating an array from a string with images
const contentHtml = htmlContent;

const imgSrcs = [];
var rgx = /<img src="([^"]+)"/g;
var match;

while (match = rgx.exec(contentHtml)) {
  imgSrcs.push(match[1]);  // match[1] contains the captured group
}

//console.log(imgSrcs);


//  Filter the array to create a new array of only 10 elements 
const onlyFirstTenPictures = imgSrcs.slice(0,10)
console.log(onlyFirstTenPictures)

// ?? save the jpeg data in folders (e.g. data of first image into 01.jpeg-folder etc.), maybe with the command touch??




