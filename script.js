//create a request variable. request variable issue the http request by creating instance of xml-http-request
var request = new XMLHttpRequest();
//open the connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//send the request
request.send();
//load response when it is ready.
// the function is triggered when onload is ready with response 
request.onload = function() {
    var data = JSON.parse(this.response);//JSON.parse to parse into perfect json object 
    console.log(data);
    for(i in data) {
        console.log(data[i].flag);
    }
}