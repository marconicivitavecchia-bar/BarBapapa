var app = {

    init: function () {
        // alert("Benvenuti nel BarBapapa ");
        $.get("https://api.github.com/users/piropiro7")
            .done(app.onSuccess);
    },
    onSuccess: function (data) {
        console.log(data)
    }
};


$(document).ready(app.init);



