module.exports = function reverse (n) {
      module.exports = function reverse(n) {
        if (n > 0) {
            // Преобразовываю номер в строку
            // let string = String(n);

            // Преобразовываю строку в массив
            // let split = string.split("");

            // Изменяю порядок следования массива
            // let reverse = split.reverse();

            // Создаю строку из элементов массива
            // return reverse.join("");

            return String(n).split("").reverse().join("");
        }

        if (n < 0) {
            n = -n;

            return String(n).split("").reverse().join("");
        }
    }
}
