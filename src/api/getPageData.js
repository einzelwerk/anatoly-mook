import client from './client';

export const getPageData = async (id) => {
    try {
        const { data } = await client.get(`pages/${id}`).json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
