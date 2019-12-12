<template>
  <section>
    <div>
      <h1 class="title">
        <a href="http://suko.al">
          <img src="@/static/logo2.png" >
        </a>
      </h1>
      <h2 class="subtitle">
        Miresevini ne Suko Organic Shop
      </h2>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo"

export default {
  components: {
    AppLogo
  }
}
</script>

<style scoped>
section {
  background-size: cover;
}

.title,
.subtitle {
  text-align: center;
  padding: 1em;
}

.title {
  font-size: 7vw;
  padding-bottom: 0.5em;
}

.subtitle {
  padding-bottom: 3em;
}
</style>
