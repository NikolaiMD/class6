// LOADING CERTAIN PAGE WITH AJAX
function load(number){
    // OBJECT FOR CONNECTION(TELEPHONE)
    var xhr = new XMLHttpRequest();
    // WHAT DO WE WANT FROM SERVER
    xhr.open("GET",`pages/page-${number}.html`)

    // !!!!data loaded->function
    xhr.onload = function(){
        // GET THE RESPONSE
        // alert(xhr.responseText);
        var div = document.querySelector('#content');
            div.innerHTML = xhr.responseText;
    }
    // SENDING TO SERVER(DO IT!)
    xhr.send();
}