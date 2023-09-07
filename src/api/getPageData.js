import client from './client';

export const getPageData = async (slug) => {
    try {
        const { data } = await client.get(`pages/${slug}`).json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
