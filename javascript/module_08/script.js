'use strict';

// 🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2

// Реализуйте функционал:

//   - image-gallery есть изначально в HTML-разметке, как контейнер для компонента.

//   - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
//     создается динамически при загрузке страницы.

//   - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
//     он содержит ссылку на большое изображение. preview и его элементы, также создаются
//     динамически, при загрузке страницы.

//   - При клике в элемент preview, необходимо подменить src тега img внутри fullview
//     на url из data-атрибута выбраного элемента.

//   - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.

//   - Изображений может быть произвольное количество.

//   - Используйте делегирование для элементов preview.

//   - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.

//   - CSS-оформление и имена классов на свой вкус.

// 🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
//   размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
//   Подберите изображения одинаковых пропорций.

// Массив объектов с данными для создания компонента выглядит следующим образом.
// Замените пути на соотвествующие вашим, или назовите изображения аналогично.

{/* <div class="fullview">

<img src="img/fullview-1.jpeg" alt="alt text 1">
</div>

<ul class="preview">
<li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
<li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
<li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
<li><img src="img/preview-4.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
<li><img src="img/preview-5.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
<li><img src="img/preview-6.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
</ul> */}

const galleryItems = [
  {
    preview: 'img/preview-1.jpeg',
    fullview: 'img/fullview-1.jpeg',
    alt: 'alt text 1',
  },
  {
    preview: 'img/preview-2.jpeg',
    fullview: 'img/fullview-2.jpeg',
    alt: 'alt text 2',
  },
  {
    preview: 'img/preview-3.jpeg',
    fullview: 'img/fullview-3.jpeg',
    alt: 'alt text 3',
  },
  {
    preview: 'img/preview-4.jpeg',
    fullview: 'img/fullview-4.jpeg',
    alt: 'alt text 4',
  },
  {
    preview: 'img/preview-5.jpeg',
    fullview: 'img/fullview-5.jpeg',
    alt: 'alt text 5',
  },
  {
    preview: 'img/preview-6.jpeg',
    fullview: 'img/fullview-6.jpeg',
    alt: 'alt text 6',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const createElem = (el, attributes = {}) => {
    const elem = document.createElement(el);

    for (const attributeName in attributes) {
      elem.setAttribute(attributeName, attributes[attributeName]);
    }

    return elem;
  };

  const createFullviewImg = ({ preview, fullview, alt }) => {
    const fullviewWrapp = createElem('div', { class: 'fullview' });

    const imgAttrs = {
      src: fullview,
      alt: alt,
    };

    const fullviewImg = createElem('img', imgAttrs);

    fullviewWrapp.append(fullviewImg);

    return fullviewWrapp;
  };

  const createPreviewList = () => {
    const previewList = createElem('ul', { class: 'preview' });

    return previewList;
  };

  const createPreviewListItem = ({ preview, fullview, alt }) => {
    const listItem = createElem('li');

    const imgAttrs = {
      src: preview,
      'data-fullview': fullview,
      alt: alt,
    };

    const listItemImg = createElem('img', imgAttrs);

    listItem.append(listItemImg);

    return listItem;
  };

  const createPreviewListItems = images => {
    const elements = images.map(image => createPreviewListItem(image));

    return elements;
  };

  const imageGallery = document.querySelector('.js-image-gallery');

  const fullviewImg = createFullviewImg(galleryItems[0]);

  const previewList = createPreviewList();

  const previewListItems = createPreviewListItems(galleryItems);

  previewList.append(...previewListItems);

  imageGallery.append(fullviewImg, previewList);

  previewList.addEventListener('click', handleChangeFullviewImageSrc);

  function handleChangeFullviewImageSrc({ target }) {
    const targetImgFullwiew = target.dataset.fullview;
    const targetImgAlt = target.alt;
    const nodeName = target.nodeName;

    if (nodeName !== 'IMG') return;
    const fullViewImg = imageGallery.querySelector('img');

    fullViewImg.src = targetImgFullwiew;
    fullViewImg.alt = targetImgAlt;
  }
});
