function initializeflxSeglisttype() {
    flxSeglisttype = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "flxSeglisttype",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0i61deadb33fa4d"
    }, {
        "containerWeight": 100
    }, {});
    flxSeglisttype.setDefaultUnit(kony.flex.DP);
    var lbltypelist = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbltypelist",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0ifeadb7198534c",
        "text": "Customer & Prospect",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "8dp",
        "width": "290dp",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
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
    }, {
        "containerWeight": 100
    }, {});
    flxLineName.setDefaultUnit(kony.flex.DP);
    flxLineName.add();
    flxSeglisttype.add(lbltypelist, flxLineName);
}