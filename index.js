const userInputElement = document.getElementById("user-input-number");

userInputElement.addEventListener('change', () => {
    printStars(Number(userInputElement.value));
});

function printStars(num) {
    for (let i=1; i <= num; i++) {
       let numOfStars = ((i+1)**2);
       let starsInRow = 0;
       for (let j=1; j<=numOfStars; j++) {
           if (starsInRow === (i+1)) {
               document.write("<br>");
               starsInRow = 0;
           }
           document.write('*');
           starsInRow += 1;
       }
       document.write("<br><br>");
    }
}