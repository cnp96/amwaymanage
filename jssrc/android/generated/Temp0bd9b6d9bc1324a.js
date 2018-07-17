function initializeTemp0bd9b6d9bc1324a() {
    flxMainHeader0b22cbf4aba2a4a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "flxMainHeader0b22cbf4aba2a4a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0ccd33d2ba1374b"
    }, {}, {});
    flxMainHeader0b22cbf4aba2a4a.setDefaultUnit(kony.flex.DP);
    var lblHeader = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblHeader",
        "isVisible": true,
        "left": "4%",
        "skin": "CopyslLabel0ecdb1c52a6674c",
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
        "skin": "CopyslFbox0ha9ec4d0340a4d",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLineName.setDefaultUnit(kony.flex.DP);
    flxLineName.add();
    flxMainHeader0b22cbf4aba2a4a.add(lblHeader, flxLineName);
}