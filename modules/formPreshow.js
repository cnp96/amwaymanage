function homePreshow() {
  frmHome.flxTopbar.shadowDepth = 4;
  frmHome.btn.shadowDepth = 5;
  frmHome.flxAddQuickNote.shadowDepth = 7;  
  frmHome.btnCancelQuickNote.onClick = dismissQuickNote;
  frmHome.btnAddQuickNote.onClick = saveQuickNote;
  
  frmHome.mainOverlay.shadowDepth = 6;
  frmHome.flxCreateNewGroup.shadowDepth = 7;
  frmHome.mainOverlay.onClick = function(){};//dismissCreateNewGroup;
  frmHome.flxCreateNewGroup.onTouchStart = function(){};
  frmHome.cancelGroup.onClick = dismissCreateNewGroup;
  frmHome.saveGroup.onClick = saveGroup;
  frmHome.tbxNewGroup.onTextChange = handleTextChange;
  
  frmHome.btn.onClick = animation;
  frmHome.flxCancel.onClick = cancelSelection;
  frmHome.flxSelectAll.onClick = selectAll;
  frmHome.flxApply.onClick = applySelection;
  frmHome.flxContents.shadowDepth = 3;
  frmHome.flxAction.shadowDepth = 3;
  frmHome.flxNavbar.shadowDepth = 5;
  frmHome.flxNotification.shadowDepth = 6;
  
  var data = [
    {img: "group.png", lblName: "Manage Groups"},
    {img: "addtogroup.png", lblName: "Add To Group"},
    {img: "createnewgroup.png", lblName: "Create New Group"},
    {img: "sort.png", lblName: "Filters"}
  ];
  frmHome.segment.setData(data);
  
  frmHome.flxItem2.onClick = function() {
    frmProfile.show();
  };
  
  
  /*var data = [{
    "imgUser": "dummy.jpg",
    "imgUsertype": "cardblue.png",
    "lblMobile": "869-995-8048",
    "lblReminder": "No Follow Ups",
    "lblUsername": "John Doe"
  }];*/
  frmHome.flxDashboardContent.removeAll();
  frmHome.flxNoContacts.isVisible = frmHome.flxDashboardContent.widgets().length === 0;
  for(var i=0; i<3; i++) {
    addContact();
  }
  
  loadContacts();
  
}

