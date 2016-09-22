export default (() => {
  return {
    router: (router) => {
      router.map({
        '*': {
          component (resolve) {
            require(['./views/nofound'], resolve)
          }
        },
        '/': {
          component (resolve) {
            require(['./views/index'], resolve)
          }
        }
      })
    }
  }
})()
