import React from 'react';
import  directus  from '@/lib/directus'; // Założenie, że masz odpowiednią instancję Directus
import { readItems } from '@directus/sdk';
import Image from 'next/image';
import { getAssetUrl } from '@/lib/utils';

const Page = async ({ params }: { params: { slug: string } }) => {
    const pages = await directus.request(readItems('pages', {
        filter: {
            slug: { _eq: params.slug },
        },
        fields: [
            '*',
            {
                blocks: [
                    '*',
                    {
                        item: {
                            block_hero: ['*'],
                            block_cardgroup: ['*'],
                            block_richtext: ['*'],
                        },
                    },
                ],
            },
        ],
        limit: 1,
    })) as unknown as Page[];

    const page = pages[0];

    console.log(page.blocks)
    
    if (!page) {
        return <div>Page not found</div>;
    }

    return (
        <div>
            <h1>{page.title}</h1>
            {page.blocks?.map((block, index) => (
                <div key={index}>
                    {block.collection === 'block_richtext' && (
                        <>
                            <p>{block.collection}</p>
                            
                            <div dangerouslySetInnerHTML={{ __html: block.item.content }} />
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Page;
