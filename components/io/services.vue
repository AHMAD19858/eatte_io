<script setup>
const props = defineProps({
  items: Array,
  numbers: Number,
});
</script>

<template>
  <div>
    <div class="pos_helps">
      <div class="bg-background-color dark:bg-dark-background-color">
        <div :class="numbers === 3 ? 'cards_container' : 'small_container'">
          <article v-for="(item, index) in items" :key="index">
            <a
              rel="noopener noreferrer"
              href="#"
              class="self-center"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <div class="card_container">
                <img :src="item.img" class="phone_icon" alt="svg" />
              </div>
            </a>
            <div class="p-4">
              <h3 class="main_card_text">{{ item.label }}</h3>
              <p class="sub_text">
                {{ item.desc }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  /* padding: 0 70px; */
  margin: 0 auto;
}
.pos_helps {
  width: 100%;
  padding: 0 80px;
  margin: 0 auto;
  @apply bg-background-color dark:bg-dark-background-color;
}
.small_container {
  @apply max-w-[1200px] mx-auto px-5 bg-background-color md:grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-2 w-[66%] dark:bg-dark-background-color;
}
.cards_container {
  @apply max-w-[1200px] mx-auto px-5 bg-background-color md:grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3 dark:bg-dark-background-color;
}

article {
  @apply flex flex-col bg-white rounded-2xl my-3 dark:bg-[#272727] h-[300px];
}

.card_container {
  @apply w-12 h-12 bg-[#ff613729] rounded-lg flex items-center m-4;
}

.main_card_text {
  @apply flex-1 leading-snug text-[17px] font-bold font-montse text-center text-primary-color;
}

.phone_icon {
  @apply stroke-primary-color w-12 h-6 text-center text-3xl text-primary-color;
}
.sub_text {
  @apply mt-4 font-montse text-center text-[#3F4440] font-normal text-base dark:text-white;
}

@media (max-width: 576px) {
  .cards_container {
    @apply max-w-[1200px] mx-auto  bg-white md:grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3;
  }

  article {
    background-color: var(--background);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    height: 330px;
    margin-bottom: 0.75rem;
    margin-top: 0.75rem;
    
  }
  .small_container {
    width: unset;
  }
  .pos_helps {
    padding: unset;
  }
}
</style>
