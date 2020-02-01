$('document').ready(()=>{
    $('div#form button').click(()=>{
        let username = $("div#form input#username").val();
        let roll_number = $("div#form input#roll_number").val();
        console.log(username);
        window.location.replace(`http://localhost:3000/quiz?username=${username}&roll_number=${roll_number}`);
    });
});