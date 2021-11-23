function initMap() {
    // The location of Brackenhurst
    const brackenhurst = { lat: -26.315527180839673, lng: 28.099590713784654 };
    // The map, centered at Brackenhurst
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: brackenhurst,
    });
    // The marker, positioned at Brackenhurst
    const marker = new google.maps.Marker({
        position: brackenhurst,
        map: map,
    });
}
