<template>
  <section>
    <div>
      <h1 class="title">
        Kategori
      </h1>
      <ul class="categories">
        <li
          v-for="category in this.$store.state.globalData.categories"
          :key="category._id"
        >
          <router-link
            v-if="category.slug"
            :to="'/category/' + category.slug.current"
          >
            {{ category.title }}
            <SanityImage
              v-if="category.logo"
              :image="category.logo"
              class="image"
            />  
          </router-link>       
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import SanityImage from "~/components/SanityImage"

export default {
  components: {
    SanityImage
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

li {
  display: block;
}
a {
  padding: 1em;
  display: block;
  font-size: 1em;
  text-decoration: none;
  text-align: center;
}

@media only screen and (min-width: 500px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }

  a {
    font-size: 2em;
  }
}

.image {
  display: block;
  max-height: 5em;
  max-width: 10em;
  margin: 0 auto;
}
</style>
