function wakeDog(dogName, breed) {
    let str = `Wake ${dogName} the ${breed}`
    console.log(str);
    return str
}
function leashDog(dogName, breed) {
    let str = `Leash ${dogName} the ${breed}`;
    console.log(str);
    return str;
}
function walkToPark(dogName, breed) {
    let str = `Walk to the park with ${dogName} the ${breed}`;
    console.log(str);
    return str;
}
function throwFrisbee(dogName, breed) {
    let str = `Throw the frisbee for ${dogName} the ${breed}`
    console.log(str);
    return str
}
function walkHome(dogName, breed) {
    let str = `Walk home with ${dogName} the ${breed}`
    console.log(str);
    return str
}
function unleashDog(dogName, breed) {
    let str = `Unleash ${dogName} the ${breed}`
    console.log(str);
    return str
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let outputs = [];
    routine.forEach(function (activity) {
        outputs.push(activity(dogName, dogBreed))
    })
    return outputs
}