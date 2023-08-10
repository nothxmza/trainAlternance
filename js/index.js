const listeMots = ['cachalot', 'str3', 'str6']

let score = 0;
let i = 0;
while(listeMots.length > i) {
    let result = prompt(`Entrez le mot : ${listeMots[i]}`);
    if(result === listeMots[i]) {
        score++;
    }
   i++;
}

console.log(score)