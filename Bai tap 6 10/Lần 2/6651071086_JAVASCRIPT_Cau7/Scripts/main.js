$(function(){
    $("#linkForm").submit(function(e){
        e.preventDefault();
        let link = $("#linkInput").val().trim();

        if(link === ""){
            $("#result").text("Vui lòng nhập đường link.");
            return;
        }

        if(!/^https?:\/\//i.test(link)){
            link = "https://" + link;
        }

        if(confirm("Bạn có muốn chuyển đến: " + link + " ?")){
            window.location.href = link;
        }
    });
});