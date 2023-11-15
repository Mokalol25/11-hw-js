function promptAndSumNumbers() {
    let input;
    const numbers = [];
    let total = 0;
    do {
        input = prompt("Введіть число:");
    
        if (input !== null) {
          const number = Number(input);
    
          if (!isNaN(number)) {
            numbers.push(number);
          } else {
            alert("Було введено не число, попробуйте ще раз.");
          }
        }
      } while (input !== null);
    
      if (numbers.length > 0) {
        for (const number of numbers) {
          total += number;
        }
        console.log(`Загальна сума чисел дорівнює ${total}`);
      } else {
        console.log("Масив чисел порожній");
      }
}

promptAndSumNumbers()