function visualizeLoadingBar(number) {
    let percentage = number;
    let progressBar = '[';
    let dots = Math.floor(percentage / 10);
    let spaces = 10 - dots;

    for (let i = 0; i < dots; i++) {
        progressBar += '%';
    }

    for (let i = 0; i < spaces; i++) {
        progressBar += '.';
    }

    progressBar += ']';

    console.log(`${percentage}% ${progressBar}`);
    console.log("Still loading...")

    if (percentage === 100) {
        console.log('Complete!');
    }
}