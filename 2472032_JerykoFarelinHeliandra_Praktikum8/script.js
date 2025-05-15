function startQuiz(){
    let check = 0;
    let total = 0;
    let input = "";
    while(true){
        let num = Math.floor(Math.random() * 20) + 1;
        let num2 = Math.floor(Math.random() * 20) + 1;
        let opNum = Math.floor(Math.random() * 3) + 1;
        let operator;
        let jwb;
        if(opNum === 1){
            operator = '+';
            jwb = num + num2;
        } else if(opNum === 2){
            operator = '-';
            jwb = num - num2;
        } else {
            operator = '*';
            jwb = num * num2;
        }
        let input = prompt("What is " + num + " " + operator + " " + num2 + " ?");
        if(input === null){
            break;
        }
        let cond = input.toLowerCase();
        if(cond === "exit"){
            break;
        }
        if(cond === "cancel"){
            break;
        }
        total += 1;
        let userAnswer = parseFloat(input);
        if(Math.abs(userAnswer - jwb) < 0.0001){
            alert("Correct!");
            check += 1;
        } else {
            alert("Incorrect. The correct answer is " + jwb + ".");
        }
    }
    if(confirm("You got " + check + " out of " + total + ". Show results on page?")){
        let hasil = document.getElementById("result");
        hasil.textContent = "Final score: " + check + "/" + total;
        hasil.style.display = "block";
        let tanggal = document.getElementById("date");
        let now = new Date();
        let day = now.getDate();
        let month = now.getMonth() + 1; 
        let year = now.getFullYear();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let fixdate = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
        tanggal.textContent = "Finished at: " + fixdate;
        tanggal.style.display = "block";
    }
}