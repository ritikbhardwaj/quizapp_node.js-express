let obj ={};

$('document').ready(()=>{

    $('li.question').each(function(){
        // console.dir(this);
        $(this.lastElementChild.children).each(function(){
            $(this).click(function(e){;
                $(e.currentTarget).toggleClass("bgselect");
                obj[e.currentTarget.parentNode.parentNode.id] = e.currentTarget.id;
                console.log(obj);
            });
        });
    });

    $("button#back").click(function(){
        window.location.replace('http://localhost:3000');
    });

    $("button#submit").click(function () {
        console.log(obj);
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
        });
    });
});

