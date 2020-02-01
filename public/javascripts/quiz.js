var obj ={};

$('document').ready(()=>{
    //attach handlers to all the options
    $('div.option').click((e) => {
        let qnum = e.currentTarget.parentNode.parentNode.id;
        let onum = e.currentTarget.id
        console.log("Question: ",qnum); //question number
        console.log("option: ",onum); //option number
        obj[e.currentTarget.parentNode.parentNode.id] = e.currentTarget.id;
        // clearSelection(qnum);
        $(`li#1 div.options #${onum}`).toggleClass("bgselect")
        console.log(obj);
    });
});

function clearSelection(question){
    $(`li#${question} div.option`).toggleClass("bgselect");
}
