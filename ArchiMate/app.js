$(function () {

    $(function () {
        $("#layers").accordion({
            heightStyle: "content",
            collapsible: true
        });
    });

    $(function () {
        $(".gbTabs").tabs();

        $(function () {
            $(document).tooltip({
                track: true,
                position: { my: "right-50 bottom", at: "left bottom", collision: "flipfit" }
            });
        });

    });

    /* === Dialog box functions for references ===*/

    $(function () {
        // Dialog Caracteristics
        $(".gbDialog").dialog(
            {
                autoOpen: false,
                minWidth: 500,
                position: {
                    my: "top",
                    at: "center top"
                },
                hide: { effect: 'fade', duration: 500 },
                show: { effect: 'fade', duration: 500 },
                duration: 50
            }
        );
        // On click event         

        $(".gbHelp").click(function () {
            $("#diagRef").dialog("open");
        });
    });

    /*   Add Zoom  */

    var newImg;
    $(".arcExample").each(function () {
        src=$(this).attr('src');
        newImg = '<div class="container"><div class="zoom"><img  src=' + src + '></div></div>';
        $(newImg).insertAfter(this);
        console.log(newImg);
        $(this).css('display', 'none');
    })
    
    zoom();
});
