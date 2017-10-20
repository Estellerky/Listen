$( document ).ready(function() {

  $.getJSON("https://api.airtable.com/v0/appSoHqkhqe0oIqB0/musics?api_key=keyLXf2qtgVwYHlLu",
        function(data) {
          console.log(data);
          $.each(data.records, function(key,val) {
            console.log(val.fields.title);

            $('<li>'+val.fields.title+'</li>').appendTo('#musiques');
            $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#musiques');

        })
    }  );


        });
