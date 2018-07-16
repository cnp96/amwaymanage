var selectedGroupsData = [];
var selectedFiltersData = [];

// Utility functions
function animate( element, params, duration, callback, delay, count ){
  kony.print("[Parthu]Element in animate method::"+element);
  duration = duration || 0.25;
  callback = callback || null;
  delay = delay || 0;
  count = count || 1;
  params.stepConfig = {
    "timingFunction": kony.anim.EASE
  };
  element.animate(
    kony.ui.createAnimation({
      "100": params,
    }), {
      "delay": delay,
      "iterationCount": count,
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": duration
    }, {
      "animationEnd": callback
    });
}
function notify(msg) {
  frmHome.lblNotification.text = msg;
  frmHome.flxNotification.bottom = "-50dp";
  frmHome.flxNotification.isVisible = true;  
  animate(frmHome.flxNotification, {bottom: "0dp"}, 0.2, function() {
    animate(this, {bottom: "-50dp"}, 0.2, function(){
      this.isVisible = false;
    }, 1.5);
  });
}
function shake(element) {
  if(!element) return;
  animate(element, {centerX: "48%"}, 0.1);
  animate(element, {centerX: "52%"}, 0.1);
  animate(element, {centerX: "48%"}, 0.1);
  animate(element, {centerX: "52%"}, 0.1);
  animate(element, {centerX: "50%"}, 0.1);
}

function animation() {
  try { 
    frmHome.checkBox.isVisible = false;
    frmHome.flxAction.isVisible = false;
    frmHome.helpOverlay.isVisible = true;
    var trans = kony.ui.makeAffineTransform();
    trans.rotate(-179);
    animating = true;
    animate(frmHome.imgPlus, {
      "rectified": true,
      "transform": trans
    }, 0.35, function(){ animating = false; });
    animate(frmHome.flxContents, {
      "width": "62%",
      "height": "280dp"
    }, null, function() { frmHome.segment.isVisible = true; });
  }
  catch(e) {
    kony.print(e);
  }
}
function reset() {
  try {
    if(animating) return;
    frmHome.helpOverlay.isVisible = false;
    frmHome.flxAction.isVisible = false;    
    frmHome.segment.isVisible = false;
    frmHome.checkBox.isVisible = false;
    frmHome.flxContents.height = "0dp";
    frmHome.flxContents.width = "0dp";    
    
    var trans = kony.ui.makeAffineTransform();
    trans.rotate(0);
    
    animating = true;
    animate(frmHome.imgPlus, {
      "rectified": true,
      "transform": trans
    }, 0.35, function() { animating = false; });
  }
  catch(e) {
    kony.print(e);
  }
}

// Apply Filters
function applyFilters() {
  var data = [];
  try {
  if(frmHome.checkBox.selectedKeyValues)
    frmHome.checkBox.selectedKeyValues.forEach( (i => data.push(i[1])) );
  } catch(e) {} 
  frmHome.lblActionLabel.text = data.length>0 ? "Filtered Contacts" : "All Contacts";
  alert("Data > " + data.length);
}

