'use strict';



const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (names, string) => {
  const newNames = names.map(name => string + name)
    return newNames;

}
console.log(addPrefix(names, 'Mr '))







