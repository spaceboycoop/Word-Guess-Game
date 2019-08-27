var wordsArray = [
    'hypernormalization',
    'snowcrash',
    'cryptonomicon',
    'alllowercase',
    
];

var theWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
var triedLetters = [];
var tries = 10;

console.log(theWord);

for (var i=0; i<theWord.length; i++) {
    var node = document.createElement("li");
    node.innerHTML = '&nbsp;';
    document.querySelector('.letters').appendChild(node);
}

document.querySelector('.tries_display').innerHTML = `You have ${tries} guesses.`;

document.addEventListener('keydown', (e) => {
    console.log(e.key);
    rx = new RegExp(/^[a-z]$/);
    if(e.key.match(rx)) {
        console.log('alpha');
        if (triedLetters.indexOf(e.key) == -1) {
            triedLetters.push(e.key);
            var tries_remaining = tries-triedLetters.length;
            document.querySelector('.tries_display').innerHTML = (tries_remaining? `You have ${tries_remaining} guess${tries_remaining>1?'es':''} remaining.` : 'You have failed.');
            var node = document.createElement('li');
            node.innerHTML = e.key.toUpperCase();
            document.querySelector('.tried_letters').appendChild(node);
            var node = document.createElement("li");
            for (i=0; i<theWord.length;i++) {
                var letterNode = document.querySelector('.letters').childNodes[i+1];
                letterNode.innerHTML = '*';
                if (theWord[i] == e.key) {
                    letterNode.innerHTML = theWord[i].toUpperCase();
                }
            }  
        } else {
            console.log('not alpha');
        }
    }
});

document.querySelector('.asterisk').addEventListener('mouseenter', e => {
    var theToolTip = document.querySelector('.tooltip');
    console.log(e.clientX, e.clientY);
    theToolTip.style.left = e.clientX+'px';
    theToolTip.style.top = e.clientY+'px';
    theToolTip.style.display = 'block';
});

document.querySelector('.asterisk').addEventListener('mouseleave', e => {
    document.querySelector('.tooltip').style.display = 'none';
});