function getFormvalue(event) {
    event.preventDefault();
    let form = document.getElementById("form1");
    let fname = form.elements["fname"].value;
    let lname = form.elements["lname"].value;
    document.getElementById("ketqua").textContent = fname + " " + lname;
}
