/*
    Console.log the values of each property of "kitten"
*/

var kitten = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown"
};

// YOUR CODE HERE

function showKittenProperties (kitten){
    kitten.forEach((property) => {
        console.log(kitten.property)
    })
};

showKittenProperties(kitten)
