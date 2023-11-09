function sortAndNumberNames(names) {
    names.sort();
    let result = '';
    for (let i = 0; i < names.length; i++) {
        result += `${i + 1}.${names[i]}\n`;
    }
    return result;
}
sortAndNumberNames(["John", "Bob", "Christina", "Ema"])