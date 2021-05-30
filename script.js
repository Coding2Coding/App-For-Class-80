var paragraph1 = [];
var paragraph2 = [];

function make1stParagraph() {
    var firstSentence = document.getElementById("1sentence").value;
    var secondSentence = document.getElementById("2sentence").value;
    var thirdSentence = document.getElementById("3sentence").value;
    var fourthSentence = document.getElementById("4sentence").value;
    paragraph1.push(firstSentence);
    paragraph1.push(secondSentence);
    paragraph1.push(thirdSentence);
    paragraph1.push(fourthSentence);
    var newParagraph1 = paragraph1.join(". ");
    document.getElementById("1paragraph").innerHTML = newParagraph1;
    console.log(paragraph1);
    console.log(newParagraph1);
}

function make2ndParagraph() {
    var firstSentenceSecondParagraph = document.getElementById("1sentence2paragraph").value;
    var secondSentenceSecondParagraph = document.getElementById("2sentence2paragraph").value;
    var thirdSentenceSecondParagraph = document.getElementById("3sentence2paragraph").value;
    var fourthSentenceSecondParagraph = document.getElementById("4sentence2paragraph").value;
    paragraph2.push(firstSentenceSecondParagraph);
    paragraph2.push(secondSentenceSecondParagraph);
    paragraph2.push(thirdSentenceSecondParagraph);
    paragraph2.push(fourthSentenceSecondParagraph);
    var newParagraph2 = paragraph2.join(". ");
    document.getElementById("2paragraph").innerHTML = newParagraph2;
    console.log(paragraph2);
    console.log(newParagraph2);
}