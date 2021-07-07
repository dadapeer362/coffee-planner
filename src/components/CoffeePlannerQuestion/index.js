// Write your code here.
import './index.css'
import {Component} from 'react'
import QuestionOption from '../QuestionOption'

class CoffeePlannerQuestion extends Component {
  state = {
    activeOptionId: '',
  }

  onClickOption = (id, optionTitle, type) => {
    const {activeOptionId} = this.state
    this.setState({activeOptionId: id})
  }

  render() {
    const {question, options, type, onGetOptions} = this.props
    const {activeOptionId} = this.state
    return (
      <li className="option-container">
        <h1 className="heading-question">{question}</h1>
        <ul className="row-option-container">
          {options.map(eachOption => (
            <QuestionOption
              option={eachOption}
              key={eachOption.id}
              onClickOption={this.onClickOption}
              isActive={activeOptionId === eachOption.id}
              question
              type={type}
              onGetOptions={onGetOptions}
            />
          ))}
        </ul>
      </li>
    )
  }
}

export default CoffeePlannerQuestion
