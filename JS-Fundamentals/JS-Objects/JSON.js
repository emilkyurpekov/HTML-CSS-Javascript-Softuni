function parseToObject(str){
    const person = JSON.parse(str);
    for (const data of Object.entries(person)) {
       const[key,value] = data;
       console.log(`${key}: ${value}`)
    }
}
parseToObject(`{"name": "Peter", "age": 35, "town": "Plovdiv"}`);