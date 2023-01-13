const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection, name){
    return collection.filter(
        (driver) => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(collection, name){
    return collection.filter(
        (driver) => driver.slice(0, name.length).toLowerCase() === name.toLowerCase()
        )
}

function matchName(collection, name) {
return collection.filter(
    (driver) => driver.name === name
)
}
console.log(fuzzyMatch(drivers, "sa"))