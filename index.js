var splitWordsInputVariable;
var captalizeWordInputVar = [];
var lowerCaseVariable =[];
var firstLetterInputvarible =[];
var SearchArrayInputVariable=[];
var SearchArrayInputVariable1
var SearchArrayCountVar = [];
var SearchArrayCountVariable;
 var wordArrayCounterVariable=[];


var splitWordsInput = (value) => {
    splitWordsInputVariable = value;
}
var captalizeWordInput = (value) => {
    captalizeWordInputVar = value;
}

var lowerCaseVariableInput = (value) => {
    captalizeWordInputVar = value;
}
var firstLetterInput =(value) =>{
    firstLetterInputvarible = value;
}
var SearchArrayInput =(value)=>{
    SearchArrayInputVariable = value;
}
var SearchArrayInputVar =(value)=>{
    SearchArrayInputVariable1 =value;
}
var SearchArrayCount =(value)=>{
    SearchArrayCountVar = value;
}
var SearchArrayCountInput =(value)=>{
    SearchArrayCountVariable =value;
}
var wordArrayCounter =(value)=>{
    wordArrayCounterVariable=value;
}

var splitWords = () => {
    alert("Your Arrays is:" +" { "+splitWordsInputVariable.split('')+" }");
    return splitWordsInputVariable.split('')
}

var captalizeWord = ()=> {
    var captalizeWordInputVar1
    captalizeWordInputVar1 = captalizeWordInputVar.split(',');
    var newObj = [];
    for (var i = 0; i < captalizeWordInputVar1.length; i++) {
        let x = captalizeWordInputVar1[i];
        if (x.charCodeAt() <= 90 && x.charCodeAt() >= 65) {

            newObj.push(x);

        }
    }
    alert(newObj);
    return newObj
}

var lowerCaseWord =() => {
    var captalizeWordInputVar1;
    captalizeWordInputVar1=captalizeWordInputVar.split(',');
    var newObj = [];
    for (var i = 0; i < captalizeWordInputVar1.length; i++) {
        let x = captalizeWordInputVar1[i];
        if (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) {

            newObj.push(x);
        }
    }
    alert(newObj);
    return newObj
}

var firstLetter = ()=>{
    var firstLetter =[];
    var firstLetterInputvarible1;
   firstLetterInputvarible1= firstLetterInputvarible.split(',');
    for(var i =0; i<firstLetterInputvarible1.length;i++){
        var firstL = firstLetterInputvarible1[i].charAt(0);
        firstLetter.push(firstL);

    }
    alert(firstLetter);
    return firstLetter
}
var SearchArray =()=>{
    var MyVar =[];
    var SearchArrayInputVariable2;
    SearchArrayInputVariable = SearchArrayInputVariable.trim(' ');
    SearchArrayInputVariable2 = SearchArrayInputVariable.split(',');
    for(var i=0; i<SearchArrayInputVariable2.length;i++){
      var foundWord =  SearchArrayInputVariable2[i][0].indexOf(SearchArrayInputVariable1);
        if(foundWord>=0){
            MyVar.push(SearchArrayInputVariable2[i])
        }
    }
    alert(MyVar);
    return MyVar
}

var SearchCount =()=>{
    var MyCounter=0;
    var SearchArrayInputVariable2;
    SearchArrayInputVariable2 = SearchArrayCountVar.split(',');
    for(var i=0; i<SearchArrayInputVariable2.length;i++){
      var foundWord =  SearchArrayInputVariable2[i][0].indexOf(SearchArrayCountVariable);
        if(foundWord>=0){
            MyCounter++;

    }
}
    alert(MyCounter);
    return MyCounter
}
var wordCounter  =()=>{
    var CounterObj =[];
    wordArrayCounterVariable = wordArrayCounterVariable.trim(' ')
    var wordCount = wordArrayCounterVariable.split('');
    let uniqueLetter = wordCount.filter((item, i,ar) => ar.indexOf(item) === i);

    for(var i=0; i<uniqueLetter.length;i++){
    var letterCounter=0;
    wordCount.filter( (element,index) => {
    if(uniqueLetter[i].indexOf(element)>=0){
    letterCounter++;
    }
    } )
    CounterObj.push( {letter:uniqueLetter[i], letterCounter:letterCounter} )
    }
    alert(JSON.stringify(CounterObj));
     return CounterObj;
}

var showAllFunction=()=>{
    splitWordsInputVariable='Denish Ritchie'
    console.log("A"+splitWords());
    captalizeWordInputVar='Hello,climate,How,are,You,all,good'
    console.log("B"+captalizeWord());
    captalizeWordInputVar='Hello,climate,How,are,You,all,good'
    console.log("C"+lowerCaseWord());
    firstLetterInputvarible='Hello,climate,How,are,You,all,good'
    console.log("D"+firstLetter());
    SearchArrayInputVariable='Hello,climate,How,are,You,all,good',SearchArrayInputVariable1='H'
    console.log("E"+SearchArray());
    SearchArrayCountVar='Hello,climate,How,are,You,all,good',SearchArrayCountVariable='H'
    console.log("F"+SearchCount());
    wordArrayCounterVariable='Hello World Place'
    console.log("G"+wordCounter());
}
