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
            clearInterval(intervalHandle)
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
    })(10)

    function makePost() {
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
            console.log("RESPONSE OBJECT - ", res) //debugging
            $('div#container').html(`
                <div id='result'>
                    <h3>${res}</h3>
                    <p id='name'>${obj.name}</p>
                    <p id='rollnumber'>${obj.roll_number}</p>
                </div>
                <img src='images/award.png' alt='award'>              
            `)
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
        clearInterval(intervalHandle)
    })
})

