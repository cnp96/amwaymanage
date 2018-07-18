function loadContacts() {
  var n = frmHome.flxDashboardContent.widgets().length+1;
  for(var i=1; i<n; i++) {
    //frmHome["flxContactCard" + i].onTouchStart = startSwipe;
    //frmHome["flxContactCard" + i].onTouchMove = moveSwipe;
    //frmHome["flxContactCard" + i].onTouchEnd = endSwipe;
    frmHome["flxContactCard" + i].onClick = contactClicked;    
    
    frmHome["flxAddNote"+i].onClick = addNote;
    frmHome["flxDelete"+i].onClick = deleteContact;
    
    frmHome["flxSelection" + i].onClick = toggleSelection;
  }
}

function startSwipe(source, x, y) {
  if(source.left == "50dp") return;
  element = "flxActions" + source.id.split("flxContactCard")[1];  
  startx = x; actionx = frmHome[element].right;
  kony.print("start swipe: " + startx);
}

function moveSwipe(source, x, y) {
  if(source.left == "50dp") return;
  kony.print("swipe");
  curDiff = startx - x;
  kony.print(curDiff);
  if(curDiff === 0) return;
  if( curDiff < 0 && frmHome[element].right == "-120dp" ) return;
  if( curDiff > 0 && frmHome[element].right == "0dp" ) return;
  swiping = true;
  frmHome[element].right = curDiff < 0 ? (curDiff < -120 ? -120 : curDiff > 120 ? 0 : curDiff) : (curDiff < -120 ? -120 : curDiff > 120 ? 0 : curDiff-120) + "dp";
  frmHome.forceLayout();
}

function endSwipe(source, x, y) {
  if(source.left == "50dp") return;
  kony.print("end swipe");
  try { kony.timer.schedule("resetSwipe", resetSwipe, 0.5, false); } catch(e){ kony.print("Error resetting swipe."); }
  var diff = Math.abs(startx-x);
  if(diff === 0 || frmHome[element].right == "0dp" || frmHome[element].right == "-120dp") return;
  frmHome[element].right = x < startx ? (diff > 60 ? 0 : -120) :  (diff > 60 ? -120 : 0) + "dp";
}

function contactClicked() {
  if(this.left == "50dp") {
    toggleSelection(this);
  }
  else {
    kony.print("Clicked :: swiping? " + swiping);
    if(swiping) return;
    alert(this.id);
  }
}

function resetSwipe() {
  swiping = false;
  try { kony.timer.cancel("resetSwipe"); } catch(e){ kony.print("Error cancelling reset swipe."); }
}