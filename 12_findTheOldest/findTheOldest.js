const findTheOldest = function (people) {
    return people.reduce((oldest, person) => {
        let currentYear = (new Date()).getFullYear();
        let oldestAge =
            ("yearOfDeath" in oldest) ? oldest.yearOfDeath - oldest.yearOfBirth
            : currentYear - oldest.yearOfBirth;
        let personAge =
            ("yearOfDeath" in person) ? person.yearOfDeath - person.yearOfBirth
            : currentYear - person.yearOfBirth;
        return (personAge > oldestAge) ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
