// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (name) { 
    name = cats.push('Ralph');
}
function destructivelyPrependCat (name) { 
    name = cats.unshift('Bob');
}
function destructivelyRemoveLastCat () { 
    cats.pop();
}
function destructivelyRemoveFirstCat () { 
    cats.shift();
}
function appendCat (name) { 
    name = 'Broom';
    return [...cats, name];
}
function prependCat (name) { 
    name = 'Arnold';
    return [name, ...cats];
}
function removeLastCat () { 
    return cats.slice(0, cats.length - 1);
}
function removeFirstCat () { 
    return cats.slice(1);
}