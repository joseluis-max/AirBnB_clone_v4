$(document).ready(function () {
    $('.check').change(function () {
        let amenities = [];
        $('.check').each(function (index, value) {
            if (value.checked) {
                amenities.push(value.dataset["name"]);
            }
        });
        if (amenities.length != 0) {
            $('#list_amenities').text(amenities);
        }
        else {
            $('#list_amenities').html('&nbsp;');
        }
    })
    $.get('http://0.0.0.0:5001/api/v1/places_search/', function (data, textStatus) {
        console.log(data, textStatus)
        if (textStatus == 'success') {
            $('#api_status').toggleClass('available');
        } else {
            $('#api_status').toggleClass('available');
        }
    });

    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        contentType: 'application/json',
        data: JSON.stringify({}),
        type: 'POST',
        success: function(data){
            for (const place of data) {
                const article = ['<article>',
                    '<div class="title_box">',
                    `<h2>${place.name}</h2>`,
                    `<div class="price_by_night">$${place.price_by_night}</div>`,
                    '</div>',
                    '<div class="information">',
                    `<div class="max_guest">${place.max_guest} Guest(s)</div>`,
                    `<div class="number_rooms">${place.number_rooms} Bedroom(s)</div>`,
                    `<div class="number_bathrooms">${place.number_bathrooms} Bathroom(s)</div>`,
                    '</div>',
                    '<div class="description">',
                    `${place.description}`,
                    '</div>',
                    '</article>'];
                $('SECTION.places').append(article.join(''));
            }
        },
        error: function(err){
            console.error(err);
        }
    })
});
