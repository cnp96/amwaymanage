function addWidgetsfrmProfile() {
    frmProfile.setDefaultUnit(kony.flex.DP);
    var flxProfile = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxProfile",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxProfile.setDefaultUnit(kony.flex.DP);
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
        "left": "0dp",
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
        "centerY": "50%",
        "height": "24dp",
        "id": "imgItem2",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "group_inactive.png",
        "width": "24dp",
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
        "isVisible": false,
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
        "centerY": "37%",
        "height": "26dp",
        "id": "imgItem3",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "adduser_active.png",
        "width": "26dp",
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
        "isVisible": true,
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
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "50dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0ad93922bf5b34c",
        "top": "50dp",
        "width": "100%",
        "zIndex": 6
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var flxMainContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "83%",
        "id": "flxMainContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "11dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0ad93922bf5b34c",
        "top": "50dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMainContent.setDefaultUnit(kony.flex.DP);
    var flxProfileContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "96%",
        "id": "flxProfileContent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox0ea04b6822ad146",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxProfileContent.setDefaultUnit(kony.flex.DP);
    var flxProfPic = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "100dp",
        "id": "flxProfPic",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0b1cde46318a144",
        "top": "3%",
        "width": "100dp",
        "zIndex": 1
    }, {}, {});
    flxProfPic.setDefaultUnit(kony.flex.DP);
    var imgProfpic = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "imgProfpic",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage0f65941244a534b",
        "src": "prospect.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxProfPic.add(imgProfpic);
    var flxName = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flxName",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox0ad93922bf5b34c",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxName.setDefaultUnit(kony.flex.DP);
    var lblName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblName",
        "isVisible": true,
        "left": "2dp",
        "skin": "CopyslLabel0ecd393dfa84b4e",
        "text": "Name",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxuserName = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "flxuserName",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "7%",
        "skin": "slFbox0ad93922bf5b34c",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    flxuserName.setDefaultUnit(kony.flex.DP);
    var tbxName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknInpStr",
        "height": "96%",
        "id": "tbxName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Enter user name",
        "secureTextEntry": false,
        "skin": "sknInpStr",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "1dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "sknInpStrPlaceholder",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var flxLineName = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "2px",
        "id": "flxLineName",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ha9ec4d0340a4d",
        "top": "0dp",
        "width": "94%",
        "zIndex": 1
    }, {}, {});
    flxLineName.setDefaultUnit(kony.flex.DP);
    flxLineName.add();
    flxuserName.add(tbxName, flxLineName);
    flxName.add(lblName, flxuserName);
    var flxMobile = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flxMobile",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox0ad93922bf5b34c",
        "top": "2%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMobile.setDefaultUnit(kony.flex.DP);
    var lblMobile = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblMobile",
        "isVisible": true,
        "left": "2dp",
        "skin": "CopyslLabel0ecd393dfa84b4e",
        "text": "Mobile",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxMobileNo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "flxMobileNo",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "4.50%",
        "skin": "slFbox0ad93922bf5b34c",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    flxMobileNo.setDefaultUnit(kony.flex.DP);
    var tbxMobile = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknInpStr",
        "height": "96%",
        "id": "tbxMobile",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "maxTextLength": 10,
        "placeholder": "Enter user mobile",
        "secureTextEntry": false,
        "skin": "sknInpStr",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": "1dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "sknInpStrPlaceholder",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var flxMobileLine = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "2px",
        "id": "flxMobileLine",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ha9ec4d0340a4d",
        "top": "0dp",
        "width": "94%",
        "zIndex": 1
    }, {}, {});
    flxMobileLine.setDefaultUnit(kony.flex.DP);
    flxMobileLine.add();
    flxMobileNo.add(tbxMobile, flxMobileLine);
    flxMobile.add(lblMobile, flxMobileNo);
    var flxemail = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flxemail",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox0ad93922bf5b34c",
        "top": "2%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxemail.setDefaultUnit(kony.flex.DP);
    var lblEmail = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblEmail",
        "isVisible": true,
        "left": "2dp",
        "skin": "CopyslLabel0ecd393dfa84b4e",
        "text": "Email ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxEmailCO = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "flxEmailCO",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "7%",
        "skin": "slFbox0ad93922bf5b34c",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    flxEmailCO.setDefaultUnit(kony.flex.DP);
    var tbxEmail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknInpStr",
        "height": "96%",
        "id": "tbxEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
        "left": "0dp",
        "maxTextLength": 70,
        "placeholder": "Enter user email",
        "secureTextEntry": false,
        "skin": "sknInpStr",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "1dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "sknInpStrPlaceholder",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var flxEmailLine = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "2px",
        "id": "flxEmailLine",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ha9ec4d0340a4d",
        "top": "0dp",
        "width": "94%",
        "zIndex": 1
    }, {}, {});
    flxEmailLine.setDefaultUnit(kony.flex.DP);
    flxEmailLine.add();
    flxEmailCO.add(tbxEmail, flxEmailLine);
    flxemail.add(lblEmail, flxEmailCO);
    var flxType = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flxType",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox0ad93922bf5b34c",
        "top": "2%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxType.setDefaultUnit(kony.flex.DP);
    var lblType = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblType",
        "isVisible": true,
        "left": "2dp",
        "skin": "CopyslLabel0ecd393dfa84b4e",
        "text": "Type ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxTypeName = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "flxTypeName",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "9%",
        "skin": "slFbox0ad93922bf5b34c",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    flxTypeName.setDefaultUnit(kony.flex.DP);
    var lblTypeSel = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTypeSel",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0jb64bab09e9b43",
        "text": "Select a type",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "3dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxdropdown = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "24dp",
        "id": "flxdropdown",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": 0,
        "skin": "CopyslFbox0h11082f8d32749",
        "top": "7dp",
        "width": "24dp",
        "zIndex": 1
    }, {}, {});
    flxdropdown.setDefaultUnit(kony.flex.DP);
    flxdropdown.add();
    var flxTypeLine = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "2px",
        "id": "flxTypeLine",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ha9ec4d0340a4d",
        "top": "36dp",
        "width": "94%",
        "zIndex": 1
    }, {}, {});
    flxTypeLine.setDefaultUnit(kony.flex.DP);
    flxTypeLine.add();
    flxTypeName.add(lblTypeSel, flxdropdown, flxTypeLine);
    flxType.add(lblType, flxTypeName);
    var flxNotes = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "24%",
        "id": "flxNotes",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox0ad93922bf5b34c",
        "top": "1dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxNotes.setDefaultUnit(kony.flex.DP);
    var lblNotes = new kony.ui.Label({
        "id": "lblNotes",
        "isVisible": true,
        "left": "2dp",
        "skin": "CopyslLabel0ecd393dfa84b4e",
        "text": "Notes",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxNotesContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "flxNotesContent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "7%",
        "skin": "slFbox0ad93922bf5b34c",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    flxNotesContent.setDefaultUnit(kony.flex.DP);
    var txaContent = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "skbInpTxt",
        "height": "98%",
        "id": "txaContent",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "numberOfVisibleLines": 3,
        "placeholder": "Enter notes here",
        "skin": "skbInpTxt",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "98%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "placeholderSkin": "sknInpTxtPlaceholder"
    });
    var flxNotesLine = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "2px",
        "id": "flxNotesLine",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ha9ec4d0340a4d",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    flxNotesLine.setDefaultUnit(kony.flex.DP);
    flxNotesLine.add();
    flxNotesContent.add(txaContent, flxNotesLine);
    flxNotes.add(lblNotes, flxNotesContent);
    flxProfileContent.add(flxProfPic, flxName, flxMobile, flxemail, flxType, flxNotes);
    flxMainContent.add(flxProfileContent);
    var flxPopup = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxPopup",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "CopyslFbox0j9a500d589524b",
        "top": "0dp",
        "width": "100%",
        "zIndex": 10
    }, {}, {});
    flxPopup.setDefaultUnit(kony.flex.DP);
    var flxSegHolder = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "33%",
        "id": "flxSegHolder",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3dp",
        "skin": "CopyslFbox0c169ac74fc1b48",
        "top": "160dp",
        "width": "85%",
        "zIndex": 11
    }, {}, {});
    flxSegHolder.setDefaultUnit(kony.flex.DP);
    initializeflxSeglisttype && initializeflxSeglisttype();
    var segType = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "data": [
            [{
                    "lblHeader": "Select a type"
                },
                [{
                    "lbltypelist": "Abo"
                }, {
                    "lbltypelist": "Prospect"
                }, {
                    "lbltypelist": "Customer"
                }, {
                    "lbltypelist": "Customer & Prospect"
                }]
            ]
        ],
        "groupCells": false,
        "height": "100%",
        "id": "segType",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg0a8efea3eb0ad4d",
        "rowSkin": "seg0g9825645172547",
        "rowTemplate": flxSeglisttype,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader0de2931c728d64b",
        "sectionHeaderTemplate": flxMainHeader0b22cbf4aba2a4a,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "61616100",
        "separatorRequired": true,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxLineName": "flxLineName",
            "flxMainHeader": "flxMainHeader",
            "flxSeglisttype": "flxSeglisttype",
            "lblHeader": "lblHeader",
            "lbltypelist": "lbltypelist"
        },
        "width": "100%",
        "zIndex": 12
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSegHolder.add(segType);
    flxPopup.add(flxSegHolder);
    flxMain.add(flxMainContent, flxPopup);
    flxProfile.add(flxTopbar, flxNavbar, flxMain);
    frmProfile.add(flxProfile);
};

function frmProfileGlobals() {
    frmProfile = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmProfile,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "frmProfile",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_i106e5b892464d57992cc228e00e2b4f,
        "skin": "slForm"
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