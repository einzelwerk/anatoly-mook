import client from './client';

export const getPages = async () => {
    try {
        const { data } = await client.get('pages').json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
