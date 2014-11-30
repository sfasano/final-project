$(document).ready(function(){

  var sortArray = [];
// Pull each div from inside #class and place into an array
  $("#original-list div").each(function() {
    sortArray.push( { 
                      value: parseInt(this.id),
                      text: this.innerText
                    } );

  });

  console.log(sortArray);
// Call mergesort on the array
$('button').on('click', function() {
  sortArray = mergeSort(sortArray);
  console.log(sortArray);
    });
// Each time two items are swapped in the array
  // push the change out to the page
  // animate the swapping of values

// var testArray = [5,3,4,2,1];
// console.log(testArray);
// mergeSort(sortArray);
// console.log(testArray);

  function updateList(result) {
      $("#final-list").empty();
      for (var i = 0; i < result.length; i++) {
        $("#final-list").append("<div><p>Number " + result[i].value + "</p></div>").fadeIn('slow'); 
      }
  }

  function mergeSort(arr)
  {
    if (arr.length < 2)
      return arr;
   
    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
 
    return merge(mergeSort(left), mergeSort(right));
  }
   
  function merge(left, right)
  {
    var result = [];

$('button').on('click', function() {
      mergePause(left, right, result);
    });

    return result;

    
  }

  function mergePause(left, right, result) {
    

    while (left.length && right.length) {
      if (left[0].value <= right[0].value) {
        result.push(left.shift());
        updateList(result);
      } else {
        result.push(right.shift());
        updateList(result);
      }
    }

    while (left.length) {
      if (result.push(left.shift())) {
        updateList(result);
      }
    }
    while (right.length) {
      if (result.push(right.shift())) {
        updateList(result);
      }
    }

  }   

});



   