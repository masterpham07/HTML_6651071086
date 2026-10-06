document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domBtn").onclick = function(){
        const count = document.getElementById("mySelect").options.length;
        let text = "Số lượng mục: " + count + "\n";
        const options = document.getElementById("mySelect").options;
        for(let i=0;i<options.length;i++) text += (i+1) + ". " + options[i].text + "\n";
        alert(text);
    };

    $("#jqueryBtn").click(function(){
        let text = "Số lượng mục: " + $("#mySelect option").length + "\n";
        $("#mySelect option").each(function(i){
            text += (i+1) + ". " + $(this).text() + "\n";
        });
        alert(text);
    });
});