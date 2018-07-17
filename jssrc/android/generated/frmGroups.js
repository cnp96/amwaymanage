function addWidgetsfrmGroups() {
    frmGroups.setDefaultUnit(kony.flex.DP);
    var flxNavbar = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "50dp",
        "id": "flxNavbar",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0bb864541291a45",
        "width": "100%",
        "zIndex": 6
    }, {}, {});
    flxNavbar.setDefaultUnit(kony.flex.DP);
    var flxNavItems = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxNavItems",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxNavItems.setDefaultUnit(kony.flex.DP);
    var flxItem1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxItem1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flxItem1.setDefaultUnit(kony.flex.DP);
    var imgItem1 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "24dp",
        "id": "imgItem1",
        "isVisible": true,
        "skin": "slImage",
        "src": "home_inactive.png",
        "width": "24dp",
        "zIndex": 5
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblItem1 = new kony.ui.Label({
        "bottom": "7dp",
        "centerX": "50%",
        "id": "lblItem1",
        "isVisible": false,
        "skin": "CopyslLabel0cd738bb0045a4d",
        "text": "Home",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxItem1.add(imgItem1, lblItem1);
    var flxItem2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxItem2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flxItem2.setDefaultUnit(kony.flex.DP);
    var imgItem2 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "37%",
        "height": "26dp",
        "id": "imgItem2",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "group_active.png",
        "width": "26dp",
        "zIndex": 5
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblItem2 = new kony.ui.Label({
        "bottom": "7dp",
        "centerX": "50%",
        "id": "lblItem2",
        "isVisible": true,
        "skin": "CopyslLabel0cd738bb0045a4d",
        "text": "Groups",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxItem2.add(imgItem2, lblItem2);
    var flxItem3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxItem3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flxItem3.setDefaultUnit(kony.flex.DP);
    var imgItem3 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "24dp",
        "id": "imgItem3",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "adduser_inactive.png",
        "width": "24dp",
        "zIndex": 5
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblItem3 = new kony.ui.Label({
        "bottom": "7dp",
        "centerX": "50%",
        "id": "lblItem3",
        "isVisible": false,
        "skin": "CopyslLabel0cd738bb0045a4d",
        "text": "Add User",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxItem3.add(imgItem3, lblItem3);
    var flxItem4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxItem4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flxItem4.setDefaultUnit(kony.flex.DP);
    var imgItem4 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "24dp",
        "id": "imgItem4",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "clock_inactive.png",
        "width": "24dp",
        "zIndex": 5
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblItem4 = new kony.ui.Label({
        "bottom": "7dp",
        "centerX": "50%",
        "id": "lblItem4",
        "isVisible": false,
        "skin": "CopyslLabel0cd738bb0045a4d",
        "text": "Follow Ups",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxItem4.add(imgItem4, lblItem4);
    flxNavItems.add(flxItem1, flxItem2, flxItem3, flxItem4);
    flxNavbar.add(flxNavItems);
    var flxTopbar = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxTopbar",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0c6c432a1bc5b4d",
        "top": "0dp",
        "width": "100%",
        "zIndex": 5
    }, {}, {});
    flxTopbar.setDefaultUnit(kony.flex.DP);
    flxTopbar.add();
    var flxGroups = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bottom": "50dp",
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "horizontalScrollIndicator": true,
        "id": "flxGroups",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFbox0a4bf198bd0bd4a",
        "top": "50dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 6
    }, {}, {});
    flxGroups.setDefaultUnit(kony.flex.DP);
    var flxDefault = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "flxDefault",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDefault.setDefaultUnit(kony.flex.DP);
    var lblDefault = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblDefault",
        "isVisible": true,
        "skin": "CopyslLabel0be1990ab49264b",
        "text": "Default Groups",
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
    var flxDivider = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": 0,
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "flxDivider",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0e73b04ee100448",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flxDivider.setDefaultUnit(kony.flex.DP);
    flxDivider.add();
    flxDefault.add(lblDefault, flxDivider);
    var flxDefaultContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "42%",
        "id": "flxDefaultContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "6%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDefaultContainer.setDefaultUnit(kony.flex.DP);
    var flxCustomer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flxCustomer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "15%",
        "skin": "CopyslFbox0be83cf7ed3ae40",
        "top": "5%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    flxCustomer.setDefaultUnit(kony.flex.DP);
    var CopyimgCustom0c7f34d8d2ce541 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "25%",
        "height": "50%",
        "id": "CopyimgCustom0c7f34d8d2ce541",
        "isVisible": true,
        "skin": "slImage",
        "src": "customer.png",
        "width": "70%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblCustom0ca79cf9a627546 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "60%",
        "id": "CopylblCustom0ca79cf9a627546",
        "isVisible": true,
        "skin": "CopyslLabel0gd8d020e14a844",
        "text": "Customer",
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
    var CopylblCustomM0ef98e4e3db9548 = new kony.ui.Label({
        "bottom": "10%",
        "centerX": "50%",
        "id": "CopylblCustomM0ef98e4e3db9548",
        "isVisible": true,
        "skin": "CopyslLabel0jf052f1301c548",
        "text": "33 members",
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
    flxCustomer.add(CopyimgCustom0c7f34d8d2ce541, CopylblCustom0ca79cf9a627546, CopylblCustomM0ef98e4e3db9548);
    var flxProspect = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flxProspect",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "15%",
        "skin": "CopyslFbox0be83cf7ed3ae40",
        "top": "5%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    flxProspect.setDefaultUnit(kony.flex.DP);
    var CopyimgCustom0cbf6522baf7444 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "25%",
        "height": "50%",
        "id": "CopyimgCustom0cbf6522baf7444",
        "isVisible": true,
        "skin": "slImage",
        "src": "prospect.png",
        "width": "70%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblCustom0f6e7d2dd94eb47 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "60%",
        "id": "CopylblCustom0f6e7d2dd94eb47",
        "isVisible": true,
        "skin": "CopyslLabel0gd8d020e14a844",
        "text": "Prospect",
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
    var CopylblCustomM0d62488c58d9448 = new kony.ui.Label({
        "bottom": "10%",
        "centerX": "50%",
        "id": "CopylblCustomM0d62488c58d9448",
        "isVisible": true,
        "skin": "CopyslLabel0jf052f1301c548",
        "text": "12 members",
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
    flxProspect.add(CopyimgCustom0cbf6522baf7444, CopylblCustom0f6e7d2dd94eb47, CopylblCustomM0d62488c58d9448);
    var flxProspectCustomer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flxProspectCustomer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "15%",
        "skin": "CopyslFbox0be83cf7ed3ae40",
        "top": "56%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    flxProspectCustomer.setDefaultUnit(kony.flex.DP);
    var CopyimgCustom0j9da13ad79b249 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "20%",
        "height": "50%",
        "id": "CopyimgCustom0j9da13ad79b249",
        "isVisible": true,
        "skin": "slImage",
        "src": "customerprospect.png",
        "width": "70%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblCustom0bd77b7a73db845 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "60%",
        "id": "CopylblCustom0bd77b7a73db845",
        "isVisible": true,
        "skin": "CopyslLabel0gd8d020e14a844",
        "text": "Customer & Prospect",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylblCustomM0e91abde7b8b74e = new kony.ui.Label({
        "bottom": "10%",
        "centerX": "50%",
        "id": "CopylblCustomM0e91abde7b8b74e",
        "isVisible": true,
        "skin": "CopyslLabel0jf052f1301c548",
        "text": "7 members",
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
    flxProspectCustomer.add(CopyimgCustom0j9da13ad79b249, CopylblCustom0bd77b7a73db845, CopylblCustomM0e91abde7b8b74e);
    var flxABO = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flxABO",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "15%",
        "skin": "CopyslFbox0be83cf7ed3ae40",
        "top": "56%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    flxABO.setDefaultUnit(kony.flex.DP);
    var CopyimgCustom0fbfc476eb3704e = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "25%",
        "height": "50%",
        "id": "CopyimgCustom0fbfc476eb3704e",
        "isVisible": true,
        "skin": "slImage",
        "src": "abo.png",
        "width": "70%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblCustom0bd4b9746d0864c = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "60%",
        "id": "CopylblCustom0bd4b9746d0864c",
        "isVisible": true,
        "skin": "CopyslLabel0gd8d020e14a844",
        "text": "ABO",
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
    var CopylblCustomM0i58624fe54f94d = new kony.ui.Label({
        "bottom": "10%",
        "centerX": "50%",
        "id": "CopylblCustomM0i58624fe54f94d",
        "isVisible": true,
        "skin": "CopyslLabel0jf052f1301c548",
        "text": "2 members",
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
    flxABO.add(CopyimgCustom0fbfc476eb3704e, CopylblCustom0bd4b9746d0864c, CopylblCustomM0i58624fe54f94d);
    var FlexContainer0a9aec2a7f85f4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "FlexContainer0a9aec2a7f85f4d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50%",
        "skin": "CopyslFbox0a33c747858304b",
        "top": "12%",
        "width": "1dp",
        "zIndex": 1
    }, {}, {});
    FlexContainer0a9aec2a7f85f4d.setDefaultUnit(kony.flex.DP);
    FlexContainer0a9aec2a7f85f4d.add();
    var CopyFlexContainer0f4ba01a6261f49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "CopyFlexContainer0f4ba01a6261f49",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50%",
        "skin": "CopyslFbox0a33c747858304b",
        "top": "60%",
        "width": "1dp",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0f4ba01a6261f49.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer0f4ba01a6261f49.add();
    var CopyFlexContainer0h88ecf1c85784a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "CopyFlexContainer0h88ecf1c85784a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "19%",
        "skin": "CopyslFbox0a33c747858304b",
        "top": "50.50%",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0h88ecf1c85784a.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer0h88ecf1c85784a.add();
    var CopyFlexContainer0ed80f5c9b6274f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "CopyFlexContainer0ed80f5c9b6274f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "19%",
        "skin": "CopyslFbox0a33c747858304b",
        "top": "50.50%",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0ed80f5c9b6274f.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer0ed80f5c9b6274f.add();
    flxDefaultContainer.add(flxCustomer, flxProspect, flxProspectCustomer, flxABO, FlexContainer0a9aec2a7f85f4d, CopyFlexContainer0f4ba01a6261f49, CopyFlexContainer0h88ecf1c85784a, CopyFlexContainer0ed80f5c9b6274f);
    var flxCustom = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "flxCustom",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "48%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxCustom.setDefaultUnit(kony.flex.DP);
    var lblCustom = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblCustom",
        "isVisible": true,
        "skin": "CopyslLabel0be1990ab49264b",
        "text": "Custom Groups",
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
    var flxDivider1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": 0,
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "flxDivider1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0e73b04ee100448",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flxDivider1.setDefaultUnit(kony.flex.DP);
    flxDivider1.add();
    var Label0ce1f665421f345 = new kony.ui.Label({
        "centerY": "50%",
        "id": "Label0ce1f665421f345",
        "isVisible": true,
        "left": "45%",
        "skin": "CopyslLabel0ea71d033d2eb44",
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
    flxCustom.add(lblCustom, flxDivider1, Label0ce1f665421f345);
    var flxCustomContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "42%",
        "id": "flxCustomContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "54%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxCustomContainer.setDefaultUnit(kony.flex.DP);
    var flxCustom1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "40%",
        "id": "flxCustom1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "15%",
        "skin": "CopyslFbox0be83cf7ed3ae40",
        "top": "5%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    flxCustom1.setDefaultUnit(kony.flex.DP);
    var imgCustom1 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "25%",
        "height": "50%",
        "id": "imgCustom1",
        "isVisible": true,
        "skin": "slImage",
        "src": "grp3.png",
        "width": "70%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblCustom1 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "60%",
        "id": "lblCustom1",
        "isVisible": true,
        "skin": "CopyslLabel0gd8d020e14a844",
        "text": "Custom 1",
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
    var lblCustomM1 = new kony.ui.Label({
        "bottom": "10%",
        "centerX": "50%",
        "id": "lblCustomM1",
        "isVisible": true,
        "skin": "CopyslLabel0jf052f1301c548",
        "text": "3 members",
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
    var flxClose1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxClose1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "-5%",
        "skin": "CopyslFbox0a40da0db6c1f43",
        "top": "-5%",
        "width": "17%",
        "zIndex": 99
    }, {}, {});
    flxClose1.setDefaultUnit(kony.flex.DP);
    flxClose1.add();
    flxCustom1.add(imgCustom1, lblCustom1, lblCustomM1, flxClose1);
    var flxCustom2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "40%",
        "id": "flxCustom2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "53%",
        "skin": "CopyslFbox0be83cf7ed3ae40",
        "top": "5%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    flxCustom2.setDefaultUnit(kony.flex.DP);
    var imgCustom2 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "25%",
        "height": "50%",
        "id": "imgCustom2",
        "isVisible": true,
        "skin": "slImage",
        "src": "grp7.png",
        "width": "70%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblCustom2 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "60%",
        "id": "lblCustom2",
        "isVisible": true,
        "skin": "CopyslLabel0gd8d020e14a844",
        "text": "Custom 2",
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
    var lblCustomM2 = new kony.ui.Label({
        "bottom": "10%",
        "centerX": "50%",
        "id": "lblCustomM2",
        "isVisible": true,
        "skin": "CopyslLabel0jf052f1301c548",
        "text": "22 members",
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
    var flxClose2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxClose2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "-6%",
        "skin": "CopyslFbox0a40da0db6c1f43",
        "top": "-6%",
        "width": "17%",
        "zIndex": 99
    }, {}, {});
    flxClose2.setDefaultUnit(kony.flex.DP);
    flxClose2.add();
    flxCustom2.add(imgCustom2, lblCustom2, lblCustomM2, flxClose2);
    var flxCustom3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "40%",
        "id": "flxCustom3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "15%",
        "skin": "CopyslFbox0be83cf7ed3ae40",
        "top": "56%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    flxCustom3.setDefaultUnit(kony.flex.DP);
    var imgCustom3 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "20%",
        "height": "50%",
        "id": "imgCustom3",
        "isVisible": true,
        "skin": "slImage",
        "src": "grp5.png",
        "width": "70%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblCustom3 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "60%",
        "id": "lblCustom3",
        "isVisible": true,
        "skin": "CopyslLabel0gd8d020e14a844",
        "text": "Custom3",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblCustomM3 = new kony.ui.Label({
        "bottom": "10%",
        "centerX": "50%",
        "id": "lblCustomM3",
        "isVisible": true,
        "skin": "CopyslLabel0jf052f1301c548",
        "text": "7 members",
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
    var flxClose3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxClose3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "-5%",
        "skin": "CopyslFbox0a40da0db6c1f43",
        "top": "-5%",
        "width": "17%",
        "zIndex": 99
    }, {}, {});
    flxClose3.setDefaultUnit(kony.flex.DP);
    flxClose3.add();
    flxCustom3.add(imgCustom3, lblCustom3, lblCustomM3, flxClose3);
    var flxCustom4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "40%",
        "id": "flxCustom4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "53%",
        "skin": "CopyslFbox0be83cf7ed3ae40",
        "top": "56%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    flxCustom4.setDefaultUnit(kony.flex.DP);
    var imgCustom4 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "25%",
        "height": "50%",
        "id": "imgCustom4",
        "isVisible": true,
        "skin": "slImage",
        "src": "grp6.png",
        "width": "70%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblCustom4 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "60%",
        "id": "lblCustom4",
        "isVisible": true,
        "skin": "CopyslLabel0gd8d020e14a844",
        "text": "Custom 4",
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
    var lblCustomM4 = new kony.ui.Label({
        "bottom": "10%",
        "centerX": "50%",
        "id": "lblCustomM4",
        "isVisible": true,
        "skin": "CopyslLabel0jf052f1301c548",
        "text": "19 members",
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
    var flxClose4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxClose4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "-5%",
        "skin": "CopyslFbox0a40da0db6c1f43",
        "top": "-5%",
        "width": "17%",
        "zIndex": 99
    }, {}, {});
    flxClose4.setDefaultUnit(kony.flex.DP);
    flxClose4.add();
    flxCustom4.add(imgCustom4, lblCustom4, lblCustomM4, flxClose4);
    flxCustomContainer.add(flxCustom1, flxCustom2, flxCustom3, flxCustom4);
    flxGroups.add(flxDefault, flxDefaultContainer, flxCustom, flxCustomContainer);
    var flxTopbar1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "flxTopbar1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0c6c432a1bc5b4d",
        "top": "-10dp",
        "width": "100%",
        "zIndex": 5
    }, {}, {});
    flxTopbar1.setDefaultUnit(kony.flex.DP);
    var Image0c4a5c191816545 = new kony.ui.Image2({
        "centerX": "51%",
        "centerY": "60%",
        "height": "42dp",
        "id": "Image0c4a5c191816545",
        "isVisible": true,
        "skin": "slImage",
        "src": "amway.jpg",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxTopbar1.add(Image0c4a5c191816545);
    frmGroups.add(flxNavbar, flxTopbar, flxGroups, flxTopbar1);
};

function frmGroupsGlobals() {
    frmGroups = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmGroups,
        "enabledForIdleTimeout": false,
        "id": "frmGroups",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_a102526ec2ab4c20ad50973344c42e1d,
        "skin": "CopyslForm0j8ade75101694c"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};