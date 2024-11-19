function fx(){
    var date = document.getElementById('date').value;
    var apiKey = "LTr4C5BXwoD6614gIo5VIr7zqBqgQS07S2t2GFOl";
    var url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&date=" + date;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            var json = JSON.parse(this.responseText);
            var title = json.title;
            //console.log(title);
            var details = json.explanation;
            //console.log(details);
            var img = json.url;
            //console.log(img);

            document.getElementById('details').style.visibility = "";
            document.getElementById('photo').style.visibility = "";

            document.getElementById('title').innerHTML = title;
            document.getElementById('details').innerHTML = details;
            document.getElementById('photo').src = img;

        } else if(this.status === 400){
            document.getElementById('title').innerHTML = "BAD REQUEST";
            document.getElementById('details').style.visibility = "hidden";
            document.getElementById('photo').style.visibility = "hidden";

        }
    }
    xhttp.open('GET', url, true);
    xhttp.send();
}