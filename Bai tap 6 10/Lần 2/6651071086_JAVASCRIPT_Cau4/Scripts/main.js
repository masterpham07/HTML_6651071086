document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domBtn").onclick = function(){
        const select = document.getElementById("colorSelect");
        if(select.selectedIndex >= 0) select.remove(select.selectedIndex);
    };

    $("#jqueryBtn").click(function(){
        $("#colorSelect option:selected").remove();
    });
});