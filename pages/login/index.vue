<template>
  <div class="h-screen md:flex ">
    <div
      class="left_side">
      <div class="text-center">
        <h1 class="slogan">Welcome to EATTE</h1>
        <p class="sub_slogan">What you need to manage your business in one software!</p>
        <div class=" mt-[185px] ml-[120px]">
          <div class="flex ">
            <img src="../../assets/images/star.svg" alt="">
            <img src="../../assets/images/star.svg" alt="">
            <img src="../../assets/images/star.svg" alt="">
            <img src="../../assets/images/star.svg" alt="">
            <img src="../../assets/images/star.svg" alt="">
          </div>
          <div>
            <p class="testmonial">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti quos dolores</p>
          </div>
          <div class="person_div">
            <img src="https://source.unsplash.com/50x50/?portrait?1" alt=""
              class="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500">
            <div>
              <p class="name">Ahmed</p>
              <p class="title">Co-Founder, Eatte.io</p>
            </div>
          </div>
        </div>

      </div>
      <div class="circle_top"></div>
      <div class="circle_bottom"></div>

    </div>
    <div class="right_side">
      <form class=" form_section">
        <h1 class=" welcome">
          Welcome Back!
        </h1>
        <p class=" sub_text">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque
          corrupti quos dolores
        </p>


        <p class=" label">Email Address</p>
        <div class="input_div">
          <input class="login_input" type="text" name="" id="" placeholder="enter your email address" />
        </div>
        <p class="label">Password</p>
        <div class="input_div">

          <input class="login_input" 
          type="text" 
          name=""
           id="" 
          placeholder="enter your password" />
        </div>
        <div class="flex justify-between my-3">

          <label class="text-sm cursor-pointer" for="checkboxDefault">

            <input type="checkbox" class="text-sm ml-2 cursor-pointer" for="checkboxDefault" >
            <span class="ml-2 text-gray-700 font-montse dark:text-white">Remember me</span>
          </label>
          <span class="forgot_text">Forgot Password ?</span>
        </div>
        <button type="submit"
          class="login_btn">Login</button>

   
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'outside'
})
</script>

<style scoped>
.left_side{
  @apply relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-primary-color to-[#CC4D2C]  justify-around items-center hidden
}
.slogan{
  @apply text-white font-bold text-4xl font-montse
}

.sub_slogan{
  @apply text-[#F5F6FA] mt-1 font-montse font-medium
}

.testmonial{
  @apply text-white mt-1 text-left

}
.person_div{
  @apply flex items-center mt-4 space-x-4
}

.name{
  @apply text-lg font-semibold text-left text-white
}

.title{
  @apply text-sm  text-[#F5F6FA] font-montse font-normal
}

.circle_top{
  @apply  opacity-10 absolute -bottom-[14rem] -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8
}

.circle_bottom{
  @apply opacity-10 absolute -top-[14rem] -right-[60px] w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8
}

.right_side{
  @apply flex md:w-1/2 justify-center py-10 items-center bg-background-color dark:bg-dark-background-color
}

.form_section{
  @apply w-[60%] bg-background-color dark:bg-dark-background-color
}

.welcome{
  @apply pb-4 text-gray-800  text-2xl mb-1 text-center font-montse font-semibold text-[45px] w-max dark:text-white
}

.sub_text{
  @apply mb-[50px] text-sm font-normal   text-left mt-5 font-montse text-[#3F4440] dark:text-white
}

.label{
  @apply font-montse text-[#93A3B0CC] text-base my-1
}

.input_div{
  @apply dark:border-solid dark:border-[#93A3B029] dark:border-2  flex items-center border-2 py-2 px-3 rounded-lg mb-4
}

.login_input{
  @apply  w-full bg-transparent pl-2 outline-none border-none
}

.forgot_text{
@apply text-sm ml-2 cursor-pointer text-primary-color font-normal font-montse
}

.login_btn{
  @apply font-montse block w-full bg-gradient-to-tr from-primary-color to-[#CC4D2C] mt-4 py-2 rounded-[10px] text-white font-semibold mb-2
}


</style>