function removecolor() {
    let select = document.getElementById("colorSelect");
    if (select.selectedIndex >= 0) {
        select.remove(select.selectedIndex);
    }
}
