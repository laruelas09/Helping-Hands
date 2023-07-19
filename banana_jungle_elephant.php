<?php

// Helper Function to convert Address to Coordination
function convertAddressToCoordinates($address) {
	$urlEncodedAddress = urlencode($address);
    $coordinates = file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?address=' . $urlEncodedAddress . '&key={YOUR_API_KEY}');
    $coordinates = json_decode($coordinates);

    if (isset($coordinates->results[0])) {
        $latitude = $coordinates->results[0]->geometry->location->lat;
        $longitude = $coordinates->results[0]->geometry->location->lng;

        return [
            'lat' => $latitude,
            'lng' => $longitude
        ];
    }

    return false;
}

// Helper Function to generate Query String
function generateQueryString($parameters) {
    $queryString = '';

    foreach ($parameters as $key => $value) {
        $queryString .= $key . '=' . $value . '&';
    }

    return substr($queryString, 0, -1);
}

// Helper Function to get Nearby Locations
function getNearbyLocations($lat, $lng, $radius = 500) {
    $parameters = [
        'location' => $lat . ',' . $lng,
        'radius' => $radius,
        'type' => 'restaurant',
        'key' => '{YOUR_API_KEY}'
    ];

    $queryString = generateQueryString($parameters);

    $locations = file_get_contents("https://maps.googleapis.com/maps/api/place/nearbysearch/json?$queryString");
    $locations = json_decode($locations);

    if (!isset($locations->results)) {
        return false;
    }
    
    return $locations->results;
}

// Fetch Locations
$address = '{YOUR_ADDRESS}';
$coordinates = convertAddressToCoordinates($address);

if ($coordinates) {
    $locations = getNearbyLocations($coordinates['lat'], $coordinates['lng']);
    
    if ($locations) {	
        // Process Response
    }
}