<template>
  <section id="about" :class="$style.about" class="bg-cloud md:bg-none">
    <div class="container pt-16 flex flex-col items-center" >
      <h2 data-aos="fade-up">О мастере</h2>
      <img src="/ph.webp" class="mx-auto" width="306" height="306" loading="lazy" data-aos="fade-up" />
      <div class="font-bold text-2xl pb-4" data-aos="fade-up">Ирина Пархоменко</div>
      <div :class="$style.about__text" data-aos="fade-up">
        Меня зовут Ирина! <br />Я дипломированный мастер ногтевого сервиса!
        Опыт работы 11 лет.
        Работаю только качественными материалами производства США 🇺🇸 и Германия 🇩🇪
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
.about {
  @apply relative;
  background-color: #FEF0EB;

  h2 {
    @apply font-bold text-4xl text-center pb-4;
  }

  &__text {
    @apply text-center px-6 text-lg;
    max-width: 20rem;
  }
}
</style>
