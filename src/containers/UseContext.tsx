import React, { useContext } from 'react'

const Context = React.createContext()
const { Provider } = Context

// Functional Component での Provider の作り方がよく分からないので、一旦 class を使っている
class SetProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 2
    }
  }

  render() {
    return (
      <Provider value={{ state: this.state }}>
        <UseContext />
      </Provider>
    )
  }
}

const UseContext = () => {
  const context = useContext(Context)

  return (
    <div>
      <p>########## UseContext ##########</p>
      <p>Context.count: {context.state.count}</p>
      <p>########## UseContext ##########</p>
    </div>
  )
}

export default SetProvider
