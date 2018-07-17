function frmPreShow() {
    frmGroups.flxTopbar1.shadowDepth = 4;
    frmGroups.flxCustomer.onTouchStart = showShadow;
    frmGroups.flxProspect.onTouchStart = showShadow;
    frmGroups.flxProspectCustomer.onTouchStart = showShadow;
    frmGroups.flxABO.onTouchStart = showShadow;
    frmGroups.flxCustomer.onTouchEnd = hideShadow;
    frmGroups.flxProspect.onTouchEnd = hideShadow;
    frmGroups.flxProspectCustomer.onTouchEnd = hideShadow;
    frmGroups.flxABO.onTouchEnd = hideShadow;
    frmGroups.flxItem1.onClick = navigateHome;
    frmGroups.flxItem3.onClick = navigateProfile;
    for (var i = 1; i <= 4; i++) {
        frmGroups["flxCustom" + i].onTouchStart = showShadow;
        frmGroups["flxCustom" + i].onTouchEnd = hideShadow1;
        frmGroups["flxCustom" + i].setGestureRecognizer(3, {
            pressDuration: 2
        }, callBack);
        frmGroups["flxClose" + i].width = "0%";
        frmGroups["flxClose" + i].height = "0%";
        frmGroups["flxClose" + i].onTouchStart = deleteGroup;
    }
}

function navigateHome() {
    frmHome.show();
}

function navigateProfile() {
    frmProfile.show();
}

function deleteGroup(src) {
    var id = src.id[src.id.length - 1];
    frmGroups["flxCustom" + id].height = "0";
    kony.timer.cancel("timerid");
    for (var i = 1; i <= 4; i++) {
        frmGroups["flxCustom" + i].shadowDepth = 0;
        frmGroups["flxClose" + i].height = "0%";
        frmGroups["flxClose" + i].width = "0%";
    }
    longPress = false;
}

function showShadow(src) {
    frmGroups[src.id + ""].shadowDepth = 5;
}

function hideShadow(src) {
    frmGroups[src.id + ""].shadowDepth = 0;
}

function hideShadow1(src) {
    if (!longPress) frmGroups[src.id + ""].shadowDepth = 0;
}

function callBack(widget, info) {
    longPress = true;
    for (var i = 1; i <= 4; i++) {
        frmGroups["flxCustom" + i].shadowDepth = 5;
        animate1(frmGroups["flxClose" + i], {
            "width": "16%",
            "height": "18%"
        }, 0.5);
    }
    kony.timer.schedule("timerid", animateTimer, 0.1, true);
}

function animateTimer() {
    for (var i = 1; i <= 4; i++) {
        var left = frmGroups["flxCustom" + i].left;
        var newleft = parseInt(left) + 0.2 + "%";
        animate1(frmGroups["flxCustom" + i], {
            "left": newleft
        }, 0.05, animationend);
    }
}

function animationend() {
    for (var i = 1; i <= 4; i++) {
        var left = frmGroups["flxCustom" + i].left;
        var newleft = parseInt(left) + "%";
        animate1(frmGroups["flxCustom" + i], {
            "left": newleft
        }, 0.05);
    }
}

function animate1(element, params, duration, callback, delay) {
    duration = duration || 0.25;
    callback = callback || null;
    delay = delay || 0;
    params.stepConfig = {
        "timingFunction": kony.anim.EASE
    };
    element.animate(kony.ui.createAnimation({
        "100": params,
    }), {
        "delay": delay,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": duration,
    }, {
        "animationEnd": callback
    });
}