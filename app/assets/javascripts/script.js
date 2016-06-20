var oldClick = 0;
var darkred = ["#ff0000", 1];//Change colors below as well :(
var red = ["#cc0000", 1];
var lightred = ["#990000", 1];
var ids = { 
    chuck2: darkred,
    brisket2: red,
    foreshank2: lightred,
    rib2: red,
    shortplate2: darkred,
    shortloin2: red,
    sirloin2: lightred,
    tenderloin2: red,
    round2: darkred,
    flank2: lightred,
    hindshank2: darkred,
    cheek2: darkred,
    tongue2: red,
    sweetbread2: lightred,
    oxtail2: darkred,
    heart2: red,
    liver2: lightred,
    tripe2: darkred,
    spleen2: red,
    kidney2: lightred,
    hooves2: darkred,
    hooves22: darkred,
    hooves32: darkred,
    hooves42: darkred,
    tendon2: red,
    tendon22: red,
    tendon32: red,
    tendon42: red,
    stockbone2: lightred,
    stockbone22: lightred
        };
jQuery(function() {
    jQuery('#cow').maphilight({groupBy: 'alt'});
    jQuery('#Empty').maphilight({groupBy: 'alt'});
    jQuery('#text').maphilight({groupBy: 'alt'});
});
var myFunction = function() {//set color for mouseover
//    $.fn.maphilight.defaults = {
//    groupBy: 'alt'
//};
    $('#svgimagemap3 area').each(function() {
        $(this).attr("data-maphilight", '{"strokeColor":"200000","strokeWidth":1,"strokeOpacity":0.1, "fillColor":"200000","fillOpacity":0.5}');
    });
    $('#svgimagemap area').each(function() {
        $(this).attr("data-maphilight", '{"strokeColor":"200000","strokeWidth":1,"strokeOpacity":0.1, "fillColor":"200000","fillOpacity":0.5}');
    });

    $("#svgimagemap3").click(function(e) {//click on only one area
        e.preventDefault();
        var newClick = e.target.id;
        newClick = newClick.slice(0, -1);
        var data = $('#'+newClick).mouseout().data('maphilight');
        data.fillOpacity = 1;
        data.alwaysOn = !data.alwaysOn;//first true then toggle false/true
        $('.meats.'+newClick).toggle();
        $('#'+newClick).data('maphilight', data).trigger('alwaysOn.maphilight');      
        if (newClick != oldClick && oldClick != 0) {
            $('.meats.'+oldClick).toggle();
            //make new if statement here about 
//            if($() {
//            };
            var data2 = $('#'+oldClick).mouseout().data('maphilight');
            data2.alwaysOn = !data2.alwaysOn;//starts !true = false because this is prev. defined
            $('#'+oldClick).data('maphilight', data2).trigger('alwaysOn.maphilight');
        };
        if(!data.alwaysOn) {
            oldClick = 0;
        } else {
        oldClick = newClick;
        };
        data.fillOpacity = 0.5;
});
    $("#svgimagemap2").each(function() {
        for (i in ids) {
            $(this).children("#"+i).each(function() {
                switch (ids[i]) {
                    case red:
                        $(this).attr("data-maphilight", '{"strokeColor":"200000","strokeWidth":1,"strokeOpacity":1, "fillColor":"cc0000","fillOpacity":1, "alwaysOn":"true"}');
                        break;
                    case lightred:
                        $(this).attr("data-maphilight", '{"strokeColor":"200000","strokeWidth":1,"strokeOpacity":1, "fillColor":"990000","fillOpacity":1, "alwaysOn":"true"}');
                        break;
                    case darkred:
                        $(this).attr("data-maphilight", '{"strokeColor":"200000","strokeWidth":1,"strokeOpacity":1, "fillColor":"ff0000","fillOpacity":1, "alwaysOn":"true"}');
                        break;
                };  
            });
        };
    });
};

$(document).ready(myFunction);