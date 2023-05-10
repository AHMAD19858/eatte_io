export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const res:any = await $fetch(config.apiSecret + '/wizard/payment_plans',{
        method:'POST',
        headers:{
            'Api-Key':'123123'
        }
    });
    if(res.code == 200){
        return res.data
    }
})