function addContact() {
  var id = frmHome.flxDashboardContent.widgets().length+1;
  var flxContactRow = new kony.ui.FlexContainer({
    "autogrowMode": kony.flex.AUTOGROW_NONE,
    "clipBounds": true,
    "height": "110dp",
    "id": "flxContactRow"+id,
    "isVisible": true,
    "layoutType": kony.flex.FREE_FORM,
    "left": "0dp",
    "skin": "CopyslFbox0d5613a0c1e734c",
    "top": "0",
    "width": "100%"
  }, {}, {});
  flxContactRow.setDefaultUnit(kony.flex.DP);
  var flxSelection = new kony.ui.FlexContainer({
    "autogrowMode": kony.flex.AUTOGROW_NONE,
    "clipBounds": true,
    "height": "95%",
    "id": "flxSelection"+id,
    "isVisible": true,
    "layoutType": kony.flex.FREE_FORM,
    "left": "0dp",
    "skin": "slFbox",
    "top": "0dp",
    "width": "50dp",
    "zIndex": 1
  }, {}, {});
  flxSelection.setDefaultUnit(kony.flex.DP);
  var imgSelection = new kony.ui.Image2({
    "centerX": "50%",
    "centerY": "50%",
    "height": "25dp",
    "id": "imgSelection"+id,
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
  flxSelection.add(imgSelection);
  var flxContactCard = new kony.ui.FlexContainer({
    "autogrowMode": kony.flex.AUTOGROW_NONE,
    "clipBounds": true,
    "height": "95%",
    "id": "flxContactCard"+id,
    "isVisible": true,
    "layoutType": kony.flex.FREE_FORM,
    "left": "0dp",
    "skin": "CopyslFbox0c424129ebd2b42",
    "top": 0,
    "width": "100%",
    "zIndex": 1
  }, {}, {});
  flxContactCard.setDefaultUnit(kony.flex.DP);
  var flxImageContainer = new kony.ui.FlexContainer({
    "autogrowMode": kony.flex.AUTOGROW_NONE,
    "clipBounds": true,
    "height": "100%",
    "id": "flxImageContainer"+id,
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
    "id": "flxImage"+id,
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
    "id": "imgUser"+id,
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
    "id": "flxUser"+id,
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
    "id": "flxUsername"+id,
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
    "id": "lblUsername"+id,
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
    "id": "flxMobile"+id,
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
    "id": "lblMobile"+id,
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
    "id": "flxReminder"+id,
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
    "id": "lblReminder"+id,
    "isVisible": true,
    "left": "0dp",
    "skin": "CopyslLabel0ha910e7e6b4d46",
    "text": "No Follow Ups",
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
    "id": "flxUsertypeContainer"+id,
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
    "id": "flxUsertype"+id,
    "isVisible": true,
    "layoutType": kony.flex.FREE_FORM,
    "skin": "slFbox0d4c6632660e34a",
    "width": "28dp",
    "zIndex": 1
  }, {}, {});
  flxUsertype.setDefaultUnit(kony.flex.DP);
  var imgUsertype = new kony.ui.Image2({
    "height": "100%",
    "id": "imgUsertype"+id,
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
  flxContactCard.add(flxImageContainer, flxUser, flxUsertypeContainer);
  var flxActions = new kony.ui.FlexContainer({
    "autogrowMode": kony.flex.AUTOGROW_NONE,
    "clipBounds": true,
    "height": "95%",
    "id": "flxActions"+id,
    "isVisible": true,
    "layoutType": kony.flex.FLOW_HORIZONTAL,
    "right": "-120dp",
    "skin": "slFbox0d4c6632660e34a",
    "top": "0",
    "width": "120dp",
    "zIndex": 1
  }, {}, {});
  flxActions.setDefaultUnit(kony.flex.DP);
  var flxAddNote = new kony.ui.FlexContainer({
    "autogrowMode": kony.flex.AUTOGROW_NONE,
    "centerY": "50%",
    "clipBounds": true,
    "height": "100%",
    "id": "flxAddNote"+id,
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
    "id": "imgAddNote"+id,
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
    "id": "flxDelete"+id,
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
    "id": "imgDelete"+id,
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
  flxActions.add(flxAddNote, flxDelete);
  flxContactRow.add(flxSelection, flxContactCard, flxActions);

  frmHome.flxDashboardContent.add(flxContactRow);
  frmHome.flxNoContacts.isVisible = false;
}
function deleteContact() {
  var card = "flxContactRow" + this.id.split("flxDelete")[1];
  //alert("Delete Card " +  card);
  animate(frmHome[card], {height: "0%"}, 0.2, function() {
    frmHome.flxDashboardContent.remove(frmHome[card]);
    frmHome.flxNoContacts.isVisible = frmHome.flxDashboardContent.widgets().length === 0;
  });
}

function addNote() {
  addNoteId = this.id.split("flxAddNote")[1];
  var card = "flxContactRow" + addNoteId;
  //alert("Add Note " +  card);
  frmHome.mainOverlay.opacity = 0;
  frmHome.mainOverlay.isVisible = true;
  animate(frmHome.mainOverlay, {opacity: 1}, 0.3);
  frmHome.flxAddQuickNote.width = "0%";
  frmHome.flxAddQuickNote.height = "0%";
  frmHome.flxAddQuickNote.isVisible = true;
  animate(frmHome.flxAddQuickNote, {height: "30%", width: "80%"}, 0.3, function(){
    frmHome.txtNote.setFocus(true);
  });
}
function saveQuickNote() {
  //alert("save note > " + frmHome.txtNote.text + " for " + addNoteId);
  dismissQuickNote();
  notify("Saved.");
}
function dismissQuickNote() {
  frmHome.txtNote.text = "";
  animate(frmHome.flxAddQuickNote, {height: "0%", width: "0%"}, 0.3, function(){this.isVisible = false;});
  animate(frmHome.mainOverlay, {opacity: 0}, 0.3, function(){ this.isVisible = false;});
}