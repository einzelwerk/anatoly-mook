import client from './client';

export const getGlobals = async () => {
    try {
        const data = await client.get('logoHeader/url').json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
