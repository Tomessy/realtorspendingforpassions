const script = document.createElement('script');
script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCj59CqAoR9radeufk9Fv97entlrL7rNLk&callback=initMap";
script.async = true;

window.initMap = function() {
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 37.31506, lng: -89.55300 },
    });
  
  const tourStops = [
    [{ lat: 37.30511529253102, lng: -89.55003362984333}, "Cape Girardeau"],
    [{ lat: 36.16622870634739, lng: -86.78764541308435 }, "House Sold in Nashville TN"],
    [{ lat: 41.10554727276672, lng: -89.3158612492457 }, "House Sold in Illinois"],
    [{ lat: 38.879966060909474, lng: -100.1140859684321 }, "House Sold in Kansas"],
    [{ lat: 33.58253239112885, lng: -93.06028154143416 }, "House Sold in Arkansas"],
    [{ lat: 27.800437244028895, lng: -82.6870897520678 }, "House Sold in Florida"],
    [{ lat: 44.20422246562911, lng:-106.68040319809943 }, "House Sold in Wyoming"],
    [{ lat: 30.171137911995988, lng: 31.1759163707121 }, "House Sold in Africa"]
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