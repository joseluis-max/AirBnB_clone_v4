$(document).ready(function (){
    $('.check').change(function(){
        let amenities = [];
        $('.check').each(function (index, value) {
            if (value.checked) {
                amenities.push(value.dataset["name"]);
            }
        });
        $('#list_amenities').text(amenities);
    })
})
