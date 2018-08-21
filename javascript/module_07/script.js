'user strict'

/*
  Создайте функцию createPostCard(), которая 
  создает и возвращает DOM-узел карточки поста.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const createPostCard = ({img, title, text, link}) => {
  const post = document.createElement('div');
  post.classList.add('post');
  
  const image = document.createElement('img');
  image.classList.add('post__image');
  image.setAttribute('src', img);
  image.setAttribute('alt', 'post image');

  
  const postTitle = document.createElement('h2');
  postTitle.classList.add('post__title');
  postTitle.textContent = title;
  
  const postText = document.createElement('p');
  postText.classList.add('post__text');
  postText.textContent = text;
  
  const btnLink = document.createElement('a');
  btnLink.classList.add('button');
  btnLink.setAttribute('href', link);
  btnLink.textContent = 'Read more';
  
  post.append(image, postTitle, postText, btnLink);
  
  return post;
}

const createCards = posts => {
  const elements = posts.map(post => createPostCard(post));

  return elements;
}

const postGrid = document.querySelector('.post-grid');

const cards = createCards(posts);

postGrid.append(...cards);