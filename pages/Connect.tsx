async function connect() {
  // @ts-ignore
  const {default: app} = await import('svelte-app-repro')

  app()
}

const ConnectButton = () => {
  return <button onClick={connect}>Connect</button>
}

export default ConnectButton