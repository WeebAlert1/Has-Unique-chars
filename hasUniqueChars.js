// Write your code below
function uniqCars(word) {
    let uniqChasr = new Set([])
    for (let i = 0; i < word.length; i++) {
        uniqChasr.add(word[i])
    }
    return uniqChasr.size === word.length
}

console.log(uniqCars('Bigs'));

console.log(uniqCars('mooooooooshi'));