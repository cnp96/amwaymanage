function AS_FlexContainer_jb662a55cc0f44878840e8fce6205182(eventobject, x, y) {
    function MOVE_ACTION____cf896652102c434bb8b4e357d467b9fc_Callback() {}
    frmGroups.flxNavbar.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "rectified": true
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____cf896652102c434bb8b4e357d467b9fc_Callback
    });
}