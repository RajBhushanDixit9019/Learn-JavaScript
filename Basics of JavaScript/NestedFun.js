// this javascript code illustrate the calling a function 
// in another function

// Call Stack concept..

function one(){
    console.log("one");
    two()
}

function two(){
    console.log("two");
    three()
}


function three(){
    console.log("three");
}

one()
two()
three()

// output:
//one
//two
//three
//two
//three
//three
