$(document).ready(function(){

var originalArray = [];
var workingArray = [];
var onDeck = [];
var toBeMerged = [];

// create an array from the ids of the original list
  // store that in 'originalArray'
// Pull each div from inside #original-list and place into an array
$("#original-list div").each(function() {
  originalArray.push(parseInt(this.id));
});
  // 'workingArray' becomes 'originalArray'
var workingArray = [originalArray, 1];

updateList(workingArray, $("#working-1"));

console.log(workingArray);

// a function to split the array into two
function splitArr() 
{
  // user splits the 'workingArray'
  var middle = parseInt(workingArray[0].length / 2);
  var left   = workingArray[0].slice(0, middle);
  var right  = workingArray[0].slice(middle, workingArray[0].length);

  // 'workingArray' becomes an array of the first half, with second value == 1
  workingArray = [left, 1];
  // adds the second half as the first element in an 'onDeck' array, with second value == 0
  onDeck.push([right, 0]);

  // animates the appearance of 'workingArray' in working-1 div
  updateList(workingArray, $("#working-1"));
}


// a function to sort an array of 2 or less elements
function sortArr(arr)
{
  if (arr[0].length == 1) {
    return arr;
  } else {
    if (arr[0][1] < arr[0][0]) {
      var temp = arr[0][1];
      arr[0][1] = arr[0][0];
      arr[0][0] = temp;
    }
    return arr;
  }
}


// a function to merge two sorted arrays together
function merge(left, right)
{
  var result = [];

  while (left[0].length && right[0].length) {
    if (left[0][0].value <= right[0][0].value) {
      result.push(left[0].shift());
    } else {
      result.push(right[0].shift());
    }
  }

  while (left[0].length) {
    if (result.push(left[0].shift())) {
    }
  }
  while (right[0].length) {
    if (result.push(right[0].shift())) {
    }
  }

  return result;
}

function updateList(arr, list) {
      list.empty();
      for (var i = 0; i < arr[0].length; i++) {
        list.append("<div><p>Number " + arr[0][i] + "</p></div>").fadeIn('slow'); 
      }
  }






// user splits the 'workingArray'
  // adds the second half as the first element in an 'onDeck' array, with attribute firstHalf = FALSE
  // 'workingArray' becomes an array of the first half, with attribute firstHalf = TRUE
  // animates the appearance of 'workingArray' in working-1 div

// analyze whether 'workingArray' is 2 or less elements
  // if so run sort on it and display the result in working-2 div
    // if 'toBeMerged' is empty, 'toBeMerged' becomes 'workingArray'
      // 'workingArray' becomes the last element in 'onDeck'
      // .. recursively analyze for 2 or less elements
    // else run merge on 'workingArray' and 'toBeMerged'
      // return value as an element in 'sortedStaged'
      // set 'toBeMerged' to NULL
      // 'workingArray' becomes the last element in 'onDeck'
  // else run split on it and display the result in working-2 div
    // add the second half as another element in the onDeck array
    // .. recursive until sort and merge

// when merging, 

// binding each of those functions to a button
$("#split").on("click", splitArr());
$("#sort").on("click", sortArr(workingArray));
$("#merge").on("click", merge(workingArray, toBeMerged));

});




/*

EVERYTHING BELOW IS MY ORIGINAL ATTEMPT AT THE SOLUTION BEFORE STARTING OVER

$(document).ready(function(){

  var sortArray = [];
// Pull each div from inside .class and place into an array
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

  function updateList(result, list) {
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

    return result;
    
  }

});

*/

   