function upDate(previewPic) {
    const imageElement = document.getElementById('image');
    const newSrc = previewPic.src ? `url('${previewPic.src}')` : '';

    imageElement.style.backgroundImage = newSrc;
    imageElement.innerHTML = previewPic.alt || '';
}

function unDo() {
    const imageElement = document.getElementById('image');

    imageElement.style.backgroundImage = "url('')";
    imageElement.innerHTML = "Hover over an image below to display here.";
}
