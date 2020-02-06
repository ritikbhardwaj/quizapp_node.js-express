$('document').ready(()=>{
    $('button#enter').click(()=>{
        let username = $('div#form input#username').val();
        let roll_number = $('div#form input#roll_number').val()
        if(username == '' || roll_number == ''){
            alert('Fields cannot be empty!')
        }else{
            window.location.replace(`http://localhost:3000/quiz?username=${username}&roll_number=${roll_number}`)
        } 
    })
    //results button
    $('button#result').click(() => {
        window.location.replace(`http://localhost:3000/result`)
    })
})