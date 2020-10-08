document.getElementById('querybtn').addEventListener('click', submittedQuery);

function submittedQuery() {
    console.log('received button press')

    // var http_request = new XMLHttpRequest();
    // http_request.open('GET', 'https://poetrydb.org/');
    // http_request.onreadystatechange = function() {
    //     if (this.status == 200 && this.readyState == 4) {
    //         console.log ('response: ' + this.responseText);
    //     }
    // };
    // // http_request.setRequestHeader('Content-Type', 'application/json');
    // http_request.send()

    // try XMLHttpRequest instead...
    var req;
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
        console.log('created new xmlhttprequest object');
    }
    else {
        req = new ActiveXObject("Microsoft.XMLHTTP");
    }
    req.open('GET', 'https://poetrydb.org/author');
    req.onreadystatechange = function () {
        console.log('readystatechange');
        if ((this.readyState == 4) && (this.status == 200)) {
            var resp = JSON.parse(req.responseText);
            // console.log(req.responseText);
            displayReturn(resp.authors);
        }
    };
    req.send();


    // var specs = 'author';
    // var url = new URL('https://poetrydb.org/' + specs);

    // console.log(url);

    // fetch(url, {mode: 'no-cors'})
    //     .then(response => response.json())
    //     .then(data => displayReturn(data))
    //     .catch(console.log('Failed to fetch data.'))

}

function displayReturn(data) {
    document.getElementById('data').innerHTML = '<ul>';
    for (var i = 0; i < data.length; i++) {
        document.getElementById('data').innerHTML += '<li>'+data[i]+'</li>'; // raw json
    }
    document.getElementById('data').innerHTML += '</ul>';

    document.getElementById('data').innerHTML += "<p>Can you believe they don't have Robert Frost, Sylvia Plath, and Maya Angelou?";

    console.log('displayed data');
}