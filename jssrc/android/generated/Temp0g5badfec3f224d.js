function initializeTemp0g5badfec3f224d() {
    flxMainHeader0c41415abbe254e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "flxMainHeader0c41415abbe254e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0je5dfce5ffbb49"
    }, {}, {});
    flxMainHeader0c41415abbe254e.setDefaultUnit(kony.flex.DP);
    var lblHeader = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblHeader",
        "isVisible": true,
        "left": "4%",
        "skin": "CopyslLabel0c80edfb5f53542",
        "text": "Select a type",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "6dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxLineName = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "1%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "2px",
        "id": "flxLineName",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0eb632adc803f42",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLineName.setDefaultUnit(kony.flex.DP);
    flxLineName.add();
    flxMainHeader0c41415abbe254e.add(lblHeader, flxLineName);
}