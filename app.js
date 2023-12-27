const rect = require ('./rectangle');

function solveRect(l,w) {
    console.log(`Solving for rectangle with dimensions: ${l} ${w}`);
    rect(l, w, (err, rectangle) => {
        if(err) {
            console.log('ERROR:', err.message);
        } else {
            console.log(`Area ${rectangle.area()}`);
            console.log(`Perimeter ${rectangle.perimeter()}`);
        }
    });
    console.log('This is after the call to rect()');
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);