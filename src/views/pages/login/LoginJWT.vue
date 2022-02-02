<template>
  <div>
    <vs-input
      v-validate="'required|email|min:3'"
      data-vv-validate-on="blur"
      name="email"
      icon-no-border
      icon="icon icon-user"
      icon-pack="feather"
      label-placeholder="Email"
      v-model="email"
      class="w-full"
    />
    <span class="text-danger text-sm">{{ errors.first("email") }}</span>

    <vs-input
      data-vv-validate-on="blur"
      v-validate="'required|min:6|max:20'"
      type="password"
      name="password"
      icon-no-border
      icon="icon icon-lock"
      icon-pack="feather"
      label-placeholder="Password"
      v-model="password"
      class="w-full mt-6"
    />
    <span class="text-danger text-sm">{{ errors.first("password") }}</span>

    <div class="flex flex-wrap justify-between my-5">
      <vs-checkbox v-model="checkbox_remember_me" class="mb-3"
        >Remember Me</vs-checkbox
      >
      <router-link to="/pages/forgot-password">Forgot Password?</router-link>
    </div>

    <div class="flex flex-wrap justify-between mb-3">
      <vs-button type="border" @click="registerUser">Register</vs-button>
      <vs-button :disabled="!validateForm" @click="loginJWT">Login</vs-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: 'castro2354@gmail.com',
      password: '231154',
      checkbox_remember_me: false
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.email !== '' && this.password !== ''
    }
  },
  methods: {
    checkLogin () {
      return new Promise(resolve => {
        this.$store.state.auth.isUserLoggedIn().then(async value => {
          if (value) {
            const pass = await this.getUserInfo()

            if (pass) {
              this.$vs.notify({
                title: 'Login Attempt',
                text: 'You are already logged in!',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'warning'
              })

              resolve(true)
            } else {
              resolve(false)
            }
          } else {
            resolve(false)
          }
        })
      })
    },
    loginJWT () {
      // if (!this.checkLogin()) return

      // // Loading
      //this.$vs.loading()

      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        userDetails: {
          email: this.email,
          password: this.password
        }
      }
      this.$router.push('/dashboard/analytics').catch(() => {})

      // this.$store
      //   .dispatch('auth/loginUserJwt', payload)
      //   .then(value => {
      //     if (value.token !== '') {
      //       console.log(value.token)

      //       setTimeout(() => {
      //         this.$vs.loading.close()
      //         this.getUserInfo()
      //           .then(isValid => {
      //             if (isValid) {
      //               console.log('Is_LOGGIN')
      //               this.$router.push('/dashboard/analytics').catch(() => {})
      //             }
      //           })
      //           .catch(error => {
      //             this.$vs.notify({
      //               title: 'Error',
      //               text: error.message,
      //               iconPack: 'feather',
      //               icon: 'icon-alert-circle',
      //               color: 'danger'
      //             })
      //           })
      //         ///dashboard/analytics
      //       }, 2000)
      //     } else {
      //       setTimeout(() => {
      //         this.$vs.loading.close()
      //         this.$vs.notify({
      //           title: 'Error',
      //           text: value.msg,
      //           iconPack: 'feather',
      //           icon: 'icon-alert-circle',
      //           color: 'danger'
      //         })
      //       }, 1000)
      //     }
      //   })
      //   .catch(error => {
      //     this.$vs.loading.close()

      //     setTimeout(() => {
      //       this.$vs.notify({
      //         title: 'Error',
      //         text: error.message,
      //         iconPack: 'feather',
      //         icon: 'icon-alert-circle',
      //         color: 'danger'
      //       })
      //     }, 500)
      //   })

      // this.$store
      //   .dispatch('auth/loginJWT', payload)
      //   .then(() => {
      //     ç
      //   })
      //   .catch(error => {
      //     this.$vs.loading.close()
      //     this.$vs.notify({
      //       title: 'Error',
      //       text: error.message,
      //       iconPack: 'feather',
      //       icon: 'icon-alert-circle',
      //       color: 'danger'
      //     })
      //   })
    },
    getUserInfo () {
      return new Promise(resolve => {
        //console.log('-- GetInfo')
        this.$store
          .dispatch('auth/getInfoUser', '')
          .then(value => {
            //console.log(value)
            resolve(true)
          })
          .catch(error => {
            resolve(false)
          })
      })
    },
    registerUser () {
      if (!this.checkLogin()) return
      this.$router.push('/pages/register').catch(() => {})
    }
  },
  mounted () {
    //setTimeout(() => {}, 1000)
  },
  beforeMount () {
    setTimeout(async () => {
      const isValid = await this.checkLogin()
      if (isValid) {
        this.$router.push('/dashboard/analytics').catch(() => {})
      }
    }, 2000)
  }
}
</script>

