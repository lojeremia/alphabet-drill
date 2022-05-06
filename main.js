/* Learn more modal */
$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal()
    });
});

/* Style first word of poem line 
   Modified from: https://www.jqueryscript.net/text/Styling-First-Word-Of-Any-Element-With-jQuery-CSS.html*/
function firstWord(a, b) {
    $(a).each(function() {
        var elText,
            openSpan = '<span class='+b+'>';
            closeSpan = '</span>';
        elText = $(this).text().split(" ");
        elText.unshift(openSpan);
        elText.splice(2, 0, closeSpan);
        elText = elText.join(" ");
        $(this).html(elText);
    });
}

firstWord(".redP", "first-red");
firstWord(".blueP", "first-blue");
firstWord(".yellowP", "first-yellow");
firstWord(".greenP", "first-green");


/* Update: Changed how I handled hovers
  so that user is forced to go in alphabetical order */

// Get array of alphabet ids 
var letters = $('.letter').map(function(){
    return this.id
}).get();

// Unlock the next letter after hover
function unlock(curr, letters) {
    var line = "#" + letters[curr] + "Line";
    var nextId = "#" + letters[curr+1];
    $(line).show();
    $(nextId).removeClass("locked");  

}

/* Hide Instructions once user hovers over a */
function hideInstructions() {
    $("#a").mouseover(function () {
        $('.instructions').hide();
    })
}

hideInstructions();

/* Hover state persists, should only change if unlocked */
function permahover() {
    var curr = 0;  // Initialize current letter at a = 0
    var seen = [];  // Initialize array of activated letters 
    /* On mouseover of each letter: if the letter is unlocked
    and hasn't already been activated, activate and unlock 
    the next letter in the alphabet */
    $('.letter').mouseover(function() {
        if((!$(this).hasClass("locked"))
           && (!seen.includes(this))) {
            seen.push(this);
            console.log(seen);
            $(this).addClass("activated");
            unlock(curr, letters);
            curr++;
            /* Show reset button after all letters unlocked */
            if (seen.length == 26) {
                console.log("true");
                $('.reset').show();
            }
        }
    });
}
  
permahover();


