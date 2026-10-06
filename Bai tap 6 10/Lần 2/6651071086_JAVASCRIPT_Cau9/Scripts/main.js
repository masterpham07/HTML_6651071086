function clearErrors(){
    $(".error").text("");
    $("#result").text("");
}

function validEmail(email){
    const parts = email.split("@");
    if(parts.length !== 2) return false;

    const account = parts[0];
    const domain = parts[1];

    if(account === "" || domain === "") return false;
    if((account.match(/\./g) || []).length > 1) return false;
    if((domain.match(/\./g) || []).length < 1) return false;

    return /^[^\s@]+@[^\s@]+$/.test(email);
}

function validBirthdate(value){
    const m = value.match(/^(\d{2})[\/-](\d{2})[\/-](\d{4})$/);
    if(!m) return false;

    const month = Number(m[1]);
    const day = Number(m[2]);
    const year = Number(m[3]);
    const currentYear = new Date().getFullYear();

    if(month < 1 || month > 12 || year >= currentYear) return false;

    const date = new Date(year, month, 0);
    return day >= 1 && day <= date.getDate();
}

$(function(){
    $("#clear").click(function(){
        document.getElementById("registerForm").reset();
        clearErrors();
    });

    $("#finish").click(function(){
        clearErrors();
        let ok = true;

        if($("#name").val().trim() === ""){
            $("#nameError").text("Bắt buộc nhập.");
            ok = false;
        }

        if(!$("input[name='sex']:checked").val()){
            $("#sexError").text("Bắt buộc chọn.");
            ok = false;
        }

        const email = $("#email").val().trim();
        if(email === "" || !validEmail(email)){
            $("#emailError").text("Email không hợp lệ.");
            ok = false;
        }

        const birth = $("#birthdate").val().trim();
        if(birth === "" || !validBirthdate(birth)){
            $("#birthError").text("Ngày sinh không hợp lệ.");
            ok = false;
        }

        if($("#address").val().trim() === ""){
            $("#addressError").text("Bắt buộc nhập.");
            ok = false;
        }

        if($("#city").val().trim() === ""){
            $("#cityError").text("Bắt buộc nhập.");
            ok = false;
        }

        if($("#region").val() === ""){
            $("#regionError").text("Bắt buộc chọn.");
            ok = false;
        }

        if(!/^\d{5}$/.test($("#zip").val().trim())){
            $("#zipError").text("ZIP code phải đúng 5 số.");
            ok = false;
        }

        if(ok){
            $("#result").html("<span class='success'>Dữ liệu hợp lệ! Đăng ký thành công.</span>");
        }else{
            $("#result").text("Vui lòng kiểm tra lại các trường bị lỗi.");
        }
    });
});