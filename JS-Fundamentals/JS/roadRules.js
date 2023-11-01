function road(speed,type){
    let limit=0;
    if(type=="residential"){
        limit=20;
    }
    else if(type=="city"){
        limit=50;
    }
    else if(type=="interstate"){
        limit=90;
    }
    else if(type=="motorway"){
        limit = 130;
    }
    
    if(speed<=limit){
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }
    else{
        let difference = speed-limit;
        if(difference <= 20){
            let status = "speeding"
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
        }else if(difference>20&& difference<=40){
            let status = "excessive speeding"
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
        }
        else{
            let status = "reckless driving"
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
        }
    }
}
road(21,"residential")