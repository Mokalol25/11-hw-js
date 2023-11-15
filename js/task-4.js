function formatString(string) {
    if (string.lenght <= 40) {
        return string;
    } else {
        return string.slice(0, 40) + "...";
    }
}

const line = prompt("Write sentance");
const formattedString = formatString(line);
console.log(formattedString)