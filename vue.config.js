module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about',
        '/faq'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
