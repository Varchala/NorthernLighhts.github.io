$(document).ready(function() {
    $("#about").click(function() {
        $("#panelp").slideToggle("slow");
        $("#panelv").hide();
        $("#panelq").hide();
    });

});
$(document).ready(function() {
    $("#places").click(function() {
        $("#panelq").slideToggle("slow");
        $("#panelv").hide();
        $("#panelp").hide();

    });

});
$(document).ready(function() {
    $("#video").click(function() {
        $("#panelv").slideToggle("slow");
        $('#panelv').prop("controls autoplay", true);
        $("#panelq").hide();
        $("#panelp").hide();

    });

});