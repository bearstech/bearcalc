/*global document, $ */

$(document).ready(function() {
    $.ajax({"url": "./_rooms"}).success(function(data) {
        if (data) {
            $.each(data.sort(), function() {
                if (! /_formdata$/.exec(this)) {
                    $('#sheets').append(
                        '<div><a href="' + this + ' ">' + this + '</a></div>');
                }
            });
        }
    });
});
