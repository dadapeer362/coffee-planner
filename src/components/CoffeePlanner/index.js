// Write your code here.
import './index.css'
import {Component} from 'react'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion'

class CoffeePlanner extends Component {
  state = {
    drink: '',
    coffee: '',
    quantity: '',
    grind: '',
    deliver: '',
    result: false,
    clickedButton: false,
  }

  onGetOptions = (optionTitle, type) => {
    const {drink, coffee, quantity, grind, deliver} = this.state
    if (type === 'DRINK_TYPE' && optionTitle !== '') {
      this.setState({drink: optionTitle})
    } else if (type === 'COFFEE_TYPE' && optionTitle !== '') {
      this.setState({coffee: optionTitle})
    } else if (type === 'QUANTITY' && optionTitle !== '') {
      this.setState({quantity: optionTitle})
    } else if (type === 'GRIND_TYPE' && optionTitle !== '') {
      this.setState({grind: optionTitle})
    } else if (type === 'DELIVER_TYPE' && optionTitle !== '') {
      this.setState({deliver: optionTitle})
    }
  }

  showResult = () => {
    const {
      drink,
      coffee,
      quantity,
      grind,
      deliver,
      result,
      clickedButton,
    } = this.state
    this.setState({clickedButton: true})
    if (
      drink !== '' &&
      coffee !== '' &&
      quantity !== '' &&
      grind !== '' &&
      deliver !== ''
    ) {
      this.setState({result: true})
    }
  }

  render() {
    const {coffeePlannerList} = this.props
    const {
      drink,
      coffee,
      quantity,
      grind,
      deliver,
      result,
      clickedButton,
    } = this.state
    return (
      <div className="whole-container">
        <div className="bg-container">
          <div className="plan-content-container">
            <h1 className="heading-plan">Create a Plan</h1>
            <p className="paragraph-plan">
              We offer an assortment of the best artesian coffee from the globe
              delivered fresh to the door create your plan with this
            </p>
          </div>
        </div>
        <ul>
          {coffeePlannerList.map(eachItem => (
            <CoffeePlannerQuestion
              question={eachItem.questionTitle}
              options={eachItem.optionsList}
              key={eachItem.id}
              type={eachItem.questionType}
              onGetOptions={this.onGetOptions}
            />
          ))}
        </ul>
        <div className="btn-container">
          <button
            type="button"
            className="btn-plan-style"
            onClick={this.showResult}
          >
            Create my plan
          </button>
        </div>
        {result && clickedButton ? (
          <div className="result-container-center">
            <div className="result-container">
              <p className="result-paragraph">
                I Drink my coffee as{' '}
                <span className="result-span">{drink}</span>, with a{' '}
                <span className="result-span">{coffee}</span> type of bean.{' '}
                <span className="result-span">{quantity}</span> of{' '}
                <span className="result-span">{grind}</span> ground, send to me{' '}
                <span className="result-span">{deliver}</span>.
              </p>
            </div>
          </div>
        ) : (
          ''
        )}
        {result === false && clickedButton === true ? (
          <div className="result-container-center">
            <div className="result-container">
              <p className="result-paragraph">
                Kindly select options for all the questions.
              </p>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default CoffeePlanner
