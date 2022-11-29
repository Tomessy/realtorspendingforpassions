const script = document.createElement('script');
script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCj59CqAoR9radeufk9Fv97entlrL7rNLk&callback=initMap";
script.async = true;

window.initMap = function() {
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 37.31506, lng: -89.55300 },
    });
  
  const tourStops = [
    [{ lat: 37.31666576417026, lng: -89.53040961735485 }, "Dempster Hall"],
    [{ lat: 37.30374, lng: -89.58629 }, "Walmart"],
    [{ lat: 37.32954, lng: -89.56868 }, "Cape Splash"],
    [{ lat: 37.30674, lng: -89.53027 }, "Burrito-Ville"],
    [{ lat: 37.63189, lng: -89.51483 }, "Tower Rock"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });

};

document.head.appendChild(script);