// Multi Select
function showSelection(val) {
  toggleCounter = 0;
  var n = frmHome.flxDashboardContent.widgets().length + 1;
  var left = val ? "50dp" : "0dp";  
  for(var i=1; i<n; i++) {
    frmHome["flxContactCard"+i].left = left;
    frmHome["imgSelection"+i].src = "checkbox_inactive.png";
  }
  
  frmHome.btn.isVisible = !val;
  frmHome.lblActionLabel.text = val ? "Add To Groups" : "All Contacts";
  frmHome.flxActionContext.isVisible = val;
  frmHome.flxSelectAll.isVisible = val;
  frmHome.imgSelectAll.src = "checkbox_inactive.png";
  frmHome.flxDashboardContent.top = val ? "80dp" : "50dp";
}
function cancelSelection() {
  showSelection(false);
}
function applySelection() {
  var n = frmHome.flxDashboardContent.widgets().length + 1;
  var selectedContacts = 0;//[];
  for(var i=1; i<n; i++) {
    if(frmHome["imgSelection"+i].src == "checkbox_active.png") selectedContacts++;
  }
  var groups = [];
  frmHome.checkBox.selectedKeyValues.forEach( (i => groups.push(i[1])) );
  alert("Added " + selectedContacts + " contacts to " + groups);
  
  showSelection(false);
}
function toggleSelection(item) {
  var element = "imgSelection" + (item.id.substr(0,4) == "flxC" ? item.id.split("flxContactCard")[1] : this.id.split("flxSelection")[1]);
  //alert(element);  
  var img = frmHome[element].src == "checkbox_inactive.png" ? "checkbox_active.png" : "checkbox_inactive.png";
  frmHome[element].src = img;
  
  toggleCounter += img=="checkbox_inactive.png" ? -1 : 1;
  frmHome.imgSelectAll.src = toggleCounter == frmHome.flxDashboardContent.widgets().length ? "checkbox_active.png" : "checkbox_inactive.png";
}
function selectAll(){
  var n = frmHome.flxDashboardContent.widgets().length + 1;
  var img = frmHome.imgSelectAll.src=="checkbox_inactive.png" ? "checkbox_active.png" : "checkbox_inactive.png";
  toggleCounter = img=="checkbox_active.png" ? n-1 : 0;
  frmHome.imgSelectAll.src = img;
  for(var i=1; i<n; i++) {
    frmHome["imgSelection"+i].src = img;
  }
}

// Events
function onClickBack() {
//   frmHome.segment.isVisible = true;

//   frmHome.checkBox.isVisible = false;
//   frmHome.flxAction.isVisible = false;
//   frmHome.flxContents.height = "280dp";
  
  animate(frmHome.checkBox, {width: "0%"}, 0.3, function(){this.isVisible=false;});
  animate(frmHome.flxAction, {height: "0%"}, 0.3, function(){this.isVisible=false;});
  frmHome.segment.left = "-100%";
  frmHome.segment.isVisible = true;
  animate(frmHome.segment, {left: "0%"}, 0.45);
  
}
function onSegmentRowClick() {
  try {
    var selectedIndex = frmHome.segment.selectedRowIndex[1];
    if(selectedIndex === 0) {
      alert("To be implemented");
    }
    else if(selectedIndex === 1) {
      if(frmHome.flxDashboardContent.widgets().length === 0) {
        //alert("No contacts");        
        notify("No contacts to add.");
      }
      else onClickOfAddToGroup();
    }
    else if(selectedIndex === 2) {
      onClickOfCreateNewGroup();
    }
    else if(selectedIndex === 3) {
      onClickOffilters();
    }
  }
  catch(e) {
    kony.print(e);
  }
}
function onClickOfAddToGroup() {
  try
  {
    var masterData = [
      ["Key1","Prospects"],
      ["Key2","Customers"],
      ["Key3","Prospects and Customers"],
      ["Key4","ABOs"],
    ];
    frmHome.checkBox.masterData = masterData;
    //frmHome.flxAction.bottom = "288dp";
    //frmHome.flxContents.height = "150dp";
    frmHome.btnClear.text = selectedGroupsData.length > 0 ? "Clear Selections" : "Tap To Select";
    if(selectedGroupsData.length > 0)
      frmHome.checkBox.selectedKeys = selectedGroupsData;
    
    frmHome.flxAction.height = "0dp";
    frmHome.flxAction.isVisible = true;
    animate(frmHome.flxAction, {height: "35dp"}, 0.5);
    
    frmHome.segment.isVisible = false;
    
    frmHome.checkBox.width = "0%";
    frmHome.checkBox.isVisible = true;
    animate(frmHome.checkBox, {width: "97%"},0.5);
    
  }
  catch(e) {
    kony.print(e);
  }
}
function onClickOffilters() {
  try {
    var masterData = [
      ["Key1","Hot Prospects"],
      ["Key2","Customers"],
      ["Key3","ABOs"],
      ["Key4","Business Prospects"],
      ["Key5","No Follow-Ups"]
    ];
    frmHome.checkBox.masterData = masterData;
    frmHome.flxAction.isVisible = true;
    //frmHome.flxAction.bottom = "318dp";
    //frmHome.flxContents.height = "180dp";
    frmHome.btnClear.text = selectedFiltersData.length > 0 ? "Clear Selections" : "Tap To Select";
    
    if(selectedFiltersData.length > 0)
      frmHome.checkBox.selectedKeys = selectedFiltersData;
    
//     frmHome.segment.isVisible = false;
//     frmHome.checkBox.isVisible = true;    

    frmHome.flxAction.height = "0dp";
    frmHome.flxAction.isVisible = true;
    animate(frmHome.flxAction, {height: "35dp"}, 0.5);

    frmHome.segment.isVisible = false;

    frmHome.checkBox.width = "0%";
    frmHome.checkBox.isVisible = true;
    animate(frmHome.checkBox, {width: "97%"},0.5);

  }
  catch(e) {
    kony.print(e);
  }
}
function onClickClear() {
  try {
    frmHome.checkBox.selectedKeys=[];
    if(frmHome.segment.selectedRowIndex[1] == 1) {
      selectedGroupsData = [];
    }
    else if(frmHome.segment.selectedRowIndex[1] == 3) {
      selectedFiltersData = [];
    }
    frmHome.btnClear.text = "Tap To Select";
    applyFilters();
  }
  catch(e) {
    kony.print(e);
  }
}
function onClickApply() {
  try {
    reset();
    if(frmHome.segment.selectedRowIndex[1] == 1) {
      selectedGroupsData = frmHome.checkBox.selectedKeys || [];
    }
    else if(frmHome.segment.selectedRowIndex[1] == 3) {
      selectedFiltersData = frmHome.checkBox.selectedKeys || [];
    }

    var sel = [];
    if(frmHome.checkBox.selectedKeyValues)
      frmHome.checkBox.selectedKeyValues.forEach( (i => sel.push(i[1])) );

    if(frmHome.segment.selectedRowIndex[1] == 1) showSelection(sel.length > 0);
    else applyFilters();

  }
  catch(e) {
    kony.print(e);
  }
}
function onSelectionCheckBox() {
  try {
    frmHome.btnClear.text = frmHome.checkBox.selectedKeys ? frmHome.checkBox.selectedKeys.length > 0 ? "Clear Selections" : "Tap To Select" : "Tap To Select";
  }
  catch(e) {
    kony.print(e);
  }
}

