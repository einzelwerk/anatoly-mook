import { getPageData } from '@/api/getPageData';
import RenderBlock from '@/components/RenderBlock';

export default async function Home() {
    const { acf } = await getPageData(64);
    // console.log(acf.pagebuilder[0].acf_fc_layout);

    // return (
    //     <RenderBlock
    //         id={data.acf.pagebuilder[0].acf_fc_layout}
    //         type={data.acf.pagebuilder[0].acf_fc_layout}
    //     />
    // );

    {
        acf.pagebuilder.map((item) => {
            return (
                <div
                    key={item.title}
                    id={item.title}
                    type={item.acf_fc_layout}
                    data={item}
                >
                    {JSON.stringify(item.acf_fc_layout)}
                </div>
            );
        });
    }
}
