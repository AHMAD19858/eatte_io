export default defineEventHandler(async (event) => {
    const { email } = getQuery(event);
    const response = await $fetch(
      `https://hubbucs.com/site/api/eatte/forget_login.php?device_type=2&app_id=1&email=${email}` );
    let res;
    let _res = JSON.parse(response)
    if (_res.ForgotPasswordFailure) {
      res = {
        status: false,
        err: _res.ForgotPasswordFailure,
      };
    } else {
      res = {
        status: true,
        res: _res,
      };
    }
    return res;
  });
  