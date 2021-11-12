function fechatudo() {
    if (document.querySelector('#check').checked == false) {
        document.querySelector('#option2b').checked = false
        document.querySelector('#option3c').checked = false
        document.querySelector('#option4d').checked = false
        document.querySelector('#option5e').checked = false
        document.querySelector('#option1a').checked = false
    }
}

function desmarcar1() {
    if (document.querySelector('#option1a').checked == true) {
        document.querySelector('#option2b').checked = false
        document.querySelector('#option3c').checked = false
        document.querySelector('#option4d').checked = false
        document.querySelector('#option5e').checked = false
    }
}

function desmarcar2() {
    if (document.querySelector('#option2b').checked == true) {
        document.querySelector('#option1a').checked = false
        document.querySelector('#option3c').checked = false
        document.querySelector('#option4d').checked = false
        document.querySelector('#option5e').checked = false
    }
}

function desmarcar3() {
    if (document.querySelector('#option3c').checked == true) {
        document.querySelector('#option2b').checked = false
        document.querySelector('#option1a').checked = false
        document.querySelector('#option4d').checked = false
        document.querySelector('#option5e').checked = false
    }
}

function desmarcar4() {
    if (document.querySelector('#option4d').checked == true) {
        document.querySelector('#option2b').checked = false
        document.querySelector('#option3c').checked = false
        document.querySelector('#option1a').checked = false
        document.querySelector('#option5e').checked = false
    }
}

function desmarcar5() {
    if (document.querySelector('#option5e').checked == true) {
        document.querySelector('#option2b').checked = false
        document.querySelector('#option3c').checked = false
        document.querySelector('#option4d').checked = false
        document.querySelector('#option1a').checked = false
    }
}

