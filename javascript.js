$(document).ready(function () {
    "use strict";
    $("#LoginDetails").hide();  // hide LoginDetails div on load

    $("#LoginForm").submit(function () {
    // validating the form
        var formOk = true;
        var userName = $("#LoginForm__username").val(); // store user's input for user name in userName
        var userPassword = $("#LoginForm__password").val();
        if (userName === "" || userName === null) {
            $("#LoginForm__username").focus();
            formOk = false;
        } else if (userPassword === "" || userPassword === null) {
            $("#LoginForm__password").focus();
            formOk = false;
        } else {
            formOk = true;
        }
    // end of validation
        if (formOk) {
            $("#LoginDetails__name").html($("#LoginForm__username").val());
            $("#LoginDetails__password").html($("#LoginForm__password").val());
            $("#LoginDetails").show();
            return false;
        }
        return false;

    }); // end of on submit function

});

