let deretBil = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
deretBil.forEach(i => {
   if (isFinite(i)) {
      console.log('Angka ' + i + ' NOT Infinity.');
   } else {
      console.log('Angka ' + i + ' Infinity.');
   }
})