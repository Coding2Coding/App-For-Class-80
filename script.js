function make1stParagraph() {
    var firstSentence = document.getElementById("1sentence");
    var secondSentence = document.getElementById("2sentence");
    var thirdSentence = document.getElementById("3sentence");
    var fourthSentence = document.getElementById("4sentence");
    console.log(firstSentence+" "+secondSentence+" "+thirdSentence+" "+fourthSentence);
    document.getElementById("1paragraph").innerHTML=firstSentence+" "+secondSentence+" "+thirdSentence+" "+fourthSentence;
}

function make2ndParagraph() {
    var firstSentenceSecondParagraph = document.getElementById("1sentence2paragraph");
    var secondSentenceSecondParagraph = document.getElementById("2sentence2paragraph");
    var thirdSentenceSecondParagraph = document.getElementById("3sentence2paragraph");
    var fourthSentenceSecondParagraph = document.getElementById("4sentence2paragraph");
    console.log(firstSentenceSecondParagraph+" "+secondSentenceSecondParagraph+" "+thirdSentenceSecondParagraph+" "+fourthSentenceSecondParagraph);
}