import * as React from 'react'
import PainAssessmentHeader from '../header-component/header-component'
import PainAssessmentBody from '../body-component/body-component'
import PainAssessmentFooter from '../footer-component/footer-component'
import styles from './painAssessmentContainer.css'
import classNames from 'classnames/bind'
import axios from 'axios'
const indexcss = classNames.bind(styles)
class PainAssessmentContainer extends React.Component<{}, { inputNumber: number }> {
  constructor(props) {
    super(props)
    this.state = { inputNumber: 0 }
    this.onSubmit = this.onSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onInput = this.onInput.bind(this)
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
  render() {
    return (
      <div className={indexcss('index')}>
        <PainAssessmentHeader />

        <PainAssessmentBody onInput={this.onInput}></PainAssessmentBody>

        <PainAssessmentFooter
          onSubmit={this.onSubmit}
          onCancel={this.onCancel}
        ></PainAssessmentFooter>
      </div>
    )
  }
}
export default PainAssessmentContainer
