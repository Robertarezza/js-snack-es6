/**
 * Description
 * @param {number} min
 * @param {number} max
 *
 */
function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}