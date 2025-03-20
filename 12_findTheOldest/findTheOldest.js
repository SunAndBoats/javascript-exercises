const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        // Si yearOfDeath no está definido, tomamos el año actual
        const currentYear = new Date().getFullYear();
        const deathYear = person.yearOfDeath || currentYear;
        const age = deathYear - person.yearOfBirth;

        // Calculamos la edad del más viejo hasta ahora
        const oldestDeathYear = oldest.yearOfDeath || currentYear;
        const oldestAge = oldestDeathYear - oldest.yearOfBirth;

        // Si la persona actual es más vieja, la devolvemos
        return age > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
