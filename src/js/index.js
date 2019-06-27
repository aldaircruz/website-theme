import 'instant.page';
import './lib/prism';

import './components/darkMode';
import './components/feature-image';
import './components/koeing-gallery';
import './components/blogcast-whitelabel';
import './components/article-listings';
import './components/newsletter';

Array.from(document.getElementsByTagName('a')).forEach(link => {
    link.addEventListener('transitionrun', () => {
        if (isHovered(link)) {
            link.style.transition = 'none'
        }
    });

    link.addEventListener('mouseout', () => {
        setTimeout(() => {
            link.style.transition = null
        }, 1000)
    });
})

function isHovered(el) {
    return (el.parentElement.querySelector(':hover') === el);
}