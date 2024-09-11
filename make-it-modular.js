// make-it-modular.js
const mymodule = require('./mymodule.js');

// Get the directory and extension from command line arguments
const dir = process.argv[2];
const ext = process.argv[3];

// Call the module's function
mymodule(dir, ext, (err, files) => {
  if (err) {
    return console.error('Error:', err); // Handle errors
  }

  // Print each file on a new line
  files.forEach(file => console.log(file));
});