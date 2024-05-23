import inquirer from "inquirer";
import qr from "qr-image";
import fs from 'fs';

inquirer
    .prompt([
        /* Enter URL for QR */
        {
            message: "Please Enter URLs: ",
            name: "URL"
        },
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('url.png'));
    });