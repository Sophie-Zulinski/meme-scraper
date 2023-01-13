// Used this NPM package to fetch HTML from Website: https://www.npmjs.com/package/node-fetch

import { createWriteStream } from 'fs';
import { get } from 'https';
import fetch from 'node-fetch';

const website = 'https://memegen-link-examples-upleveled.netlify.app/'
const response = await fetch(website);
const htmlContent = await response.text();

//console.log(htmlContent)
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

// Download the pictures and save them into a jpeg-file in the meme-folder, used this forum https://scrapingant.com/blog/download-image-javascript

function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                // Consume response data to free up memory
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));

            }
        });
    });
}

downloadImage('https://api.memegen.link/images/wonka.jpg?width=300', 'C:/Users/sophi/projects/meme-scraper/memes/01.jpeg')
downloadImage('https://api.memegen.link/images/feelsgood.jpg?width=300', 'C:/Users/sophi/projects/meme-scraper/memes/02.jpeg')
    .then(console.log)
    .catch(console.error);