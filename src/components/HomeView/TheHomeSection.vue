<template>
<section class="home _row">
  <div class="_column headers">
    <h1>Веб-конструктор</h1>
    <h2>Приложение для разработки макетов</h2>
    <p>Данный проект разработан специально для Института Развития Персонифицированных Систем Управления в качестве тестового задания</p>
    <div class="_row">
      <RouterLink class="_btn" to="/builder" title="$i18n('home.galleryLink')">
        <small>Перейти к Конструктору</small>
      </RouterLink>
      <RouterLink class="_btn" to="/about" title="$i18n('home.galleryLink')">
        <small>О проекте</small>
      </RouterLink>
    </div>
  </div>
  <div class="logo-wrapper _center">
    <img src="@/assets/img/logo.png" alt="Logo">
  </div>
</section>
</template>

<style scoped lang="scss">
.home {
  width: 100%;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }
}

.home ._row{

  @media (max-width: 400px) {
    flex-direction: column;
  }
}

.logo-wrapper {
  img {
    filter: drop-shadow(0 0 10rem var(--accent-c));
    width: 350px;
    height: auto;
  }

  @media (max-width: 750px) {
    img { width: 70%; }
  }
}

.headers {
  align-items: flex-start;

  h1 { font-size: 4rem; }
  h2 { font-size: 2rem; }
  p { font-size: 1.2rem; }

  @media (max-width: 1200px) {
    h1 { font-size: 3rem; }
    h2 { font-size: 1.5rem; }
    p { font-size: 1rem; }
  }

  @media (max-width: 900px) {
    order: 2;
    align-items: center;
    text-align: center;

    h1 { font-size: 2.5rem; }
    h2 { font-size: 1.5rem; }
    p { font-size: 1rem; }
  }

  @media (max-width: 575px) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.2rem; }
    p { font-size: 1rem; }
  }
}
</style>
