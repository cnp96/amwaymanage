function profilePreshow() {
  frmProfile.flxItem1.onClick = function() { frmHome.show(); };
  frmProfile.flxItem2.onClick = function() { frmGroups.show(); };
  
  frmProfile.btnSaveProfile.onClick = saveContact;
  frmProfile.flxTypeName.onClick = showCheckbox;
  frmProfile.flxPopup.onClick = showCheckbox;
  frmProfile.segType.onRowClick = selectType;
}

function saveContact() {
  if(!(frmProfile.segType.selectedRowItems && frmProfile.segType.selectedRowItems[0]) ) { return; }
  var name = frmProfile.tbxName.text;
  var email = frmProfile.tbxEmail.text;
  var mobile = frmProfile.tbxMobile.text;
  var type = frmProfile.segType.selectedRowItems[0].lbltypelist;
  
  var data = {
    "imgUser": "option3.png",
    "imgUsertype": getUsertype(AllContacts.length+1),
    "lblMobile": mobile,
    "lblReminder": "No Follow Ups",
    "lblUsername": name
  };
  
  AllContacts.push(data);
  Groups[type].push(data);
  frmHome.show();
}

function showCheckbox() {
  frmProfile.flxPopup.isVisible = !frmProfile.flxPopup.isVisible;
}

function selectType() {
  frmProfile.lblTypeSel.text = frmProfile.segType.selectedRowItems[0].lbltypelist;  
  showCheckbox();  
}