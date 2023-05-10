import { defineStore } from 'pinia'

export const useUserStore = defineStore('auth', {
  state: () => ({
    user:null,
  }),
  actions:{
    async signIn(email,password){
      const res:any = await $fetch('https://superadmin.stagingserver.io/api/auth/login',{
        method:'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      console.log(res);
      const user = await res.json();
      console.log(user);
      this.user = user

    }
  },
  persist: true,
})