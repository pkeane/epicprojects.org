var Clouds = {};

$(document).ready(function() {
    Clouds.init();
});

Clouds.init = function() {
    var url = $('link[rel="cloud-data"]').attr('href');
    var jqxhr = $.getJSON(url, function(data) {
        //create list for tag links  
        //from http://net.tutsplus.com/tutorials/javascript-ajax/building-a-jquery-powered-tag-cloud/
        $("<div>").attr("id", "tagList").appendTo("#cloud");  
        //create tags  
        $.each(data.values, function(i, val) {  
            $("<a>").text(val.v).attr({title:"See all pages tagged with " + val.v, href:"http://localhost/tags/" + val.v + ".html"}).css("fontSize", (val.t / 10 < 1) ? val.t / 10 + 1 + "em": (val.t / 10 > 2) ? "2em" : val.t / 10 + "em").appendTo("#tagList");  
        });  
    });
};
