import * as React from 'react'
import PainAssessmentHeader from '../header-component/header-component'
import PainAssessmentBody from '../body-component/body-component'
import PainAssessmentFooter from '../footer-component/footer-component'
import styles from './painAssessmentContainer.css'
import classNames from 'classnames/bind'
import axios from 'axios'
const indexcss = classNames.bind(styles)
class PainAssessmentContainer extends React.Component<
  {},
  { inputNumber: number; close: boolean }
> {
  constructor(props) {
    super(props)
    this.state = { inputNumber: 0, close: true }
    this.onSubmit = this.onSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onInput = this.onInput.bind(this)
    this.onClose = this.onClose.bind(this)
  }
  onSubmit() {
    const data = { painAssessment: this.state.inputNumber }
    axios
      .post('http://localhost:8080/pain-assessment/add', data, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Allow-Credentials': 'true'
        }
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }
  onCancel() {
    alert('canceled!')
  }
  onInput(number) {
    this.setState({ inputNumber: number })
  }
  onClose() {
    this.setState({ close: false })
  }

  render() {
    return (
      <div>
        {this.state.close && (
          <div className={indexcss('index')}>
            <PainAssessmentHeader closeAction={this.onClose} />

            <PainAssessmentBody onInput={this.onInput}></PainAssessmentBody>

            <PainAssessmentFooter
              onSubmit={this.onSubmit}
            ></PainAssessmentFooter>
          </div>
        )}
      </div>
    )
  }
}
export default PainAssessmentContainer
