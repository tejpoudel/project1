alert("Ready to work");

//TODO Movie OMDb API
// TODO Youtube API Working 


//Ceh

function movieinfo() {
        
        var queryURL = "http://www.omdbapi.com/?t=rock&apikey=//!InsertKey";
        // Creating an AJAX call for the specific movie 
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
        console.log(response);
        }
)};
movieinfo();

function youtube(){

    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=The+Rock+Trailer&type=video&key=//!InsertKey";
    //Creating an Ajax call for the specific trailer 

    $.ajax({

        url:queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    }
)};

youtube(); 
