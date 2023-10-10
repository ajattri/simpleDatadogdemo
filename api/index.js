export  async function api() {
  const testResult =  await fetch("https://status.datadoghq.com/")

  return testResult.test.test
}