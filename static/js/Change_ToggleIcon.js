const collapses = document.getElementsByClassName("Sidebar_collapse");

window.onload = function(){
    var icons = document.getElementsByClassName("SidebarToggleIcon");
    for(var c = 0; c < collapses.length; c++){
        collapses[c].onclick = function(){
            var i = FindID(this);
            if(i == -1){
                alert("this button is not registered");
            }else{
                if (collapses[i].getAttribute('aria-expanded') == "false") {
                    icons[i].className = "fas fa-minus SidebarToggleIcon";
                } else {
                    icons[i].className = "fas fa-plus SidebarToggleIcon";
                }
            }
        }
    } 
}

function FindID(ele) {
    var result = -1;
    for(var c = 0; c < collapses.length; c++){
        if(collapses[c] == ele){
            result = c;
        }
    }
    return result;
}

