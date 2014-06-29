var top_menu_height = 0;

jQuery(function($) {
        $(document).ready( function() {
/*
            // load google map
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
            'callback=initialize' + 'callback=initialize1' + 'callback=toggleBounce';
        document.body.appendChild(script);
*/

        top_menu_height = $('.coincharitiesmo-top-menu').height();
        // scroll spy to auto active the nav item
        $('body').scrollspy({ target: '#coincharitiesmo-nav-bar', offset: top_menu_height+10 });



        // scroll to top
        $('#btn-back-to-top').click(function(e){
            e.preventDefault();
            scrollTo('#coincharitiesmo-top');
        });

        // scroll to specific id when click on menu
        $('.coincharitiesmo-top-menu .navbar-nav a').click(function(e){
            e.preventDefault(); 
            var linkId = $(this).attr('href');
            scrollTo(linkId);
            if($('.navbar-toggle').is(":visible") == true){
                $('.navbar-collapse').collapse('toggle');
            }
            $(this).blur();
            return false;
        });

        // to stick navbar on top
        $('.coincharitiesmo-top-menu ').stickUp();

        // gallery category
        $('.coincharitiesmo-gallery-category a').click(function(e){
            e.preventDefault(); 
            $(this).parent().children('a').removeClass('active');
            $(this).addClass('active');
            var linkClass = $(this).attr('href');
            $('.gallery').each(function(){
                if($(this).is(":visible") == true){
                   $(this).hide();
                };
            });
            $(linkClass).fadeIn();  
        });

        //gallery light box setup
        $('a.colorbox').colorbox({
                                    rel: function(){
                                        return $(this).data('group');

                                    }
        });
    });
});
/*
function initialize() {

var myLatlng = new google.maps.LatLng(22.276932, 114.176846);
var myLatlng2 = new google.maps.LatLng(22.276932, 114.176);
var marker;
var map;

 google.maps.event.addDomListener(window, 'load', initialize1);
}
function initialize1() {
  var mapOptions = {
    zoom: 13,
    center: myLatlng
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

  marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: myLatlng2
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
*/

/*
    var mapOptions = {
      zoom: 18,
      center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);
	
var marker = new google.maps.Marker({
    position: myLatlng,
    title:"coincharities"
});

// To add the marker to the map, call setMap();
marker.setMap(map);
	
}
*/
// scroll animation 
function scrollTo(selectors)
{

    if(!$(selectors).size()) return;
    var selector_top = $(selectors).offset().top - top_menu_height;
    $('html,body').animate({ scrollTop: selector_top }, 'slow');

}

//toggle list visibility
    function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }
	
	//google Map
	var hongkong = new google.maps.LatLng(22.276932, 114.176846);
var kowloon = new google.maps.LatLng(22.2769, 114.1768);
var marker;
var map;

function initialize() {
  var mapOptions = {
    zoom: 12,
    center: hongkong
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

  marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: kowloon
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);