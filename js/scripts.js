(function(window, document, undefined){
    window.onload = run;
    function run(){
        var user = 'Sherise';
        var salutation = 'Hi, ';
        var greetingText = salutation + user + ' ! hope you have some TASTY TIME !!!';
        
        var greetingElement = document.getElementById('greeting');
        
        if(greetingElement) {
            greetingElement.textContent = greetingText;
        }

        var menuElement = document.getElementById('menu');
        if(menuElement) {
            var menuItemOpen = '<tr><td><div class="menuItem" onclick="alert(\'Details coming soon!\');"><h3>';
            var menuItemClose = '</h3><br><p> Click here for more details!</p></div> </td></tr>';
            menuElement.innerHTML = menuItemOpen + 'Monday - Mexican' + menuItemClose;
            menuElement.innerHTML += menuItemOpen + 'Tuesday - Thai' + menuItemClose;
            menuElement.innerHTML += menuItemOpen + 'Wednesday - Welsh' + menuItemClose;
            menuElement.innerHTML += menuItemOpen + 'Thursday - Turkish' + menuItemClose;
            menuElement.innerHTML += menuItemOpen + 'Friday - French' + menuItemClose;
            menuElement.innerHTML += menuItemOpen + 'Saturday - Swedish' + menuItemClose;
            menuElement.innerHTML += menuItemOpen + 'Sunday - <s>Scottish</s> Spanish' + menuItemClose;
        }
    }    
})(window, document, undefined);