// Create and name the variable.
// Tell the interpreter it is an array.
// Assign values inside the parentheses.
var colors;
colors = ['white', 'black', 'custom'];

// Show the first item from the array.
var elColor = document.getElementById('colors');
elColor.textContent = colors[2];


/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 10, but note the security issues on p228-231
el.innerHTML = colors[0];

There was a typo in the first print run in the last line of this example, it has been corrected in this file.
*/