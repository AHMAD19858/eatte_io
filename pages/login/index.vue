<template>

<div class="h-screen md:flex">
	<div
		class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-primary-color to-[#CC4D2C] i justify-around items-center hidden">
		<div>
			<h1 class="text-white font-bold text-4xl font-sans">Welcome to EATTE</h1>
			<p class="text-white mt-1">What you need to manage your business in one software!</p>
		<!-- 	<button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button> -->
		</div>
		<div class="absolute -bottom-[14rem] -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-[14rem] -right-[60px] w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>

	</div>
	<div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form class="bg-white w-[60%]">
			<h1 class="text-gray-800  text-2xl mb-1 text-center font-montse font-semibold text-[45px] w-max">Welcome Back</h1>
			<p class="text-sm font-normal  mb-7 text-center mt-5 font-montse text-[#3F4440]">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui 
        blanditiis praesentium voluptatum deleniti atque 
        corrupti quos dolores
      </p>


					<div class="flex items-center border-2 py-2 px-3 rounded-lg mb-4">
			
						<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
      </div>
						<div class="flex items-center border-2 py-2 px-3 rounded-lg">

							<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
      </div>
      <div class="flex justify-between my-3">
      <!--           <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer" for="checkboxDefault">Remember me
                  <input
        class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-white outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
        type="checkbox"
        value=""
        id="checkboxDefault" />
                </span> -->
                <label class="text-sm hover:text-blue-500 cursor-pointer" for="checkboxDefault">
                  
                <input type="checkbox" class="text-sm ml-2 hover:text-blue-500 cursor-pointer" for="checkboxDefault" checked>
                <span class="ml-2 text-gray-700">Remember me</span>
            </label>
                <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
              </div>
							<button type="submit" class="block w-full bg-gradient-to-tr from-primary-color to-[#CC4D2C] mt-4 py-2 rounded-[10px] text-white font-semibold mb-2">Login</button>
						
              <div class="flex my-3 justify-center gap-1">
                <p class="text-sm  hover:text-blue-500 cursor-pointer">Don't have an account? </p>
                <p class="text-sm  hover:text-blue-500 cursor-pointer">Create free account</p>
              </div>
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
body, html {
  height: 100%;
  margin: 0;
}

.bgimg {
/*   background-image: url('/w3images/forestbridge.jpg'); */
  height: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
}

.topleft {
  position: absolute;
  top: 0;
  left: 16px;
}

.bottomleft {
  position: absolute;
  bottom: 0;
  left: 16px;
}

.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

hr {
  margin: auto;
  width: 40%;
}
</style>