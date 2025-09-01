<?php
require 'auth_check.php';
?>
<!DOCTYPE html>
<html>
<head>
    <title>Interactive Map</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <style>
        body { margin: 0; padding: 0; }
        #map { height: 100vh; width: 100%; }
        .logout-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 1000;
            background: #d9534f;
            color: white;
            padding: 8px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <button class="logout-btn" onclick="window.location.href='logout.php'">Logout</button>
    <div id="map"></div>

    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    <script>
        // Initialize the map
        const map = L.map('map').setView([51.505, -0.09], 13);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add a marker
        const marker = L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('Hello, <?php echo $_SESSION['username']; ?>!')
            .openPopup();

        // Add click event to place markers
        map.on('click', function(e) {
            const popup = L.popup()
                .setLatLng(e.latlng)
                .setContent(`You clicked at ${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`)
                .openOn(map);
        });
    </script>
</body>
</html>