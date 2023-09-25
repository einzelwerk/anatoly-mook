import { getPageData } from '@/api/getPageData';
import RenderBlock from '@/components/RenderBlock';

export default async function Home() {
    const { acf } = await getPageData(64);

    return (
        <div>
            {acf.pagebuilder.map((item) => {
                return (
                    <RenderBlock
                        key={item.title}
                        id={item.title}
                        type={item.acf_fc_layout}
                        data={item}
                    ></RenderBlock>
                );
            })}
        </div>
    );
}
