var calledByScroll = false;
var currentPage = 1;

function makeAPIcall(){
  var imagesToDisplay = document.getElementById("imageDropdown").value;
  var tagsToDisplay = document.getElementById("tagBox").value;
  var newURL = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=857d0bfcb3b43ad31ed0cae7a63076dd&tags='+ tagsToDisplay +'&extras=url_q&per_page=' + imagesToDisplay + '&page=1&format=json&nojsoncallback=1';
  if(calledByScroll == true){
    currentPage++;
    newURL = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=857d0bfcb3b43ad31ed0cae7a63076dd&tags='+ tagsToDisplay +'&extras=url_q&per_page=' + imagesToDisplay + '&page=' + currentPage + '&format=json&nojsoncallback=1';
  }
  url = newURL;

  $.ajax({url:url, dataType:"json"}).then(function(data) {
    // If the function is called by scrolling to the bottom of the page:
    if(calledByScroll == true){
      for(var i = 0; i < imagesToDisplay; i++){
        var newCard = '<div class="mx-auto card" style="width: 15rem;">' + 
                        '<img class="card-img-top" src="' + data.photos.photo[i].url_q + '"alt="Card image from Flickr">' +
                        '<div class="card-body">' +
                          '<p class="card-text">' + data.photos.photo[i].title + '</p>' +
                        '</div>' +
                      '</div>';
                      
        document.getElementById("imageCards").innerHTML += newCard;
      }
    }

    // If the function is called by the submit button:
    else{
      currentPage = 1;
      // Reset the innerHTML of the imageCards
      document.getElementById("imageCards").innerHTML = "";
      for(var i = 0; i < imagesToDisplay; i++){ // add 4 images per row (style="width: 18rem")
          var newCard = '<div class="mx-auto card" style="width: 15rem;">' + 
                          '<img class="card-img-top" src="' + data.photos.photo[i].url_q + '"alt="Card image from Flickr">' +
                          '<div class="card-body">' +
                            '<p class="card-text">' + data.photos.photo[i].title + '</p>' +
                          '</div>' +
                        '</div>';
                        
          document.getElementById("imageCards").innerHTML += newCard;
        }
    }
  });
  calledByScroll = false;
}

$(document).ready(function() {
  // Default tag is trucks... because I'm still holding out hope for Cars 4
  var url ='https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=857d0bfcb3b43ad31ed0cae7a63076dd&tags=trucks&extras=url_q&per_page=30&page=1&format=json&nojsoncallback=1'; // api_key = '857d0bfcb3b43ad31ed0cae7a63076dd'; secret = b31a2ab04a208d0d
    
  
  
  
  // console.log(data); //Review all of the data returned
    /*
      API Arguments to be used:

        api_key : This is the only mandatory argument. Please use the api_key obtained in Part 1.
        tags : Use this to filter the photos based on tags.
        extras : Use this to retrieve image_url of the photo. For example, if you need the API to also return a link to the image, set the extras argument to url_sq.
        privacy_filter : Use value 1 to access only public photos.
        safe_search : Use value 1 to access only safe photos.
        page : The page to return.

    */
});
