// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  ssr: false,
  // app: {
  //   head: {
  //     script: [
  //       { src: "https://raw.githubusercontent.com/robin-dela/flowmap-effect/master/js/bundle.js" }, 
  //       { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" }
  //     ],
  //   },
  // },
  devtools: { enabled: false },
  css: ["@/assets/sass/main.scss"],
  components: true,
  // plugins: [
  //   {
  //     src: "~/plugins/locomotive.min.js"
  //   }
  // ]
})

