function checkPalindrome() {
    var word = document.getElementById("input").value;
    var cleanWord = word.replace(/\s/g, '');
    var result = document.getElementById("result");

    if (!word) {
        result.innerHTML = "";
        return;
    }

    var reversedWord = cleanWord.split('').reverse().join('');

    if (cleanWord === reversedWord) {
        result.innerHTML = "The word is a palindrome!";
    } else {
        result.innerHTML = "The word is not a palindrome.";
    }
}
document.getElementById("input").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("check-button").click();
    }
});