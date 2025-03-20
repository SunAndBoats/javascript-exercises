/*

const palindromes = function (string) {
    const cleaned=string.toLowerCase.replace(/[^a-z0-9]/g, "")
    const reversed =cleaned.split("").reverse().join("")
if(string=== reversed){
    return true
}else{
    return false
}

};

// Do not edit below this line
module.exports = palindromes;

*/

const palindromes = function (string) {
    // 1. Convertir todo a minúsculas
    const cleanedString = string
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ""); // 2. Eliminar todo lo que no sea letras o números

    // 3. Invertir la cadena
    const reversed = cleanedString.split("").reverse().join("");

    // 4. Comparar y devolver el resultado
    return cleanedString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
