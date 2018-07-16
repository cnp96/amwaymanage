function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var flxHome = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxHome",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0hc7630cf447440",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHome.setDefaultUnit(kony.flex.DP);
    var flxContents = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bottom": "140dp",
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "0dp",
        "horizontalScrollIndicator": true,
        "id": "flxContents",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "pagingEnabled": false,
        "right": "10dp",
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFbox0f2b70bf6db3841",
        "verticalScrollIndicator": true,
        "width": "0%",
        "zIndex": 7
    }, {}, {});
    flxContents.setDefaultUnit(kony.flex.DP);
    var segment = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "img": "imagedrag.png",
            "lblName": "Manage Group"
        }, {
            "img": "imagedrag.png",
            "lblName": "Add To Group"
        }, {
            "img": "imagedrag.png",
            "lblName": "Create New Group"
        }, {
            "img": "imagedrag.png",
            "lblName": "Filters"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segment",
        "isVisible": false,
        "needPageIndicator": true,
        "onRowClick": AS_Segment_a197217f368048129ad7335f6d8624f4,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxBody,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxBody": "flxBody",
            "flxCard": "flxCard",
            "img": "img",
            "lblName": "lblName"
        },
        "zIndex": 5
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var checkBox = new kony.ui.CheckBoxGroup({
        "centerX": "53%",
        "id": "checkBox",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["cbg1", "Hot Prospects"],
            ["cbg2", "Customer"],
            ["cbg3", "ABOs"],
            ["Key658", "Business Prospects"],
            ["Key868", "No Follow-up"],
            ["Key252", "Value"],
            ["Key477", "Value"],
            ["Key152", "Value"],
            ["Key852", "Value"],
            ["Key543", "Value"],
            ["Key575", "Value"]
        ],
        "onSelection": AS_CheckBoxGroup_be4dfb3e10ba444ca3c3e9d5ddc2aaad,
        "selectedKeyValues": [
            ["cbg2", "Customer"]
        ],
        "selectedKeys": ["cbg2"],
        "skin": "CopyslCheckBoxGroup0fe610d770dcc47",
        "top": "55dp",
        "width": "97%",
        "zIndex": 5
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxContents.add(segment, checkBox);
    var flxAction = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "375dp",
        "clipBounds": true,
        "height": "50dp",
        "id": "flxAction",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "right": "10dp",
        "skin": "CopyslFbox0if9fbfff46884a",
        "width": "62%",
        "zIndex": 7
    }, {}, {});
    flxAction.setDefaultUnit(kony.flex.DP);
    var btnBack = new kony.ui.Button({
        "centerY": "50%",
        "height": "24dp",
        "id": "btnBack",
        "isVisible": true,
        "left": "11dp",
        "onClick": AS_Button_fe8d01ca47e44efa88d87c7a106fd7e1,
        "skin": "CopyslButtonGlossBlue0g58f90938ae944",
        "top": "0dp",
        "width": "24dp",
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnClear = new kony.ui.Button({
        "centerY": "50%",
        "height": "28dp",
        "id": "btnClear",
        "isVisible": true,
        "onClick": AS_Button_h3ef1e203a694fd88b67c008ed1ed8d2,
        "right": "27%",
        "skin": "CopyslButtonGlossBlue0g4eb4c43506d42",
        "text": "Tap To Select",
        "top": "0dp",
        "width": "120dp",
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnApply = new kony.ui.Button({
        "centerY": "50%",
        "id": "btnApply",
        "isVisible": true,
        "onClick": AS_Button_f28cf2563e22428aac8897fe9f9dc8c5,
        "right": "7%",
        "skin": "CopyslButtonGlossBlue0a34091d09b644c",
        "text": "Apply",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxAction.add(btnBack, btnClear, btnApply);
    var helpOverlay = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "helpOverlay",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_c69a3f474d48446e8d63f3851bdb0c2f,
        "skin": "CopyslFbox0f17d4b9a12e646",
        "top": "0dp",
        "width": "100%",
        "zIndex": 6
    }, {}, {});
    helpOverlay.setDefaultUnit(kony.flex.DP);
    helpOverlay.add();
    var btn = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "70dp",
        "clipBounds": true,
        "height": "45dp",
        "id": "btn",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "10dp",
        "skin": "CopyslFbox0c70e987b36b440",
        "width": "45dp",
        "zIndex": 5
    }, {}, {});
    btn.setDefaultUnit(kony.flex.DP);
    var imgPlus = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "32dp",
        "id": "imgPlus",
        "isVisible": true,
        "skin": "slImage",
        "src": "plus.png",
        "width": "32dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    btn.add(imgPlus);
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
        "onTouchStart": AS_FlexContainer_ie96dcc4713e417ab537404e8527396e,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flxItem1.setDefaultUnit(kony.flex.DP);
    var imgItem1 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "37%",
        "height": "26dp",
        "id": "imgItem1",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "home_active.png",
        "width": "26dp",
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
        "isVisible": true,
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
        "onTouchStart": AS_FlexContainer_b685bae76f5849b8a63ad94a85ee489e,
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
        "onTouchStart": AS_FlexContainer_gc97c95e4e5d4b5491090176aec5bbbe,
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
        "onTouchStart": AS_FlexContainer_afc4693b44704b67bb557640c56c8512,
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
    var flxDashboard = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "50dp",
        "clipBounds": true,
        "id": "flxDashboard",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "50dp",
        "width": "100%",
        "zIndex": 5
    }, {}, {});
    flxDashboard.setDefaultUnit(kony.flex.DP);
    var flxDashboardAction = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxDashboardAction",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDashboardAction.setDefaultUnit(kony.flex.DP);
    var flxActionLabel = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxActionLabel",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%",
        "zIndex": 1
    }, {}, {});
    flxActionLabel.setDefaultUnit(kony.flex.DP);
    var lblActionLabel = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblActionLabel",
        "isVisible": true,
        "skin": "CopyslLabel0c7d2f03241af47",
        "text": "All Contacts",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxActionLabel.add(lblActionLabel);
    var flxActionContext = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxActionContext",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%",
        "zIndex": 1
    }, {}, {});
    flxActionContext.setDefaultUnit(kony.flex.DP);
    var flxCancel = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxCancel",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "20%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    flxCancel.setDefaultUnit(kony.flex.DP);
    var lblCancel = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblCancel",
        "isVisible": true,
        "skin": "CopyslLabel0e1e207fc571d46",
        "text": "Cancel",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxCancel.add(lblCancel);
    var flxApply = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxApply",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "60%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    flxApply.setDefaultUnit(kony.flex.DP);
    var CopylblCancel0bb7d94a550ea4f = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopylblCancel0bb7d94a550ea4f",
        "isVisible": true,
        "skin": "CopyslLabel0e97691f6de6845",
        "text": "Apply",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxApply.add(CopylblCancel0bb7d94a550ea4f);
    flxActionContext.add(flxCancel, flxApply);
    flxDashboardAction.add(flxActionLabel, flxActionContext);
    var flxSelectAll = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "flxSelectAll",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "50dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSelectAll.setDefaultUnit(kony.flex.DP);
    var imgSelectAll = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imgSelectAll",
        "isVisible": true,
        "left": "12dp",
        "skin": "slImage",
        "src": "checkbox_inactive.png",
        "top": "0dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSelectAll = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblSelectAll",
        "isVisible": true,
        "left": "50dp",
        "skin": "CopyslLabel0af23c7b06c374c",
        "text": "Select All",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxSelectAll.add(imgSelectAll, lblSelectAll);
    var flxDashboardContent = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bottom": "0dp",
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "horizontalScrollIndicator": true,
        "id": "flxDashboardContent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox0ed6622dccb3f47",
        "top": "50dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDashboardContent.setDefaultUnit(kony.flex.DP);
    var flxContactRow1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "110dp",
        "id": "flxContactRow1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0d5613a0c1e734c",
        "top": "0",
        "width": "100%"
    }, {}, {});
    flxContactRow1.setDefaultUnit(kony.flex.DP);
    var flxSelection1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "95%",
        "id": "flxSelection1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50dp",
        "zIndex": 1
    }, {}, {});
    flxSelection1.setDefaultUnit(kony.flex.DP);
    var imgSelection1 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "25dp",
        "id": "imgSelection1",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "checkbox_active.png",
        "top": "0dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSelection1.add(imgSelection1);
    var flxContactCard1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "95%",
        "id": "flxContactCard1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0c424129ebd2b42",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContactCard1.setDefaultUnit(kony.flex.DP);
    var flxImageContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxImageContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ec5c9828b10e46",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flxImageContainer.setDefaultUnit(kony.flex.DP);
    var flxImage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "50dp",
        "id": "flxImage",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0ec5c9828b10e46",
        "top": "10%",
        "width": "50dp",
        "zIndex": 1
    }, {}, {});
    flxImage.setDefaultUnit(kony.flex.DP);
    var imgUser = new kony.ui.Image2({
        "height": "100%",
        "id": "imgUser",
        "isVisible": true,
        "skin": "slImage0fb1e0c639dbc4b",
        "src": "dummy.jpg",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxImage.add(imgUser);
    flxImageContainer.add(flxImage);
    var flxUser = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "flxUser",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "20%",
        "skin": "slFbox0d4c6632660e34a",
        "width": "60%",
        "zIndex": 1
    }, {}, {});
    flxUser.setDefaultUnit(kony.flex.DP);
    var flxUsername = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxUsername",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox0d4c6632660e34a",
        "top": "7%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxUsername.setDefaultUnit(kony.flex.DP);
    var lblUsername = new kony.ui.Label({
        "centerY": "43.78%",
        "id": "lblUsername",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0c7589cb3e79245",
        "text": "John Doe",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxUsername.add(lblUsername);
    var flxMobile = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxMobile",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox0d4c6632660e34a",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMobile.setDefaultUnit(kony.flex.DP);
    var lblMobile = new kony.ui.Label({
        "centerY": "43.78%",
        "id": "lblMobile",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0d12fc599b48242",
        "text": "869-995-8048",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMobile.add(lblMobile);
    var flxReminder = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxReminder",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox0d4c6632660e34a",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxReminder.setDefaultUnit(kony.flex.DP);
    var lblReminder = new kony.ui.Label({
        "centerY": "43.78%",
        "id": "lblReminder",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0ha910e7e6b4d46",
        "text": "3rd July, Thurday 3PM",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxReminder.add(lblReminder);
    flxUser.add(flxUsername, flxMobile, flxReminder);
    var flxUsertypeContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxUsertypeContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "80%",
        "skin": "slFbox0d4c6632660e34a",
        "top": "0%",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flxUsertypeContainer.setDefaultUnit(kony.flex.DP);
    var flxUsertype = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50.00%",
        "centerY": "72%",
        "clipBounds": true,
        "height": "28dp",
        "id": "flxUsertype",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox0d4c6632660e34a",
        "width": "28dp",
        "zIndex": 1
    }, {}, {});
    flxUsertype.setDefaultUnit(kony.flex.DP);
    var imgUsertype = new kony.ui.Image2({
        "height": "100%",
        "id": "imgUsertype",
        "imageWhenFailed": "cardprospect.png",
        "imageWhileDownloading": "cardprospect.png",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage0fb1e0c639dbc4b",
        "src": "cardbrown.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxUsertype.add(imgUsertype);
    flxUsertypeContainer.add(flxUsertype);
    flxContactCard1.add(flxImageContainer, flxUser, flxUsertypeContainer);
    var flxActions1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "95%",
        "id": "flxActions1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "right": "-120dp",
        "skin": "slFbox0d4c6632660e34a",
        "top": "0",
        "width": "120dp",
        "zIndex": 1
    }, {}, {});
    flxActions1.setDefaultUnit(kony.flex.DP);
    var flxAddNote = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxAddNote",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "CopyslFbox0eb0f60413b1c4b",
        "top": "0dp",
        "width": "60dp",
        "zIndex": 1
    }, {}, {});
    flxAddNote.setDefaultUnit(kony.flex.DP);
    var imgAddNote = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "28dp",
        "id": "imgAddNote",
        "imageWhenFailed": "addnote.png",
        "imageWhileDownloading": "addnote.png",
        "isVisible": true,
        "skin": "slImage0fb1e0c639dbc4b",
        "src": "addnote.png",
        "width": "28dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxAddNote.add(imgAddNote);
    var flxDelete = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxDelete",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0bccc9e1c7aa64b",
        "top": "0dp",
        "width": "60dp",
        "zIndex": 1
    }, {}, {});
    flxDelete.setDefaultUnit(kony.flex.DP);
    var imgDelete = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "28dp",
        "id": "imgDelete",
        "imageWhenFailed": "delete.png",
        "imageWhileDownloading": "delete.png",
        "isVisible": true,
        "skin": "slImage0fb1e0c639dbc4b",
        "src": "delete.png",
        "width": "28dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDelete.add(imgDelete);
    flxActions1.add(flxAddNote, flxDelete);
    flxContactRow1.add(flxSelection1, flxContactCard1, flxActions1);
    var flxContactRow2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "110dp",
        "id": "flxContactRow2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "skin": "CopyslFbox0d5613a0c1e734c",
        "top": 0,
        "width": "100%"
    }, {}, {});
    flxContactRow2.setDefaultUnit(kony.flex.DP);
    var flxSelection2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "95%",
        "id": "flxSelection2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50dp",
        "zIndex": 1
    }, {}, {});
    flxSelection2.setDefaultUnit(kony.flex.DP);
    var imgSelection2 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "25dp",
        "id": "imgSelection2",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "checkbox_inactive.png",
        "top": "0dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSelection2.add(imgSelection2);
    var flxContactCard2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "95%",
        "id": "flxContactCard2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0c424129ebd2b42",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContactCard2.setDefaultUnit(kony.flex.DP);
    var flxImageContainer2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxImageContainer2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ec5c9828b10e46",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flxImageContainer2.setDefaultUnit(kony.flex.DP);
    var flxImage2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "50dp",
        "id": "flxImage2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0ec5c9828b10e46",
        "top": "10%",
        "width": "50dp",
        "zIndex": 1
    }, {}, {});
    flxImage2.setDefaultUnit(kony.flex.DP);
    var imgUser2 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgUser2",
        "isVisible": true,
        "skin": "slImage0fb1e0c639dbc4b",
        "src": "dummy.jpg",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxImage2.add(imgUser2);
    flxImageContainer2.add(flxImage2);
    var flxUser2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "flxUser2",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "20%",
        "skin": "slFbox0d4c6632660e34a",
        "width": "60%",
        "zIndex": 1
    }, {}, {});
    flxUser2.setDefaultUnit(kony.flex.DP);
    var flxUsername2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxUsername2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox0d4c6632660e34a",
        "top": "7%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxUsername2.setDefaultUnit(kony.flex.DP);
    var CopylblUsername0ca03f8070bdb40 = new kony.ui.Label({
        "centerY": "43.78%",
        "id": "CopylblUsername0ca03f8070bdb40",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0c7589cb3e79245",
        "text": "John Doe",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxUsername2.add(CopylblUsername0ca03f8070bdb40);
    var flxMobile2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxMobile2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox0d4c6632660e34a",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMobile2.setDefaultUnit(kony.flex.DP);
    var CopylblMobile0a7331d095b074d = new kony.ui.Label({
        "centerY": "43.78%",
        "id": "CopylblMobile0a7331d095b074d",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0d12fc599b48242",
        "text": "869-995-8048",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMobile2.add(CopylblMobile0a7331d095b074d);
    var flxReminder2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxReminder2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox0d4c6632660e34a",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxReminder2.setDefaultUnit(kony.flex.DP);
    var CopylblReminder0d22996be1ea14d = new kony.ui.Label({
        "centerY": "43.78%",
        "id": "CopylblReminder0d22996be1ea14d",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0ha910e7e6b4d46",
        "text": "3rd July, Thurday 3PM",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxReminder2.add(CopylblReminder0d22996be1ea14d);
    flxUser2.add(flxUsername2, flxMobile2, flxReminder2);
    var flxUsertypeContainer2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxUsertypeContainer2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "80%",
        "skin": "slFbox0d4c6632660e34a",
        "top": "0%",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flxUsertypeContainer2.setDefaultUnit(kony.flex.DP);
    var CopyflxUsertype0bed2e25e9d7145 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50.00%",
        "centerY": "72%",
        "clipBounds": true,
        "height": "28dp",
        "id": "CopyflxUsertype0bed2e25e9d7145",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox0d4c6632660e34a",
        "width": "28dp",
        "zIndex": 1
    }, {}, {});
    CopyflxUsertype0bed2e25e9d7145.setDefaultUnit(kony.flex.DP);
    var CopyimgUsertype0g5edb441900547 = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyimgUsertype0g5edb441900547",
        "imageWhenFailed": "cardprospect.png",
        "imageWhileDownloading": "cardprospect.png",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage0fb1e0c639dbc4b",
        "src": "cardbrown.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyflxUsertype0bed2e25e9d7145.add(CopyimgUsertype0g5edb441900547);
    flxUsertypeContainer2.add(CopyflxUsertype0bed2e25e9d7145);
    flxContactCard2.add(flxImageContainer2, flxUser2, flxUsertypeContainer2);
    var flxActions2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "95%",
        "id": "flxActions2",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "right": "-120dp",
        "skin": "slFbox0d4c6632660e34a",
        "top": "0",
        "width": "120dp",
        "zIndex": 1
    }, {}, {});
    flxActions2.setDefaultUnit(kony.flex.DP);
    var flxAddNote2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxAddNote2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "CopyslFbox0eb0f60413b1c4b",
        "top": "0dp",
        "width": "60dp",
        "zIndex": 1
    }, {}, {});
    flxAddNote2.setDefaultUnit(kony.flex.DP);
    var imgAddNote2 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "28dp",
        "id": "imgAddNote2",
        "imageWhenFailed": "addnote.png",
        "imageWhileDownloading": "addnote.png",
        "isVisible": true,
        "skin": "slImage0fb1e0c639dbc4b",
        "src": "addnote.png",
        "width": "28dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxAddNote2.add(imgAddNote2);
    var flxDelete2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxDelete2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "skin": "CopyslFbox0bccc9e1c7aa64b",
        "top": "0dp",
        "width": "60dp",
        "zIndex": 1
    }, {}, {});
    flxDelete2.setDefaultUnit(kony.flex.DP);
    var imgDelete2 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "28dp",
        "id": "imgDelete2",
        "imageWhenFailed": "delete.png",
        "imageWhileDownloading": "delete.png",
        "isVisible": true,
        "skin": "slImage0fb1e0c639dbc4b",
        "src": "delete.png",
        "width": "28dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDelete2.add(imgDelete2);
    flxActions2.add(flxAddNote2, flxDelete2);
    flxContactRow2.add(flxSelection2, flxContactCard2, flxActions2);
    flxDashboardContent.add(flxContactRow1, flxContactRow2);
    flxDashboard.add(flxDashboardAction, flxSelectAll, flxDashboardContent);
    var mainOverlay = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "mainOverlay",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0e2eac75b16f647",
        "top": "0dp",
        "width": "100%",
        "zIndex": 7
    }, {}, {});
    mainOverlay.setDefaultUnit(kony.flex.DP);
    mainOverlay.add();
    var flxCreateNewGroup = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "27%",
        "id": "flxCreateNewGroup",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0fccf414c56f447",
        "top": "180dp",
        "width": "70%",
        "zIndex": 7
    }, {}, {});
    flxCreateNewGroup.setDefaultUnit(kony.flex.DP);
    var flxCreateNewGroupTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxCreateNewGroupTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxCreateNewGroupTitle.setDefaultUnit(kony.flex.DP);
    var lblCreateNewGroups = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblCreateNewGroups",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0dfed15a0832446",
        "text": "Create New Group",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxCreateNewGroupTitle.add(lblCreateNewGroups);
    var flxCNGWrapper = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "75%",
        "id": "flxCNGWrapper",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "25%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxCNGWrapper.setDefaultUnit(kony.flex.DP);
    var flxCNGInputWrapper = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "40dp",
        "id": "flxCNGInputWrapper",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0f74465b665b84a",
        "top": "10%",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    flxCNGInputWrapper.setDefaultUnit(kony.flex.DP);
    var Image0e85fcd768d5c46 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "22dp",
        "id": "Image0e85fcd768d5c46",
        "isVisible": true,
        "left": "1%",
        "skin": "slImage",
        "src": "group_inactive.png",
        "top": "0dp",
        "width": "22dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer0ffccc04092b545 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "1dp",
        "id": "FlexContainer0ffccc04092b545",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0d200501bb1a44c",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0ffccc04092b545.setDefaultUnit(kony.flex.DP);
    FlexContainer0ffccc04092b545.add();
    var tbxNewGroup = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "focusSkin": "CopyslTextBox0daf7b7a1b2ec49",
        "height": "30dp",
        "id": "tbxNewGroup",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Enter Group Name",
        "right": "0%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0daf7b7a1b2ec49",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "width": "82%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "CopyslTextBox0d4361f1671ad4c",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxCNGInputWrapper.add(Image0e85fcd768d5c46, FlexContainer0ffccc04092b545, tbxNewGroup);
    var flxCNGActions = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "11%",
        "clipBounds": true,
        "height": "40dp",
        "id": "flxCNGActions",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "right": "6%",
        "skin": "slFbox",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxCNGActions.setDefaultUnit(kony.flex.DP);
    var cancelGroup = new kony.ui.Button({
        "centerX": "32%",
        "centerY": "50%",
        "id": "cancelGroup",
        "isVisible": true,
        "left": "10%",
        "onClick": AS_Button_db90797a5a244c84a221867952dad79c,
        "skin": "CopyslButtonGlossBlue0g4eb4c43506d42",
        "text": "Cancel",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var saveGroup = new kony.ui.Button({
        "centerY": "50%",
        "id": "saveGroup",
        "isVisible": true,
        "left": "15%",
        "onClick": AS_Button_ea960b2a706342f38eb97fe9e3efeae9,
        "skin": "CopyslButtonGlossBlue0a34091d09b644c",
        "text": "Apply",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxCNGActions.add(cancelGroup, saveGroup);
    var lblInvalidGroupName = new kony.ui.Label({
        "bottom": "43%",
        "id": "lblInvalidGroupName",
        "isVisible": false,
        "right": "15%",
        "skin": "CopyslLabel0a9cd7e10dcf24a",
        "text": "Enter group name",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxCNGWrapper.add(flxCNGInputWrapper, flxCNGActions, lblInvalidGroupName);
    flxCreateNewGroup.add(flxCreateNewGroupTitle, flxCNGWrapper);
    flxHome.add(flxContents, flxAction, helpOverlay, btn, flxNavbar, flxTopbar, flxDashboard, mainOverlay, flxCreateNewGroup);
    frmHome.add(flxHome);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "preShow": AS_Form_e13566d5be2b4204917127470c346f49,
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