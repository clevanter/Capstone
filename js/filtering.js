function tableFilter(){

    var input, filter, table, tr, td, i;
    input = document.getElementById("show");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else if (filter == 'ALL'){
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }       
    }


}




