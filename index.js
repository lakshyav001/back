
var mainText = document.getElementById('mainText');
var cno=1;
var btnc = document.getElementById('btnc');


function cliCked() {
    var selectedVal = "";
  var selected = $("input[type='radio'][name='eve']:checked");
  if (selected.length > 0) {
      selectedVal = selected.val();
  }
     var dt = new Date();
     var day = dt.getDate();
     var month = dt.getMonth();
     var year = dt.getFullYear();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
var firebaseRef = firebase.database().ref();
var message = mainText.value;
firebaseRef.child(cno).set({
  "message" : message,
  "value i get ": selectedVal,
  "time ": time,
  "date":day+":"+month+":"+year
});

cno++;
}
