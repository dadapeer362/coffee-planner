// Write your code here.
import './index.css'
import {Component} from 'react'

class QuestionOption extends Component {
  state = {
    drink: 'DRINK_TYPE',
    coffee: 'COFFEE_TYPE',
    quantity: 'QUANTITY',
    grind: 'GRIND_TYPE',
    deliver: 'DELIVER_TYPE',
  }

  selectOption = () => {
    const {option, onClickOption, type, onGetOptions} = this.props
    const {optionTitle, description, id} = option
    onClickOption(id, optionTitle, type)
    onGetOptions(optionTitle, type)
  }

  render() {
    const {option, isActive} = this.props
    const {optionTitle, description} = option
    const value = isActive ? 'option-bg-blue' : 'option-bg-white'
    const img = isActive ? 'white' : 'blue'
    return (
      <li className="list-style-options">
        <button type="button" className="btn-style" onClick={this.selectOption}>
          <div className={`option ${value}`}>
            <div className="title-img-container">
              <span className="option-title">{optionTitle}</span>
              <img
                className="img-style"
                src={`https://assets.ccbp.in/frontend/react-js/coffee-planner-${img}-cup-img.png`}
                alt={`${img} cup`}
              />
            </div>
            <span className="description">{description}</span>
          </div>
        </button>
      </li>
    )
  }
}

export default QuestionOption
