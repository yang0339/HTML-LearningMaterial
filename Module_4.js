var $elem = document.getElementById('output');
$elem.innerHTML += 'Test'; //$ sign is for creating snippet(shortcut)
$elem.innerHTML += 4 + 6;
$elem.innerHTML += 4 + 6 + ' Demo';
$elem.innerHTML += 'Demo ' + 4 + 6;
$elem.innerHTML += 'Demo ' + (4 + 6);

var testVariable='';
var isUndefined = (testVariable === undefined);
var isNull = (testVariable === null);
var isEmpty = (testVariable === '');

document.getElementById('isUndefined').innerHTML = isUndefined;
document.getElementById('isNull').innerHTML = isNull;
document.getElementById('isEmpty').innerHTML = isEmpty;

function myfunction() {
    document.getElementById('clickMe').innerHTML = "Paragraph Changed!";
}


///////////////////////////////////

function saveToCookie(key, value, onCompletion) {
    var cookieValue = key + ';' + value;
    document.cookie += cookieValue;
    onCompletion(cookieValue);
}

function saveTextValue() {
    var textValue = document.getElementsByName('position')[0].value;
    saveToCookie('Position', textValue, showTextSuccess);
}

function showTextSuccess (result) {
    window.alert('You successfully saved [' + result + '] from the text input to your cookie.');
}

function saveRadioValue() {
    var radioValue;
    var radioOptions = document.getElementsByName('department');
    for (var index = 0; index < radioOptions.length; index++) {
        if (radioOptions[index].checked) {
            radioValue = radioOptions[index].value;
            break;
        }
    }
    saveToCookie('Department', radioValue, function (result) {
       window.alert('You did it! You saved [' + result + ']');
    });
}
