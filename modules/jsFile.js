var selectedGroupsData = [];
var selectedFiltersData = [];

// Utility functions
function animate( element, params, duration, callback, delay, count ){
  kony.print("[Parthu]Element in animate method::"+element);
  duration  = 0;
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
  if(animating) return;
  frmHome.lblNotification.text = msg;
  frmHome.flxNotification.bottom = "-50dp";
  frmHome.flxNotification.isVisible = true;  
  animating = true;
  animate(frmHome.flxNotification, {bottom: "0dp"}, 0.2, function() {
    animate(this, {bottom: "-50dp"}, 0.2, function(){
      this.isVisible = false;
      animating = false;
    }, 1);
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
    trans.rotate(-90);
    animating = true;
    animate(frmHome.imgPlus, {
      "rectified": true,
      "transform": trans
    }, 0.2, function(){ animating = false; });
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
    frmHome.segment.isVisible = false;
    frmHome.checkBox.isVisible = false;
    frmHome.flxAction.isVisible = false;

    animate(frmHome.flxContents, {height: "0dp", width: "0dp"}, null, function(){
      frmHome.helpOverlay.isVisible = false;
    });

    var trans = kony.ui.makeAffineTransform();
    trans.rotate(0);

    animating = true;
    animate(frmHome.imgPlus, {
      "rectified": true,
      "transform": trans
    }, 0.2, function() { animating = false; });
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

  showLoading("Filtering Contacts...");
  var i=0;
  frmHome.flxDashboardContent.removeAll();
  if(data.length===0) {
    for(; i<AllContacts.length; i++) {
      addContact(AllContacts[i]);
    }
  }
  else {
    var contacts = {};
    for(; i<data.length; i++) {
      if(data[i] == "Hot Prospects") data[i] = "Prospects";
      if(data[i] == "Business Prospects") data[i] = "Prospects and Customers";
      
      Groups[data[i]].forEach(g => contacts[g.lblMobile] = g);
    }
    
    for(var c in contacts) {
      addContact(contacts[c]);
    }    
  }
  if(frmHome.helpOverlay.isVisible) frmHome.helpOverlay.isVisible = false;
  
  frmHome.lblContactsCount.text = "(" + frmHome.flxDashboardContent.widgets().length + ")";
  frmHome.flxNoContacts.isVisible = frmHome.flxDashboardContent.widgets().length === 0;
  loadContacts();
  dismissLoading();
}
function any(ar, item) {
  var map = {
    "Hot Prospects" : "cardblue.png",
    "Customers" : "cardbrown.png",
    "ABOs" : "cardgreen.png",
    "Business Prospects": "cardtomato.png",
    "Prospects" : "cardblue.png",
    "Prospects and Customers": "cardtomato.png"
  };

  for(var i=0; i<ar.length; i++) {
    if(item == map[ar[i]] ) return true;
  }
  return false;
}

// Multi Select
function showSelection(val) {
  toggleCounter = 0;
  var n = frmHome.flxDashboardContent.widgets().length + 1;
  var left = val ? "50dp" : "0dp";  

  var selectedGroups;
  if(newGroupName === "")
    selectedGroups = frmHome.checkBox.selectedKeyValues;
  else
    selectedGroups = [["",newGroupName]];

  for(var i=1; i<n; i++) {
    animate(frmHome["flxContactCard"+i], {left: left}, 0.1);
    frmHome["imgSelection"+i].src = "checkbox_inactive.png";
    if(!val) continue;
    for(var j=0; j<selectedGroups.length; j++){
      for(var k=0 ;k< Groups[selectedGroups[j][1]].length ;k++){  
        if(Groups[selectedGroups[j][1]][k]["lblMobile"] == frmHome["lblMobile"+i].text ){
          frmHome["imgSelection"+i].src = "checkbox_active.png";
          break;
        }
      }
    } 
  }

  frmHome.btn.isVisible = !val;
  frmHome.lblActionLabel.text = val ? "Add To Groups" : "All Contacts";
  frmHome.flxActionContext.isVisible = val;
  frmHome.flxSelectAll.isVisible = val;
  frmHome.imgSelectAll.src = "checkbox_inactive.png";
  frmHome.flxDashboardContent.top = val ? "80dp" : "50dp";
}
function cancelSelection() {
  newGroupName = "";
  showSelection(false);
}
function applySelection() {
  var n = frmHome.flxDashboardContent.widgets().length + 1;
  var selectedContacts = 0;//[];
  var groups ;
  if( newGroupName === "" ) {
    groups= [];
    frmHome.checkBox.selectedKeyValues.forEach( (i => groups.push(i[1])) );
  }
  else {
    groups = [newGroupName];
    newGroupName = "";
  }

  groups.forEach(i => delete Groups[i]);

  groups.forEach(i => Groups[i]=[]);

  for(var i=1; i<n; i++) {
    if(frmHome["imgSelection"+i].src == "checkbox_active.png"){
      selectedContacts++;
      groups.forEach(j => Groups[j].push({
        "imgUser": "option3.png",
        "imgUsertype": frmHome["imgUsertype"+i].src,
        "lblMobile": frmHome["lblMobile"+i].text,
        "lblReminder": "No Follow Ups",
        "lblUsername": frmHome["lblUsername"+i].text
      }));
    }
  }
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
  animate(frmHome.checkBox, {centerX: "153%"}, 0.2, function(){this.isVisible=false;});
  animate(frmHome.flxAction, {height: "0%"}, 0.2, function(){this.isVisible=false;});
  frmHome.segment.left = "-100%";
  frmHome.segment.isVisible = true;
  animate(frmHome.segment, {left: "0%"}, 0.3);

}
function onSegmentRowClick() {
  try {
    var selectedIndex = frmHome.segment.selectedRowIndex[1];
    if(selectedIndex === 0) {
      alert("To be implemented");
    }
    else if(selectedIndex === 1) {
      if(frmHome.flxDashboardContent.widgets().length === 0) {
        notify("No contacts to add.");
        return;
      }
      else onClickOfAddToGroup();
    }
    else if(selectedIndex === 2) {
      if(frmHome.flxDashboardContent.widgets().length === 0) {
        notify("No contacts to add.");
        return;
      }
      onClickOfCreateNewGroup();
    }
    else if(selectedIndex === 3) {
      if(frmHome.flxDashboardContent.widgets().length === 0) {
        notify("No contacts to filter.");
        return;
      }
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
    var masterData = [];
    for(var i in Groups) {
      masterData.push([i,i]);
    }

    frmHome.checkBox.masterData = masterData;
    frmHome.btnClear.text = selectedGroupsData.length > 0 ? "Clear Selections" : "Tap To Select";
    if(selectedGroupsData.length > 0)
      frmHome.checkBox.selectedKeys = selectedGroupsData;

    frmHome.flxAction.height = "0dp";
    frmHome.flxAction.isVisible = true;
    animate(frmHome.flxAction, {height: "35dp"}, 0.2);

    frmHome.segment.isVisible = false;

    frmHome.checkBox.centerX = "153%";
    frmHome.checkBox.isVisible = true;
    animate(frmHome.checkBox, {centerX: "53%"},0.2);

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
      //       ["Key5","No Follow-Ups"]
    ];
    frmHome.checkBox.masterData = masterData;
    frmHome.flxAction.isVisible = true;
    frmHome.btnClear.text = selectedFiltersData.length > 0 ? "Clear Selections" : "Tap To Select";

    if(selectedFiltersData.length > 0)
      frmHome.checkBox.selectedKeys = selectedFiltersData;

    frmHome.flxAction.height = "0dp";
    frmHome.flxAction.isVisible = true;
    animate(frmHome.flxAction, {height: "35dp"}, 0.2);

    frmHome.segment.isVisible = false;

    frmHome.checkBox.centerX = "153%";
    frmHome.checkBox.isVisible = true;
    animate(frmHome.checkBox, {centerX: "53%"},0.2);

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
    //applyFilters();
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
      showSelection(selectedGroupsData.length>0);
    }
    else if(frmHome.segment.selectedRowIndex[1] == 3) {
      selectedFiltersData = frmHome.checkBox.selectedKeys || [];
    }

    var sel = [];
    try {
      frmHome.checkBox.selectedKeyValues.forEach( (i => sel.push(i[1])) );
    } catch(e) {}

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
  animate(frmHome.mainOverlay, {opacity: 1}, 0.3);
  frmHome.flxCreateNewGroup.width = "0%";
  frmHome.flxCreateNewGroup.height = "0%";
  frmHome.flxCreateNewGroup.isVisible = true;
  frmHome.lblInvalidGroupName.isVisible = false;
  animate(frmHome.flxCreateNewGroup, {height: "27%", width: "70%"}, 0.3, function(){
    frmHome.tbxNewGroup.setFocus(true);
  });
}
function dismissCreateNewGroup() {
  animate(frmHome.flxCreateNewGroup, {height: "0%", width: "0%"}, 0.3, function(){this.isVisible = false;});
  animate(frmHome.mainOverlay, {opacity: 0}, 0.3, function(){ this.isVisible = false;});
}
function saveGroup() {
  if(!frmHome.tbxNewGroup.text || frmHome.tbxNewGroup.text === "" || Groups.hasOwnProperty(frmHome.tbxNewGroup.text)) {
    frmHome.lblInvalidGroupName.isVisible = true;
    shake(frmHome.flxCreateNewGroup);
    return;
  }
  frmHome.lblInvalidGroupName.isVisible = false;
  Groups[frmHome.tbxNewGroup.text] = [];
  newGroupName = frmHome.tbxNewGroup.text;
  dismissCreateNewGroup();
  showSelection(true);
}
function handleTextChange(){
  frmHome.lblInvalidGroupName.isVisible = !frmHome.tbxNewGroup.text ||  frmHome.tbxNewGroup.text==="";
}