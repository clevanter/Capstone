function tableSearch() {
    let input, filter, table, tr, td, txtValue, page;

    //Intialising Variables
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    head = document.getElementById("thead");
    page = document.querySelector(".page")

    for (let i = 0; i < tr.length; i++) {
            td = tr[i];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                        head.style.display = "";

                    } else if(txtValue.toUpperCase().indexOf(filter).length < 10){
                        tr[i].style.display = "";
                        page.style.display = "none";
                    }
                     else {
                        tr[i].style.display = "none";
                        head.style.display = "";
                        page.style.display = "none";
                    }
        }
    }

}