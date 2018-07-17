function frmPreShow(){
  frmGroups.flxTopbar1.shadowDepth = 4;
  frmGroups.flxCustomer.onTouchStart = showShadow;
  frmGroups.flxProspect.onTouchStart = showShadow;
  frmGroups.flxProspectCustomer.onTouchStart = showShadow;
  frmGroups.flxABO.onTouchStart = showShadow;
  frmGroups.flxCustomer.onTouchEnd = hideShadow;
  frmGroups.flxProspect.onTouchEnd = hideShadow;
  frmGroups.flxProspectCustomer.onTouchEnd = hideShadow;
  frmGroups.flxABO.onTouchEnd = hideShadow;
  frmGroups.flxItem1.onClick = navigateHome;
  frmGroups.flxItem3.onClick = navigateProfile;
  for(var i =1 ;i <= 4 ;i++){
    frmGroups["flxCustom"+i].onTouchStart = showShadow;
    frmGroups["flxCustom"+i].onTouchEnd = hideShadow1;
    frmGroups["flxCustom"+i].setGestureRecognizer(3,{pressDuration : 2},callBack);
    frmGroups["flxClose"+i].width = "0%";
    frmGroups["flxClose"+i].height = "0%";
    frmGroups["flxClose"+i].onTouchStart = deleteGroup;
  }
}

function navigateHome(){
  frmHome.show();  
}
function navigateProfile(){
  frmProfile.show();
}

function deleteGroup(src){
  var id = src.id[src.id.length-1];
  frmGroups["flxCustom"+id].height ="0";
  try {
    kony.timer.cancel("timerid");
  } catch(e) {}
  
  for(var i =1 ;i <= 4 ;i++){
    frmGroups["flxCustom"+i].shadowDepth = 0;
    frmGroups["flxClose"+i].height = "0%";
    frmGroups["flxClose"+i].width = "0%";
  }
  longPress = false;
}

function showShadow(src){
  frmGroups[src.id+""].shadowDepth = 5;
}

function hideShadow(src){
  frmGroups[src.id+""].shadowDepth = 0;
}

function hideShadow1(src){
  if(!longPress)
    frmGroups[src.id+""].shadowDepth = 0;
}

function callBack(widget , info){
  longPress = true;
  for(var i =1 ;i <= 4 ;i++){
    frmGroups["flxCustom"+i].shadowDepth = 5;
    animate(frmGroups["flxClose"+i],{"width":"16%", "height":"18%"},0.5);
  }
  try {
    kony.timer.cancel("timerid");
  } catch(e){}
  kony.timer.schedule("timerid", animateTimer, 0.14, true);
  
}

function animateTimer(){
  for(var i =1 ;i <= 4 ;i++){
    shakeLeft(frmGroups["flxCustom"+i]);
  }
}

function shakeLeft(element) {
  if(!element) return;
  var newval = parseInt(element.left);
  animate(element, {left: newval-0.13+"%"}, 0.07);
  animate(element, {left: newval+0.13+"%"}, 0.07);
}