function onClickOfCreateNewGroup() {
  reset();
  frmHome.mainOverlay.opacity = 0;
  frmHome.mainOverlay.isVisible = true;
  animate(frmHome.mainOverlay, {opacity: 1}, 0.5);
  frmHome.flxCreateNewGroup.width = "0%";
  frmHome.flxCreateNewGroup.height = "0%";
  frmHome.flxCreateNewGroup.isVisible = true;
  frmHome.lblInvalidGroupName.isVisible = false;
  animate(frmHome.flxCreateNewGroup, {height: "27%", width: "70%"}, 0.5, function(){
    frmHome.tbxNewGroup.setFocus(true);
  });
}
function dismissCreateNewGroup() {
  animate(frmHome.flxCreateNewGroup, {height: "0%", width: "0%"}, 0.5, function(){this.isVisible = false;});
  animate(frmHome.mainOverlay, {opacity: 0}, 0.5, function(){ this.isVisible = false;});
}
function saveGroup() {
  if(!frmHome.tbxNewGroup.text || frmHome.tbxNewGroup.text === "") {
    frmHome.lblInvalidGroupName.isVisible = true;
    shake(frmHome.flxCreateNewGroup);
    return;
  }
  frmHome.lblInvalidGroupName.isVisible = false;
  alert("create new group \"" + frmHome.tbxNewGroup.text + "\"");
}
function handleTextChange(){
  frmHome.lblInvalidGroupName.isVisible = !frmHome.tbxNewGroup.text ||  frmHome.tbxNewGroup.text==="";
}