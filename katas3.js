const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


function showResults(x){
    return console.log(x)
}

//Exibir os números de 1 a 25: (1, 2, 3, …, 24, 25)
function kata1() {
    let result = []
    for(let i=1; i<=25; i++){
        result.push(i)
    }
    showResults(result)
    return result
}

//Exibir os números de 25 a 1: (25, 24, 23, …, 2, 1)
function kata2() {
    let result = []
    for(let i=1; i<=25; i++){
        result.unshift(i)
    }
    showResults(result)
    return result
}

//Exibir os números de -1 a -25: (-1, -2, -3, …, -24, -25)
function kata3() {
    let result = []
    for(let i=-1; i>=-25; i--){
        result.push(i)
    }
    showResults(result)
    return result
}

//Exibir os números de -25 a -1: (-25, -24, -23, …, -2, -1)
function kata4() {
    let result = []
    for(let i=-25; i<=-1; i++){
        result.push(i)
    }
    showResults(result)
    return result
}

//Exibir os números ímpares de 25 a -25: (25, 23, 21, …, -23, -25)
function kata5() {
    let result = []
    for(let i=25; i>=-25; i-=2){
        result.push(i)
    }
    showResults(result)
    return result
}

//Exibir os números divisíveis por 3 até o 100: (3, 6, 9, …, 96, 99)
function kata6() {
    let result = []
    for(let i=3; i<=99; i+=3){
        result.push(i)
    }
    showResults(result)
    return result
}

//Exibir os números divisíveis por 7 até o 100: (7, 14, 21, …, 91, 98)
function kata7() {
    let result = []
    for(let i=7; i<=100; i+=7){
        result.push(i)
    }
    showResults(result)
    return result
}

//Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100: (99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)
function kata8() {
    let result = []
    for(let i =99; i>=3; i--){
        if(i%3===0 || i%7===0){
            result.push(i)
        }
    }
    showResults(result)
    return result
}

//Exibir os números ímpares divisíveis por 5 até o 100: (5, 15, 25, …, 85, 95)
function kata9() {
    let result = []
    for(let i=5; i<=95; i+=10){
        result.push(i)
    }
    showResults(result)
    return result
}

//Exibir os 20 elementos de sampleArray. (469, 755, 244, …, 940, 472)
function kata10() {
    showResults(sampleArray)
    return sampleArray
}

//Exibir todos os números pares contidos em sampleArray. (244, 758, 450, …, 940, 472)
function kata11() {
    let result = []
    for(let i=21; i<=940; i++){
        for(let j=0;j<=20;j++){
            if(i===sampleArray[j] && i%2===0){
                result.push(i)
            }
        }
    }
    showResults(result)
    return result
}

//Exibir todos os números ímpares contidos em sampleArray. (469, 755, 245, …, 179, 535)
function kata12() {
    let result = []
    for(let i=21; i<=940; i++){
        for(let j=0;j<=20;j++){
            if(sampleArray[j]%2!==0){
                result.push(sampleArray[j])
            }
        }
    }
    showResults(result)
    return result
}

//Exibir os números divisíveis por 8 em sampleArray: (712, 456, …, 472)
function kata13() {
    let result = []
    for(let i=21; i<=940; i++){
        for(let j=0;j<=20;j++){
            if(i===sampleArray[j] && i%8===0){
                result.push(i)
            }
        }
    }
    showResults(result)
    return result
}

//Exibir o quadrado de cada elemento de sampleArray. (219961, 570025, …, 222784)
function kata14() {
    let result = []
    let quadradoArr
    for(let i=21; i<=940; i++){
        for(let j=0;j<=20;j++){
            if(i===sampleArray[j]){
                quadradoArr = i*i
                result.push(quadradoArr)
            }
        }
    }
    showResults(result)
    return result
}

//Exibir a soma de todos os números de 1 a 20.
function kata15() {
    let result = 0
    for(let i=1; i<=20; i++){
        result +=i
    }
    showResults(result)
    return result
}

//Exibir a soma de todos os elementos de sampleArray.
function kata16() {
    let result = 0
    for(let i=21; i<=940; i++){
        for(let j=0;j<=20;j++){
            if(i===sampleArray[j]){
                result +=  i
            }
        }
    }
    showResults(result)
    return result
}

//Exibir o menor elemento de sampleArray.
function kata17() {
    let result = []
    for(let i=21; i<=940; i++){
        for(let j=0;j<=20;j++){
            if(i===sampleArray[j]){
                result.push(i)
            }
        }
    }
    showResults(result[0])
    return result[0]
}

// Exibir o maior elemento de sampleArray.
function kata18() {
    let result = []
    for(let i=21; i<=940; i++){
        for(let j=0;j<=20;j++){
            if(i===sampleArray[j]){
                result.push(i)
            }
        }
        if(result[0]<i){
            result.pop()
        }
    }
    showResults(result[0])
    return result[0]
}
kata1();
kata2();
kata3();
kata4();
kata5();
kata6();
kata7();
kata8();
kata9();
kata10();
kata11();
kata12();
kata13();
kata14();
kata15();
kata16();
kata17();
kata18();
/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
