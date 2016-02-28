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
var elements = document.querySelector('.art');
elements.addEventListener('click', function() {
    toggleClass(this,'art-mod');
});
document.getElementById('hamburger').addEventListener('click', function() {
    
    toggleClass(document.querySelector('body'), 'active');
    
});

