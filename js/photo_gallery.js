function add_photo(title, thumb, url) {
    const img = document.createElement("img");
    img.classList.add("col-md-3", "items-photos");
    img.src = thumb;
    img.alt = url;

    document.querySelector('.photos').appendChild(img);
}

function load_page(page_num) {
    document.querySelector('.photos-spinner').setAttribute('style', 'display: block;');
    let url = 'https://jsonplaceholder.typicode.com/photos?_limit=8&_page=' + page_num;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (let item of data) {
                add_photo(item['titile'], item['thumbnailUrl'], item['url'])
            }
            document.querySelector('.photos-spinner').setAttribute('style', 'display: none;');
        }).catch((error) => {
            alert(error);
    })

}

let pagenum = 1;

document.querySelector('#load-photos-btn').addEventListener("click", function () {
    pagenum++;
    load_page(pagenum);
})