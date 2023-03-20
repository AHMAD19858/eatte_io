export default defineEventHandler(async(event) => {

   const runTime = useRuntimeConfig()
   const response = await fetch(`${runTime.app.baseURL}`/hubb/login)
   return {
      "message": response.json()
   }
})