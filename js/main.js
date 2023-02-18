/* ***************scroll section active link************** */
const section = document.querySelectorAll('section[id')

function scrollActive() {
    const scrolly = window.pageYOffset

    section.forEach(current => {
        const sectionHeigh = current.offsetHeigh
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrilly > sectionTop && scrollY <= sectionTop + sectionHeigh) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)

/* *************** show scroll top************** */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // when the scroll is higher than 500 viewport innerHeight,add the show-scroll class to the header tag.
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop)



let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});