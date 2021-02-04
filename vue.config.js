module.exports = {
    pwa: {
        manifestOptions: {
            background_color: '#18181d'
        },
        name: 'Ivar Olsson',
        themeColor: '#e9e7cb',
        workboxOptions: {
            runtimeCaching: [
                {
                    handler: 'NetworkFirst',
                    options: {
                        networkTimeoutSeconds: 5
                    },
                    urlPattern: 'https://avancera.app/cities/'
                }
            ]
        }
    }
}