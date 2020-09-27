// function print() {
//     let str = document.getElementById("text").value;
//     document.getElementById("display").innerText = str + " è una parola palindroma";
// }


function palindromeChecker() {
    let str = document.getElementById("text").value;
    const regex = "/[\W_]g";

    let regexStr = str.toLowerCase().replace(regex, "");
    
    let reversed = regexStr.split("").reverse().join("");
    if (str === "") {
        document.getElementById("display").innerText = "Write Something";
    } else if (reversed === regexStr) {
        document.getElementById("display").innerText = str + " it's a palindrome";
    } else {
        document.getElementById("display").innerText = regexStr + " it isn't a palindrome";
    }
}