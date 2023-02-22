export default defineNuxtRouteMiddleware((to, from) => {
    const isloggedIn = false

    if (!isloggedIn) {
        return navigateTo('/404')
       
    }

  
  })
