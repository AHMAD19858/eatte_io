export default defineEventHandler(async (event) => {
  const { email, password } = getQuery(event);
  const response = await $fetch(
    `https://hubbucs.com/site/api/eatte/login.php?device_type=2&app_id=1&email=${email}&password=${password}`
  );
  let res;
  let _res = JSON.parse(response)
  if (_res.error) {
    res = {
      status: false,
      err: _res.error,
    };
  } else {
    res = {
      status: true,
      res: _res,
    };
  }
  return res;

  //   return {
  //     message: `email:${email} | pass:${password}`,
  //     res: JSON.parse(response),
  //   };
});
