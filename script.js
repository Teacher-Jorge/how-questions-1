let input1 =document.getElementById('input1')
let input2 =document.getElementById('input2')
let check1 = document.getElementById('check1')
let score = document.getElementById('score')
let value = score.innerHTML
let audioSword = document.getElementById('audioSword')

input1.addEventListener('keyup', (e) => {
    if (input1.value === 'old') {
        audioSword.play()
        input1.style.color = 'limegreen'
        check1.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input1.disabled = true
        document.getElementById('input2').focus()
    }
})      

input1.addEventListener('keyup', (e) => {
    if (input1.value != 'old') {
        input1.style.color = 'red'
    } 
}) 
input1.addEventListener('keyup', (e) => {
    if (input1.value === 'o') {
        input1.style.color = 'limegreen'
    } 
}) 
input1.addEventListener('keyup', (e) => {
    if (input1.value === 'ol') {
        input1.style.color = 'limegreen'
    } 
}) 

let translation = document.getElementById('translation')

btn1T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn1T.style.backgroundColor = 'red'
    btn1T.style.color = 'yellow'
    translation.innerHTML = 'Qual a sua idade?'
    setTimeout(function() {
        btn1T.style.backgroundColor = 'white'
        btn1T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 1800)
})

//Question 02

let check2 = document.getElementById('check2')


input2.addEventListener('keyup', (e) => {
    if (input2.value === 'tall') {
        audioSword.play()
        input2.style.color = 'limegreen'
        check2.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input2.disabled = true
        document.getElementById('input3').focus()
    }
})      
input2.addEventListener('keyup', (e) => {
    if (input2.value != 'tall') {
        input2.style.color = 'red'
    } 
}) 
input2.addEventListener('keyup', (e) => {
    if (input2.value === 't') {
        input2.style.color = 'limegreen'
    } 
}) 
input2.addEventListener('keyup', (e) => {
    if (input2.value === 'ta') {
        input2.style.color = 'limegreen'
    } 
})
input2.addEventListener('keyup', (e) => {
    if (input2.value === 'tal') {
        input2.style.color = 'limegreen'
    } 
})

btn2T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn2T.style.backgroundColor = 'red'
    btn2T.style.color = 'yellow'
    translation.innerHTML = 'Qual a sua altura?'
    setTimeout(function() {
        btn2T.style.backgroundColor = 'white'
        btn2T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 1800)
})
//Question 03
let input3 =document.getElementById('input3')
let check3 = document.getElementById('check3')

input3.addEventListener('keyup', (e) => {
    if (input3.value === 'much') {
        audioSword.play()
        input3.style.color = 'limegreen'
        check3.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input3.disabled = true
        document.getElementById('input4').focus()
    }
})      
input3.addEventListener('keyup', (e) => {
    if (input3.value != 'much') {
        input3.style.color = 'red'
    } 
}) 
input3.addEventListener('keyup', (e) => {
    if (input3.value === 'm') {
        input3.style.color = 'limegreen'
    } 
}) 
input3.addEventListener('keyup', (e) => {
    if (input3.value === 'mu') {
        input3.style.color = 'limegreen'
    } 
})
input3.addEventListener('keyup', (e) => {
    if (input3.value === 'muc') {
        input3.style.color = 'limegreen'
    } 
})

btn3T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn3T.style.backgroundColor = 'red'
    btn3T.style.color = 'yellow'
    translation.innerHTML = 'Quanto você pesa?'
    setTimeout(function() {
        btn3T.style.backgroundColor = 'white'
        btn3T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 1800)
})
//Question 04
let input4 =document.getElementById('input4')
let check4 = document.getElementById('check4')

input4.addEventListener('keyup', (e) => {
    if (input4.value === 'far') {
        audioSword.play()
        input4.style.color = 'limegreen'
        check4.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input4.disabled = true
        document.getElementById('input5').focus()
    }
})      
input4.addEventListener('keyup', (e) => {
    if (input4.value != 'far') {
        input4.style.color = 'red'
    } 
}) 
input4.addEventListener('keyup', (e) => {
    if (input4.value === 'f') {
        input4.style.color = 'limegreen'
    } 
}) 
input4.addEventListener('keyup', (e) => {
    if (input4.value === 'fa') {
        input4.style.color = 'limegreen'
    } 
})

btn4T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn4T.style.backgroundColor = 'red'
    btn4T.style.color = 'yellow'
    translation.innerHTML = 'Quão longe você mora?'
    setTimeout(function() {
        btn4T.style.backgroundColor = 'white'
        btn4T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 1800)
})
//Question 05
let input5 =document.getElementById('input5')
let check5 = document.getElementById('check5')

input5.addEventListener('keyup', (e) => {
    if (input5.value === 'long') {
        audioSword.play()
        input5.style.color = 'limegreen'
        check5.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input5.disabled = true
        document.getElementById('input6').focus()
    }
})      
input5.addEventListener('keyup', (e) => {
    if (input5.value != 'long') {
        input5.style.color = 'red'
    } 
}) 
input5.addEventListener('keyup', (e) => {
    if (input5.value === 'l') {
        input5.style.color = 'limegreen'
    } 
}) 
input5.addEventListener('keyup', (e) => {
    if (input5.value === 'lo') {
        input5.style.color = 'limegreen'
    } 
})
input5.addEventListener('keyup', (e) => {
    if (input5.value === 'lon') {
        input5.style.color = 'limegreen'
    } 
})

btn5T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn5T.style.backgroundColor = 'red'
    btn5T.style.color = 'yellow'
    translation.innerHTML = 'Quanto tempo leva pra você chegar em casa?'
    setTimeout(function() {
        btn5T.style.backgroundColor = 'white'
        btn5T.style.color = 'darkcyan'
        translation.innerHTML = ''
        let audio2 = document.getElementById('howlong')
        audio2.play()
    }, 1800)
    
})
