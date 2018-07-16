function animateNavbar(index) {
    var i = getActiveItem();
    if (i == index) return;
    reset();
    // Set Active
    frmHome["imgItem" + index].src = getImage(index) + "active.png";
    animate(frmHome["imgItem" + index], {
        centerY: "37%",
        width: "26dp",
        height: "26dp"
    }, 0.15, function() {
        frmHome["lblItem" + index].isVisible = true;
    });
    // Set Inactive
    frmHome["imgItem" + i].centerY = "50%";
    frmHome["imgItem" + i].width = "24dp";
    frmHome["imgItem" + i].height = "24dp";
    frmHome["lblItem" + i].isVisible = false;
    frmHome["imgItem" + i].src = getImage(i) + "inactive.png";
}

function getImage(index) {
    return index == 1 ? "home_" : index == 2 ? "group_" : index == 3 ? "adduser_" : "clock_";
}

function getActiveItem() {
    for (var i = 1; i < 5; i++) {
        if (frmHome["imgItem" + i].centerY == "37%") return i;
    }
}