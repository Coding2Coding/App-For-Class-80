function make1stParagraph() {
    var firstSentence = document.getElementById("1sentence").value;
    var secondSentence = document.getElementById("2sentence").value;
    var thirdSentence = document.getElementById("3sentence").value;
    var fourthSentence = document.getElementById("4sentence").value;
    firstSentence.push("")
    console.log(firstSentence+" "+secondSentence+" "+thirdSentence+" "+fourthSentence);
    document.getElementById("1paragraph").innerHTML=firstSentence+" "+secondSentence+" "+thirdSentence+" "+fourthSentence;
}

function make2ndParagraph() {
    var firstSentenceSecondParagraph = document.getElementById("1sentence2paragraph").value;
    var secondSentenceSecondParagraph = document.getElementById("2sentence2paragraph").value;
    var thirdSentenceSecondParagraph = document.getElementById("3sentence2paragraph").value;
    var fourthSentenceSecondParagraph = document.getElementById("4sentence2paragraph").value;
    console.log(firstSentenceSecondParagraph+" "+secondSentenceSecondParagraph+" "+thirdSentenceSecondParagraph+" "+fourthSentenceSecondParagraph);
    document.getElementById("2paragraph").innerHTML=firstSentenceSecondParagraph+" "+secondSentenceSecondParagraph+" "+thirdSentenceSecondParagraph+" "+fourthSentenceSecondParagraph;
}