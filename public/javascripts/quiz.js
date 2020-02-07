$('document').ready(()=>{

    function tick() {
        // grab the h1
        var timeDisplay = document.getElementById("time");
        // turn the seconds into mm:ss
        var min = Math.floor(secondsRemaining / 60);
        var sec = secondsRemaining - (min * 60);
        //add a leading zero (as a string value) if seconds less than 10
        if (sec < 10) {
            sec = "0" + sec;
        }
        // concatenate with colon
        var message = min.toString() + ":" + sec;

        // now change the display
        timeDisplay.innerHTML = message;

        // stop is down to zero
        if (secondsRemaining === 0) {
            alert("Time up!");
            makePost()
        }
        //subtract from seconds remaining
        secondsRemaining--;
    }

    (function startCountdown(minutes) {
        // how many seconds
        secondsRemaining = minutes * 60;
        //every second, call the "tick" function
        // have to make it into a variable so that you can stop the interval later!!!
        intervalHandle = setInterval(tick, 1000)
    })(0.2)

    function makePost() {
    var obj = {
        name: $('span#name').html(),
        roll_number: $('span#rollnumber').html(),
        answers:{}
    }
    $('li.question').each(function(){
        // console.dir(this)
        $(this.lastElementChild.children).each(function(){
            $(this).click(function(e){
                $(e.currentTarget).toggleClass('bgselect')
                obj.answers[e.currentTarget.parentNode.parentNode.id] = e.currentTarget.id
            })
        })
    })
    $('button#back').click(function(){
        window.location.replace('http://localhost:3000')
    })
    $('button#submit').click(function () {
        console.log("SENT OBJECT - ",obj) //debugging
        $.ajax({
            url: 'http://localhost:3000/quiz',
            beforeSend: function () {
                console.log('sending request!')
            },
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: JSON.stringify(obj),
            method: 'POST',
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status)
                console.log(thrownError)
            }
        }).done((res) => {
<<<<<<< HEAD
            console.log("RESPONSE OBJECT - ", res) //debugging
=======
            console.log("RESPONSE OBJECT - ",res) //debugging
>>>>>>> b4bb679dfaf5afb6c347870c035c0bdbd0ca6ae1
            $('div#container').html(`
                <div id='result'>
                    <h3>Result</h3>
                    <p id='name'>${res.name}</p>
                    <p id='rollnumber'>${res.roll_number}</p>
                    <h1><span id='marks'>${res.marks}</span>/${res.arr2.length} - <span id='pof' style='color: ${res.pof ? 'green' : 'red'}'>${res.pof ? 'PASS!' : 'FAIL!'}</spanspan></h1>
                </div>
                <img src='images/award.png' alt='award'>              
            `)
<<<<<<< HEAD
            $('button#submit').prop('disabled', 'true')
        })
    }
        

    var obj = {
        name: $('span#name').html(),
        roll_number: $('span#rollnumber').html(),
        answers:{}
    }
    $('li.question').each(function(){
        // console.dir(this)
        $(this.lastElementChild.children).each(function(){
            $(this).click(function(e){
                $(e.currentTarget).toggleClass('bgselect')
                obj.answers[e.currentTarget.parentNode.parentNode.id] = e.currentTarget.id
            })
        })
    })
    $('button#back').click(function(){
        window.location.replace('http://localhost:3000')
    })
    $('button#submit').click(function () {
        console.log("SENT OBJECT - ",obj) //debugging
        makePost()
=======
            $('button#submit').prop('disabled','true')
        })
>>>>>>> b4bb679dfaf5afb6c347870c035c0bdbd0ca6ae1
    })
})

