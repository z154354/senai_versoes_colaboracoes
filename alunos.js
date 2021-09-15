const quantidadedealunos = 14;

for (let index = 0; index <= quantidadedealunos; index ++) {
    if (index === 0){
        console.log('o numero e zero');
    }else if (index % 2 === 0) {
        console.log('o numero e par' + index);
    } else {
        console.log('o numero e impar' + index);
    }
}