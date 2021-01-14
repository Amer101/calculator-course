$(document).ready(function(){

    var num = document.getElementsByClassName("num");
    for(var i=0; i<num.length; i++) {
        num[i].addEventListener('click',function(){
            var output = $("#output").html();
            if(output!=NaN){
                output=output+this.value;
                $(".output").html(output);
            }
        })
    }

    var operator = document.getElementsByClassName("operator");
    for (var i=0; i<operator.length; i++) {
        operator[i].addEventListener('click',function(){
            if(this.id=="restart"){
                $(".output").html("");
                $(".history").html("");
            }
            if($(".output").html()==""){
                $(".history").html("");
            }else{
                if($(".history").html()==""){
                    var output = $("#output").html();
                    $(".history").html(output+this.id);
                    $(".output").html("");
                }else{
                    var output = $("#output").html();
                    var history = $(".history").html();
                    output = history + output;
                    $(".history").html(output+this.id);
                    $(".output").html("");
                }
            }
        })
    }

    
    $(".equal").click(function(){
        var output = $("#output").html();
        var history = $("#history").html();
        history = history + output;
        var result = eval(history);
        $(".history").html("");
        $(".output").html(result);
    })

}); 

