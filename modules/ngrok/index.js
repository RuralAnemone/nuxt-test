import ngrok from 'ngrok'

export default function () {
  const { nuxt } = this

  // Don't start ngrok in production
  if (nuxt.options.dev === false) {
    return
  }

  nuxt.hook('listen', async function(server, { port }))
}