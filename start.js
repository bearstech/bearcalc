/*global document, $ */

$(document).ready(function() {
    $.ajax({"url": "./_rooms"}).success(function(data) {
        if (data) {
            $.each(data.sort(), function() {
                if (! (/_formdata$/.exec(this) || /\./.exec(this)) ) {
                    var value = '';
                    if (data.indexOf(this + '.1') === -1) {
                        value = '<a href="/' + this + ' ">' + this + '</a>';
                    } else {
                        value = '<a href="/=' + this + ' ">' + this + '</a>';
                    }
                    $('#sheets').append('<div>' + value + '<div>');
                }
            });
        }
    });
});
