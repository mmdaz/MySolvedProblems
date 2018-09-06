function showPost(PostID) {
    var id = document.getElementById(PostID.children[1].id);
    if (id.className.indexOf("w3-show") == -1) {
        id.className += " w3-show";
    } else { 
        id.className = id.className.replace(" w3-show", "");
    }
}