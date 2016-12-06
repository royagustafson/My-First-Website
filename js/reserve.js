var D = 0;

function getDay( d ){
  D = d;
  $('#time').css('display','block');
}

function printTime( ){
  var dayStr;
  var h = $('#hour').val();
  var m = $('#minute').val();

  switch( D%7 ){
    case 0:
      dayStr="Wednesday";
      break;
    case 1:
      dayStr="Thursday";
      break;
    case 2:
      dayStr="Friday";
      break;
    case 3:
      dayStr="Saturday";
      break;
    case 4:
      dayStr="Sunday";
      break;
    case 5:
      dayStr="Monday";
      break;
    case 6:
      dayStr="Tuesday";
      break;
  }
  $('#greyout').css('display','block');
  $('#output').html( dayStr + ', December ' + D + ' at ' + h + ':' + m + ' pm');
}
