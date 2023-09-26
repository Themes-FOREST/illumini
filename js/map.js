 var myLatlng;
      var map;
      var marker;

      function initialize() {
        myLatlng = new google.maps.LatLng(27.691099, 85.307805);

        var mapOptions = {
          zoom: 8,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: false,
          draggable: false
        };
        map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var contentString = '<p style="line-height: 20px;" class="suwa-map"><strong>illume</strong></p><p>Lalitpur 1 Kupondole Gusingal, Kathmandu, Nepal</p>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Marker',
		  zIndex: 99999,
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });
      }

      google.maps.event.addDomListener(window, 'load', initialize);


