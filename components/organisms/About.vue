<template>
  <ui-section title="О мастере" bg="cloud bg-cloud-y">
    <img src="/ph.webp" class="mx-auto" width="306" height="306" loading="lazy" data-aos="fade-up"/>
<!--    <nuxt-picture-->
<!--        src="/ph.webp"-->
<!--        format="webp"-->
<!--        loading="lazy"-->
<!--        data-aos="fade-up"-->
<!--        sizes="xs:100vw sm:100vw md:50vw"-->
<!--        placeholder-->
<!--        preload-->
<!--        :img-attrs="{class: 'mx-auto', height: '306', width: '306', alt: 'Ирина Пархоменко'}"-->
<!--    />-->
    <div class="font-bold text-2xl pb-4" data-aos="fade-up">Ирина Пархоменко</div>
    <p data-aos="fade-up">
      Меня зовут Ирина! <br/>Я дипломированный мастер ногтевого сервиса!
      Опыт работы 11 лет.
      Работаю только качественными материалами производства США 🇺🇸 и Германия 🇩🇪
    </p>
  </ui-section>
</template>

<style lang="scss" scoped>
p {
  @apply text-center px-6 text-lg max-w-[20rem];
}
</style>
