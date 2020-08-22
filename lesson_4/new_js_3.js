/*Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.*/
'use strict';

Post.prototype.edit = function() {
    this.text = prompt('Введите текст: ');
}

Post.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
    return this.highlighted;
}

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);


const newPost = new Post('me', 'hello', '21.08.2020');
newPost.edit();
const newPost2 = new AttachedPost('you', 'hey', '22.08.2020');
newPost2.makeTextHighlighted();
console.log('w8');