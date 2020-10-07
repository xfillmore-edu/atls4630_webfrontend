document.getElementById('querybtn').addEventListener('click', submittedQuery);

function submittedQuery() {

    var http_request = new XMLHttpRequest();
    http_request.open('GET', 'https://api.govinfo.gov');
    http_request.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {
            console.log ('response: ' + this.responseText);
        }
    };
    http_request.withCredentials = true;
    // http_request.setRequestHeader('Content-Type', 'application/json');
    http_request.send()

    // var specs = 'packages/CREC-2018-01-04/summary/';
    var specs = 'collections/CREC/2018-10-10/summary/';
    // var url = new URL('https://api.govinfo.gov/' + specs + '?api_key=' + apiKey);
    var url = new URL('https://api.govinfo.gov/' + specs);

    console.log(url);

    var parameters = {
        // pageSize: 10,
        // offset: 0,
        api_key: apiKey
    }

    // url.searchParams.append(parameters); // = new URLSearchParams(parameters);
    url.search = new URLSearchParams(parameters);

    fetch(url, {mode: 'no-cors'})
        .then(response => response.json())
        .then(data => displayReturn(data))
        .catch(console.log('Failed to fetch data.'))

}

function displayReturn(data) {
    document.getElementById('data').innerHTML = data; // raw json
    cosole.log('displayed data');
}