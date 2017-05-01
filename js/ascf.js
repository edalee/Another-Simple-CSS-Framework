
// var formInputs = form.childNodes
// console.log(formNodes)

function active_input(event) {
    // console.log(this.type, event.type);
    var input = this.name
    var v = this.value
    var labelElement = document.getElementById(input+'Label')
    switch(event.type) {
        // case 'keydown':
        //     break;
        // case 'keyup':
        //     break;
        case 'focus':
            labelElement.classList.add('active')
            break;
        case 'blur':
            if (this.value == '') {
                labelElement.classList.remove('active')
            }

            break;
    }
}

function addInputListeners() {
    var inputs = document.getElementsByTagName('input'), i=0;
    var textfields = document.getElementsByTagName('textarea'), i=0;
    var fields = []
    fields.push.apply(fields,inputs)
    fields.push.apply(fields,textfields)
    // console.log(fields)
    var events = ['blur', 'focus', 'keydown', 'keyup']

    do {
        switch(fields[i].type){
            case 'password':
                events.forEach(function(event){
                    fields[i].addEventListener(event, active_input, false);
                });
                break;
            case 'text':
                events.forEach(function(event){
                    fields[i].addEventListener(event, active_input, false);
                });
                break;
            case 'email':
                events.forEach(function(event){
                    fields[i].addEventListener(event, active_input, false);
                });
                break;
            case 'file':
                events.forEach(function(event){
                    fields[i].addEventListener(event, active_input, false);
                });
                break;
            case 'url':
                events.forEach(function(event){
                    fields[i].addEventListener(event, active_input, false);
                });
                break;
            case 'textarea':
                events.forEach(function(event){
                    fields[i].addEventListener(event, active_input, false);
                });
                break;
        }
    }
    while(fields[++i])

}


document.addEventListener("DOMContentLoaded", function(){
    addInputListeners();
});
