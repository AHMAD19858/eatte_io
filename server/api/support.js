export default defineEventHandler(async (event) => {
   const { firstName, lastName, email, phone, message } = getQuery(event);
   const response = await $fetch(
      `https://hubbucs.com/site/api/add_ticket?key=042022190201Tquam2212&ticket_project=Eatte&ticket_type=support&email=${email}&phone=${phone}&fullname=${firstName + lastName}&ticket_summary=${message}`);
   let res;
   console.log('response', response)
   if (response) {
      res = {
         status: true,
         res: response,
      };
   }
   return res;
});
