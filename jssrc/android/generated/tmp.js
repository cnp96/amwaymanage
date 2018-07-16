function initializetmp() {
    flxBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70dp",
        "id": "flxBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0d032fc7405bb4c"
    }, {}, {});
    flxBody.setDefaultUnit(kony.flex.DP);
    var flxCard = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "95%",
        "id": "flxCard",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox0b4ab001bc1044f",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxCard.setDefaultUnit(kony.flex.DP);
    var img = new kony.ui.Image2({
        "centerY": "50%",
        "height": "28dp",
        "id": "img",
        "isVisible": true,
        "left": "10%",
        "skin": "slImage",
        "src": "group.png",
        "width": "28dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblName",
        "isVisible": true,
        "left": "10%",
        "skin": "CopyslLabel0fb28635fbc284a",
        "text": "Manage Group",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxCard.add(img, lblName);
    flxBody.add(flxCard);
}