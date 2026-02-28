export const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
        e.preventDefault();
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            const navbar = document.querySelector('nav');
            const offset = navbar ? navbar.offsetHeight : 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            window.history.pushState(null, "", href);
        }
    }
};
