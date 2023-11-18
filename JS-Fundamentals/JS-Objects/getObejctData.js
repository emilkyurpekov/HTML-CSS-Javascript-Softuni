function returnObjectData(obj){
    const{name,area,population,country,postCode} = obj;
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key} -> ${value}`)
    }
}
returnObjectData(
    {
        name: "Sofia",
        area: 492,
        population: 1238438,
        country: "Bulgaria",
        postCode: "1000"

    }
)