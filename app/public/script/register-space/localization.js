// $(document).ready(function(){
//     ("#search-localization").on('keypress', function(e){
//         if(e.which == 13){
//             $("#encompass-form").show('slow');
//         }
//     })
// });

$(document).ready(function(){
    $("#search-localization").click(function(){
        $("#location-data").show('slow')
    })

    $( "iframe").hover(function(){
        $("#encompass-form").fadeTo("slow", 0.5);
      });

})

