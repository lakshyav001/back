
var mainText = document.getElementById('mainText');
var main_page =document.getElementById('main_page');
var databaseRef = firebase.database().ref();
var he =document.getElementById('he');
var btnc = document.getElementById('btnc');
var firebaseRef = firebase.database().ref();
var firebaseHedingRef =firebase.database().ref().child("customers");
firebaseHedingRef.on('value',function(datasnap){
    main_page.innerText = datasnap.val();
});
var oneRef = databaseRef.ref().child('customers').child('customer_one');
oneRef.on('value',function(dtasnapss){
  he.innerText = dtasnapss.val();
});
function cliCked() {
  var selectedVal = "";
  var selected = $("input[type='radio'][name='eve']:checked");
  if (selected.length > 0) {
      selectedVal = selected.val();
  }

var message = mainText.value;

firebaseRef.child("case").child("comment").set(message);
firebaseRef.child("case").child("intensity").set(selectedVal);
}
