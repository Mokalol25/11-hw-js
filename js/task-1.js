function logItems(array) {
    for(let i = 0; i < array.length; i ++) {
        console.log(`${i + 1} - ${array[i]}`)
    }
}

const items =  ['Mango', 'Poly', 'Ajax'];
logItems(items)