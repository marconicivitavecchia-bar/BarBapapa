var app = {

    init : function(){
       // alert("Benvenuti nel BarBapapa ");
        $.get("https://api.github.com/users/danieleleo99");
        .done(app.onSuccess);
    },
    onSuccess:function(data){
    console.log(dat)
}
};


$(document).ready(app.init);



