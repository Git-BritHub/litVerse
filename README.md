# litVerse
Social Network API utilizing Express.js for routing, a MongoDB database, and Mongoose ODM

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Walkthrough](#walkthrough)
* [Questions](#questions)


## Description
litVerse provides the backend software for a social network. This social network API utilizes express.js for routing, MongoDB for its database, and Mongoose ODM. As a litVerse user, you will be able to post your thoughts, as well as react to other user's thoughts. By adding other users to your friend count, users will enjoy and build on eachother's ideas and thoughts as they expand their network. 


## Installation
1. Clone my respository by inputting the following in your terminal: `git clone https://github.com/Git-BritHub/litVerse.git`.
2. When cloning is complete, input `cd litVerse`.
3. Next, install the needed package dependencies by running `npm i`.
4. Important: make sure to create and set up your `.env` file for your MongoDB URI, Port, and secret key.
5. Once your `.env` file is created, copy and paste the following into your `.env` file and fill in the needed information inside the single quotes:

    <p>MONGODB_URI='mongodb://127.0.0.1:27017/litVerseDB'<br/>
       PORT=''<br/>
       SECRET=''<br/></p>


## Usage
This API requires MongoDB to be installed on your computer<br />
1. Input `npm run seed` in your terminal to seed the database.
2. Input `nodemon server.js` or `node server.js` in your terminal to run the application. 
2. When testing the routes, feel free to follow my walkthrough video in the [Walkthrough](#walkthrough) section.
<br />
<img width="1512" alt="litVerseScreenshot" src="https://github.com/Git-BritHub/litVerse/assets/130286884/f2674121-25d0-4c8a-a516-d51c30c97395">

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-aqua.svg)](https://opensource.org/licenses/MIT)

## Contributing
* https://mongoosejs.com/docs/guides.html
* https://www.npmjs.com/package/mongoose
* https://regexr.com/
* Guidance and feedback from Software Developers: Dru Sanchez and CJ Sanders.


## Walkthrough
Route Testing performed on macOS with Insomnia\
[Route Testing Walkthrough with Insomnia](https://drive.google.com/file/d/1a4ibuqAB3XrPkEuCaY1MFI4_DtQ5mcZ-/view)

## Questions
If you find any bugs or have any questions, feel free to reach out to me through GitHub at https://github.com/Git-BritHub 
