function toggleClass(element, className){
    if (!element || !className){
        return;
    }
    
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}
var elements = document.getElementsByClassName('art');

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function() {
        toggleClass(this,'art-mod');
    }, false);
}

document.getElementById('hamburger').addEventListener('click', function() {
    
    toggleClass(document.querySelector('body'), 'active');
    
});

