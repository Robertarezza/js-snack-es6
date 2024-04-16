
/**
 * Description: la funzione che ritorna un nuovo array con i valori compresi tra min e max
 * @param {array} arrayToCheck
 * @param {number} minIndex
 * @param {number} maxindex
 * @returns {array}
 */
function getArrayInterval(arrayToCheck, minIndex, maxindex) {
   
    const result = arrayToCheck.filter((curElem, index) => {
    
    return index >= minIndex && index <= maxindex
   })
    
    return result;
}

const myArray = [23,76,100,12,56];
console.log(getArrayInterval(myArray, 0 ,4));