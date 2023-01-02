//connecting to the sanity backend.


import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client=sanityClient({
    projectId:'shvrsja1',
    dataset:'production',
    apiVersion:'2023-01-02',
    useCdn:true,
    token:'sk8Hz7Rfmz9b6gAT7iDmJ6dAaGQc8saN1zY7HabvBDdE5Wv3lLIzOQ7ZxUo3XEgjns81mxkuRLzRZty0w8aQogFLeE6R1epZHdTPAVy9DPa3EUReEwkeLRTyzJtkgFhoNdtJS4s9M0NjsjNnnswqUdIZdf16SLpkTOBIfxYGgMuP1Uh9mvjx'
});

const builder=imageUrlBuilder(client);

//utility function for images.
export const urlFor=(source)=>builder.image(source);

