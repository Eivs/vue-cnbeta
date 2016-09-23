export default (() => {
  return {
    router: (router) => {
      router.map({
        '*': {
          component (resolve) {
            require(['./views/NoFound'], resolve)
          }
        },
        '/': {
          component (resolve) {
            require(['./views/index'], resolve)
          }
        },
        '/articles/:sid': {
          component (resolve) {
            require(['./views/NewsContent'], resolve)
          }
        }
      })
    }
  }
})()
