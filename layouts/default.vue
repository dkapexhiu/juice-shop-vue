<template>
  <div class="root">
    <header id="headerDesktop">
      <div id="headerInner">
        <router-link :to="'//suko.al/'" class="logo">
          <AppLogo />
        </router-link>
        <nav>
          <ul>
            <li><router-link :to="'/category'">KATEGORITE E PRODUKTEVE</router-link></li>
            <li><router-link :to="'//suko.al/'">KTHEHU PRAPA</router-link></li>
          </ul>
        </nav>
        <div ref="cart" class="cart">
          <a href="#" class="snipcart-checkout">
            <div class="snipcart-summary">
              🛒
              <span class="snipcart-total-items" /> produkt(e)
              <span class="snipcart-total-price" />
            </div>
          </a>
        </div>
      </div>
    </header>

    <header id="headerMobile" class="header" style="display: none;">
      <router-link :to="'//suko.al/'" class="logo">
        <AppLogo />
      </router-link>	  
      <input id="menu-btn" class="menu-btn" type="checkbox" >
      <label class="menu-icon" for="menu-btn"><span class="navicon"/></label>
      <ul class="menu">
        <li><router-link :to="'/category'">KATEGORITE E PRODUKTEVE</router-link></li>
        <li><router-link :to="'//suko.al/'">KTHEHU PRAPA</router-link></li>
      </ul>
    </header>

    <section class="sidebar">
      <ul class="categories">
        <li
          v-for="category in this.$store.state.globalData.categoryTree"
          v-if="category.slug"
          :key="category._id"
          class="category"
        >
          <router-link :to="'/category/' + category.slug.current">
            {{ category.title }}
          </router-link>
          <ul v-if="category.children" class="sub-categories">
            <li
              v-for="subCategory in category.children"
              v-if="subCategory.slug"
              :key="category._id + subCategory._id"
            >
              <router-link :to="'/category/' + subCategory.slug.current">
                {{ subCategory.title }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="content">
      <nuxt />
    </section>

    <div class="footer">
      <div class="row">
        <div class="column">
          <h2>NA KONTAKTONI</h2>
          <div class="footer-bottom-color border1"/>
          <p class="footer-widgets">Ne duam te marrim feedback nga klientet tane. Na shkruani per ndonje pyetje ose na lini koment.<br>
          <a href="mailto:info@suko.al"><img src="@/static/icons/mail.png"> info@suko.al</a></p>
        </div></p>
        <div class="column">
          <h2>FOLLOW US</h2>
          <div class="footer-bottom-color border2"/>
          <div id="social" class="footer-widgets">
            <a href="https://www.facebook.com/Suko-Organic-533536777053484/"><img src="@/static/icons/facebook.png"> Facebook</a>
            <a href="https://www.instagram.com/suko_organic/"><img src="@/static/icons/insta.jpg" style="height:15px;"> Instagram</a>
            <a href="https://www.snapchat.com/add/suko_organic"><img src="@/static/icons/snap.png" style="height:15px;"> Snapchat</a>
          </div>
        </div>
        <div class="column">
          <h2>MENU</h2>
          <div class="footer-bottom-color border3"/>
          <div id="menu" class="footer-widgets">
            <a href="//suko.al/menu.html">Menu</a>
            <a href="//suko.al/rrethnesh.html">Rreth Nesh</a>
            <a href="//suko.al/franchise.html">Franchise</a>
            <a href="//suko.al/punesim.html">Punesim</a>
            <a href="//suko.al/kontakt.html">Kontakt</a>
          </div>
        </div>
        <div class="column">
          <h2>FRANCHISE</h2>
          <div class="footer-bottom-color border4 footer-widgets" />
          <p>Mundësitë e bashkepunimit tani janë të disponueshme në zonën tuaj. Bashkohuni sot me levizjen tone. <a href="//suko.al/franchise.html">Lexo me teper</a></p>
        </div>
      </div>
      <div class="row">
        <div class="column">
          &copy; 2019 SUKO.AL. TE GJITHA TE DREJTAT E REZERVUARA.
        </div>
        <div class="column" style="float:right;">
          <img src="@/static/logo.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue"

export default {
  components: {
    AppLogo
  },
  mounted() {
    if (!window.Snipcart) {
      throw new Error(
        "Snipcart not found. Make sure snipcart is loaded on page. For more info, see https://docs.snipcart.com/getting-started/installation"
      )
    }
    const cart = this.$refs.cart
    let timeoutId
    window.Snipcart.subscribe("item.adding", () => {
      cart.classList.add("pop")
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        cart.classList.remove("pop")
      }, 220)
    })
  }
}
</script>

<style scoped>
.footer-widgets {
  line-height: 24px;
}

@media only screen and (min-width: 500px) {
  .root {
    display: content;
  }
  section.content {
    width: 40% !important;
    min-height: 550px;
  }
}

.root {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

header {
  grid-area: header;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  background-color: rgb(234, 85, 70);
}

#headerInner {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

section.sidebar {
  grid-area: sidebar;
  text-align: center;
  width: 100%;
  background-color: rgb(71, 110, 102);
}

section.content {
  grid-area: content;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  flex: 1;
}

.snipcart-checkout {
  text-decoration: none;
}

.snipcart-total-price {
  font-weight: 600;
}

.footer {
  grid-area: footer;
  text-align: left;
  padding: 2em;
  border-top: 1px solid #ddd;
  color: white;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(247, 170, 82);
}

.logo {
  display: flex;
  align-items: center;
}

@media only screen and (min-width: 500px) {
  .logo {
    font-size: 1.5em;
    margin-right: 0.25em;
  }
}

nav {
  display: flex;
  align-items: center;
}

nav > ul {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  font-weight: 700;
}

nav > ul > li {
  padding: 0.5em;
}

nav > ul > li > a {
  text-decoration: inherit;
  color: white;
}

.cart {
  padding: 0.5em;
  margin-left: auto;
  transition: all 0.1s ease-in;
  transform: scale(1);
}

.cart.pop {
  color: #3cae21;
  transform: scale(0.9);
}

nav :global(li) {
  display: block;
}

ul.categories {
  font-weight: 500;
  display: none;
  margin: 0 0 0.5rem 0;
  padding: 1rem;
}

.sub-categories {
  padding: 0;
  margin: 0;
  padding-left: 0.8rem;
}

.sub-categories li {
  display: block;
  margin: 0.5em;
  padding: 0;
}

@media only screen and (min-width: 500px) {
  ul.categories {
    display: flex;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
}

.category {
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
}

.category .nuxt-link-active {
  font-weight: 700;
}

ul.categories :global(a) {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-family: "Poppins";
}
.footer .row {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
</style>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.column {
  float: left;
  width: 25%;
  padding: 10px;
  height: auto;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
  #headerInner {
    width: 100% !important;
  }
  .footer .row {
    width: 100% !important;
  }
  #headerDesktop {
    display: none !important;
  }
  #headerMobile {
    display: block !important;
  }
  .header .logo {
    font-size: 2em !important;
  }
  .logo {
    height: auto !important;
  }
  .grid .image {
    height: auto !important;
    margin-bottom: 0rem !important;
    margin-top: 1rem !important;
  }
  section.content {
    margin-top: 30%;
  }
  h1.title {
    text-align: center;
  }
}

#social {
  display: grid;
}

#menu {
  display: grid;
}

a {
  text-decoration: none;
}

.header {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 3;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

.header li a {
  display: block;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}

.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

@media (min-width: 48em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}
</style>
