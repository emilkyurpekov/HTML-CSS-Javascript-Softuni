switch (groupType) {
   
    case "Students":
        switch (dayOfWeek) {
            case "Friday":
                pricePerPerson = 8.45;
                break;
            case "Saturday":
                pricePerPerson = 9.80;
                break;
            case "Sunday":
                pricePerPerson = 10.46;
                break;
        }
        if (groupSize >= 30) {
            pricePerPerson *= 0.85; // Apply 15% discount for students with a group size of 30 or more.
        }
        break;
    case "Business":
        switch (dayOfWeek) {
            case "Friday":
                pricePerPerson = 10.90;
                break;
            case "Saturday":
                pricePerPerson = 15.60;
                break;
            case "Sunday":
                pricePerPerson = 16.0;
                break;
        }
        if (groupSize >= 100) {
            // Apply the discount of 10 free stays for business groups with 100 or more people.
            freeStays = groupSize / 10;
            groupSize -= freeStays;
        }
        break;
    case "Regular":
        switch (dayOfWeek) {
            case "Friday":
                pricePerPerson = 15.0;
                break;
            case "Saturday":
                pricePerPerson = 20.0;
                break;
            case "Sunday":
                pricePerPerson = 22.50;
                break;
        }
        if (groupSize >= 10 && groupSize <= 20) {
            pricePerPerson *= 0.95; // Apply a 5% discount for regular groups with a size between 10 and 20.
        }
        break;
}
