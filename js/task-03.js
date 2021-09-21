const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];





const galleryList = document.querySelector("#gallery");
const imgElementAdd = images.map(el => {
     return `<li><img src = "${el.url}" alt = "${el.alt}"  width = "150" height = "100" /></li>`
     });

galleryList.insertAdjacentHTML('afterbegin', imgElementAdd);

galleryList.setAttribute("style", "list-style-type:none; display: flex;");


/*const elementGallery = document.querySelector('#gallery')

const galleryElement = ({ url, alt }) => {
    return `<li style="list-style: none;">
    <img src="${url}" alt="${alt}" style="width: 120px; display:">
    </li>`;
};

const imgElementAdd = images.map(galleryElement).join("");
elementGallery.insertAdjacentHTML("beforeend", imgElementAdd);*/

/*for(let el of images) document.querySelector('#gallery').insertAdjacentHTML('afterbegin', `<li><img src="${el.url}" alt="${el.alt}"></li>`);
*/

/*const createGalleryItem = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width = 200 height = 150></li>`;
const galleryMarkup = images.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ""
);
const galleryList = document.querySelector("#gallery");
galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryList.setAttribute("style", "list-style-type:none; display: flex;");*/
