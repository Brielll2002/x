function calcular(){
    var c2 = Number(document.getElementById("hipotenusa").value)
    var a2 = Number(document.getElementById("catetooposto").value)
    var b2 = Number(document.getElementById("catetoadjacente").value)

    if(c2==0){
        var res = a2+b2
        var result = document.getElementById("resultado")
    result.innerHTML = `A RESPOSTA É ${res}, MONGO!`
    }
    else if(a2==0){
        var res = b2-c2
        var result = document.getElementById("resultado")
    result.innerHTML = `A RESPOSTA É ${res}, MONGO!`
    }
    else if(b2 == 0){
        var res = a2-c2
        var result = document.getElementById("resultado")
    result.innerHTML = `A RESPOSTA É ${res}, MONGO!`
    }
}

function calcular2(){
    var y = Number(document.getElementById("y").value)
    var a = Number(document.getElementById("a").value)
    var x = Number(document.getElementById("x").value)
    var b = Number(document.getElementById("b").value)
    var result2 = document.getElementById("resultado2")

    if(y==0){
        var res2 = a*x+b
        result2.innerHTML = `A resposta é: ${res2}, DODÓI`
    }
    else if(a==0){
        var res2 = `${y} = a.${x}+${b}`
        var res2_1= x+b/y
        result2.innerHTML = `A resposta é: ${res2} ou ${res2_1}, DODÓI`
        
    }
    else if(x==0){
        var res2 = `${y} = ${a}.x+${b}`
        var res2_1 = y-b/a
        result2.innerHTML = `A resposta é: ${res2} ou ${res2_1}, DODÓI`
    }
    else if(b==0){
        var res2 = `${y} = ${a}.${x}+b`
        var res2_1 = x*a-y
        result2.innerHTML = `A resposta é: ${res2} ou ${res2_1}, DODÓI`
    }
}

function calcular3(){
    var base = Number(document.getElementById("base").value)
    var altura = Number(document.getElementById("altura").value)
    var result3 = document.getElementById("resultado3")

    var res = base*altura/2

    result3.innerHTML = `${res}, BESTALHADA`
}

function co(){
    var co = Number(document.getElementById("co").value)
    var h = Number(document.getElementById("h").value)
    var resco = document.getElementById("resultadoco")

    var res = co/h
    resco.innerHTML = `A resposta é ${res}, DOIDINHA`
}

function ca(){
    var ca = Number(document.getElementById("ca").value)
    var h2 = Number(document.getElementById("h2").value)
    var resca = document.getElementById("resultadoca")

    var res = ca/h2
    resca.innerHTML = `A resposta é ${res}, DOIDINHA`
}