import { createWriteStream } from 'fs';
import { get } from 'https';

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
    .then(console.log)
    .catch(console.error);