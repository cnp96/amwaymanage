var animating = false;
var startx, actionx, curDiff, element, swiping = false;
var toggleCounter = 0;
var addNoteId;
var AllContacts = [];
var Groups = {
  "Prospects":[],
  "Customers":[],
  "Prospects and Customers": [],
  "ABOs": []
};
var newGroupName = "";
var longPress = false;
var showGroup = "";