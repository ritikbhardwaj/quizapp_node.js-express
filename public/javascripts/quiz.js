$('document').ready(()=>{
    let obj = {
        name: $("span#name").html(),
        roll_number: $("span#rollnumber").html()
    };

    $('li.question').each(function(){
        // console.dir(this);
        $(this.lastElementChild.children).each(function(){
            $(this).click(function(e){;
                $(e.currentTarget).toggleClass("bgselect");
                obj[e.currentTarget.parentNode.parentNode.id] = e.currentTarget.id;
                //console.log(obj);
            });
        });
    });

    $("button#back").click(function(){
        window.location.replace('http://localhost:3000');
    });

    $("button#submit").click(function () {
        $.ajax({
            url: "http://localhost:3000/quiz",
            beforeSend: function () {
                console.log("sending request!");
            },
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            data: JSON.stringify(obj),
            method: "POST"
        }).done((res) => {
            console.log(res);
            $('div#container').html(`
                <div id="result">
                    <h3>Result</h3>
                        <p id="name">${res.name}</p>
                        <p id="rollnumber">${res.roll_number}</p>
                        <h1><span id="marks">${res.marks}</span>/${res.arr2.length} - <span id="pof" style="color: ${res.pof ? "green" : "red"}">${res.pof ? "PASS!" : "FAIL!"}</spanspan></h1>
                </div>
                <img src="images/award.png" alt="award">              
            `);
            $('button#submit').prop("disabled","true");
        });
    });
});

