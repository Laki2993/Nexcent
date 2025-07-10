export default defineEventHandler(async (event) => {

    const cards = [
        {
            id:1,
            Description: 'Creating Streamlined Safeguarding Processes with OneRen',
            imgeUrl:'/assets/Carin1.png'
        },
                {
            id:2,
            Description: 'What are your safeguarding responsibilities and how can you manage them?',
            imgeUrl:'/assets/Carin2.png'
        },
        {
            id:3,
            Description: 'Revamping the Membership Model with Triathlon Australia',
            imgeUrl:'/assets/Carin3.png'
        },
    ]

    await new Promise(resolve => setTimeout(resolve, 1000) );
        
    return cards;
})