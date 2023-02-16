// Функция для фильра

const filterBox = document.querySelectorAll('.box');

document.querySelector('.filterbox').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];
    // Добавление класса
    filterBox.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });

});



// Функция для переключения активного элемента

const tmdBtn = document.querySelectorAll(".spisok");

tmdBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;

        tmdBtn.forEach(function(item) {
            item.classList.remove("active");
        });

        currentBtn.classList.add("active");
    });
});