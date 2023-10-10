const Button = function({onClick, children}) {

  function handleClick() {
    onClick()
  }

  return <button onClick={handleClick}>{children}</button>
}

export {Button}