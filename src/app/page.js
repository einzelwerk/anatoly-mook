import { getHeroData } from './actions/getHeroData';

export default async function Home() {
    const { heroData } = await getHeroData();
    return <div className="">{heroData}</div>;
}
