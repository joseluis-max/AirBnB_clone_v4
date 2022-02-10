$(document).ready(function () {
    $('.check').change(function () {
        let amenities = [];
        $('.check').each(function (index, value) {
            if (value.checked) {
                amenities.push(value.dataset["name"]);
            }
        });
        if (amenities.length != 0){
            $('#list_amenities').text(amenities);
        }
        else {
            $('#list_amenities').html('&nbsp;');
        }
    })
    $.get('http://0.0.0.0:5001/api/v1/status/', function(data, textStatus){
        console.log(data, textStatus)
        if (textStatus == 'success'){
            $('#api_status').toggleClass('available');
        } else {
            $('#api_status').toggleClass('available');
        }
    });
});
