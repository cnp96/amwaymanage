function homePreshow() {
  frmHome.btn.shadowDepth = 5;
  frmHome.btn.onClick = animation;
  frmHome.flxCancel.onClick = cancelSelection;
  frmHome.flxSelectAll.onClick = selectAll;
  frmHome.flxApply.onClick = applySelection;
  frmHome.flxContents.shadowDepth = 3;
  frmHome.flxAction.shadowDepth = 3;
  frmHome.flxNavbar.shadowDepth = 5;
  
  var data = [
    {img: "group.png", lblName: "Manage Groups"},
    {img: "addtogroup.png", lblName: "Add To Group"},
    {img: "createnewgroup.png", lblName: "Create New Group"},
    {img: "sort.png", lblName: "Filters"}
  ];
  frmHome.segment.setData(data);
  
  loadContacts();
  
}