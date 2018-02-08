$(document).ready(function(){

   $('#term').focus(function(){
      var full = $("#poster").has("img").length ? true : false;
      if(full == false){
         $('#poster').empty();
      }
   });

   var getPoster = function(){

        var film = $('#term').val();

         if(film == ''){

            $('#poster').html("<h2 class='loading'>Ha! We haven't forgotten to validate the form! Please enter something.</h2>");

         } else {
			 
			 
            $('#poster').html("<h2 class='loading'>Your poster is on its way!</h2>");
			 var api_key = '6c35caac2e75c3bd0b041fa884e7a62f';
			 var baseimg = "http://image.tmdb.org/t/p/w500";

      $.ajax({
        url: 'http://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&query=' + film,
        dataType: 'jsonp',
        jsonpCallback: 'testing'
      }).error(function() {
        console.log('error')
      }).done(function(response) {
       
	   
	   
				
          $('#poster').append('<p>' + response.results[0].title + '</p>' + '<p>' + response.results[0].overview + '<p>' + response.results[0].release_date + '</p>' + '</p>' + '<img id="posterImage" src="' + baseimg + response.results[0].poster_path + '">');
        
      });
   
           
          }

        return false;
   }

   $('#search').click(getPoster);
   $('#term').keyup(function(event){
       if(event.keyCode == 13){
           getPoster();
       }
   });

});