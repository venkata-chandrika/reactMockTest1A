import {Component} from 'react'

import './index.css'

class Form extends Component {
  state = {
    input: '',
    inProgress: true,
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onClickBtn = () => {
    this.setState(prev => ({inProgress: !prev.inProgress}))
  }

  render() {
    const {input, inProgress} = this.state
    const btnText = inProgress ? 'Save' : 'Edit'
    return (
      <div className="bg-container">
        <div className="input-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="sub-container">
            {inProgress ? (
              <input
                type="text"
                onChange={this.onChangeInput}
                value={input}
                className="input"
              />
            ) : (
              <p className="input-para">{input}</p>
            )}

            <button type="button" className="button" onClick={this.onClickBtn}>
              {btnText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Form
