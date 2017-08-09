$(document).ready(function() {
  $("#userInformation").submit(function(event) {
    var name = $("#userName").val();
    var description = $("#userDescription").val();
    var date = $("#userDate").val();
    var time = $("#userTime").val();
    $("#resultName").text(name);
    $("#resultDescription").text(description);
    $("#resultDate").text(date);
    $("#resultTime").text(time);

    $("#print").show();

    event.preventDefault();

  });

});
