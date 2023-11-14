import client from './client';

const optionsUrl = 'https://anatoly-mook.com/wp-json/acf/v2/options';

export const getOptions = async () => {
    try {
        const data = await fetch(optionsUrl);
        const { acf } = await data.json();
        return acf;
    } catch (error) {
        console.log(error);
    }
};
