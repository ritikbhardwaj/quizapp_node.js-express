$('document').ready(()=>{
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
            console.log("RESPONSE OBJECT - ",res) //debugging
            $('div#container').html(`
                <div id='result'>
                    <h3>Result</h3>
                    <p id='name'>${res.name}</p>
                    <p id='rollnumber'>${res.roll_number}</p>
                    <h1><span id='marks'>${res.marks}</span>/${res.arr2.length} - <span id='pof' style='color: ${res.pof ? 'green' : 'red'}'>${res.pof ? 'PASS!' : 'FAIL!'}</spanspan></h1>
                </div>
                <img src='images/award.png' alt='award'>              
            `)
            $('button#submit').prop('disabled','true')
        })
    })
})

