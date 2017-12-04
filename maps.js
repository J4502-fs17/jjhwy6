<!DOCTYPE html>
<html>
<head>
  <script src="http://maps.google.com/maps/api/js"></script>
  <script type="text/javascript">
    google.maps.event.addDomListener(window, 'load', initialize);
    function initialize() {
      google.maps.streetViewViewer = 'photosphere';
      var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
          pano: 'F:-Qw0xX9vx0q4/VvqZcmow-1I/AAAAAAAAAgw/5TXys0WrEZMOy_wfqLzfPS8Slkj8P1BhA',
          position: {lat: 43.259217, lng: 76.953148},
          pov: {heading: 28.78, pitch: 0.00, zoom: 0.26}
      });
    }
  </script>
  <style>
  html, body {
    height: 100%;
    margin: 0;
  }
</style>
</head>
<body>
  <div id="pano" style="width: 100%; height: 100%;"></div>
</body>
</html>
