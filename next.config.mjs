import nextra from 'nextra'

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
})

export default withNextra({
    headers: async () => {
        return [
            {
                source: "/.well-known/apple-app-site-association",
                headers: [{ key: "content-type", value: "application/json" }]
            }
        ]
    },
})

// If you have other Next.js configurations, you can pass them as the parameter:
// export default withNextra({ /* other next.js config */ })