export function getHeroData() {
    return fetch('https://anatoly-mook.com/wp-json/wp/v2/pages/64').then(
        (res) => res.json(),
    );
}
