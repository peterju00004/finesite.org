const content = document.querySelector(".content");

const pagePath = window.location.pathname;

document.addEventListener('DOMContentLoaded', () => {
    const savedPosition = getScrollPosition(pagePath);
    if (savedPosition) {
        content.scrollTop = parseInt(savedPosition);
    }
});

content.addEventListener('scroll', () => {
    saveScrollPosition(pagePath, content.scrollTop);
});

const saveScrollPosition = (path, position) => {
    try {
        localStorage.setItem(`scrollPos_${path}`, position);
    } catch (e) {
        console.warn('Failed to save scroll position:', e);
    }
}

const getScrollPosition = (path) => {
    try {
        return localStorage.getItem(`scrollPos_${path}`);
    } catch (e) {
        console.warn('Failed to get scroll position:', e);
        return null;
    }
}