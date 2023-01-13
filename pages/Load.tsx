async function load() {
  const {default: app} = await import('../compiled-svelte-app')

  app()
}

const ConnectButton = () => {
  return <button onClick={load}>Load</button>
}

export default ConnectButton