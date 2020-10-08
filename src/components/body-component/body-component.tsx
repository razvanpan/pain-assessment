import React from 'react'
import Card from 'terra-card/lib/Card'
import Button from 'terra-button/lib/Button'
import classNames from 'classnames/bind'

import styles from './body-component.css'

const bodycss = classNames.bind(styles)
type button = {
  inputButton1: number
}
class PainAssessmentBody extends React.Component<
  { onInput: (name: number) => void },
  button
> {
  constructor(props) {
    super(props)
    this.getButton1 = this.getButton1.bind(this)
    this.getButton2 = this.getButton2.bind(this)
    this.getButton3 = this.getButton3.bind(this)
    this.getButton4 = this.getButton4.bind(this)
    this.getButton5 = this.getButton5.bind(this)
    this.getButton6 = this.getButton6.bind(this)
    this.getButton7 = this.getButton7.bind(this)
    this.getButton8 = this.getButton8.bind(this)
    this.getButton9 = this.getButton9.bind(this)
    this.state = {
      inputButton1: -1
    }
  }
  getButton1(event) {
    event.preventDefault()

    this.setState({
      inputButton1: 1
    })
    this.props.onInput(this.state.inputButton1)
  }
  getButton2(event) {
    event.preventDefault()

    this.setState({
      inputButton1: 2
    })
    this.props.onInput(this.state.inputButton1)
  }
  getButton3(event) {
    event.preventDefault()

    this.setState({
      inputButton1: 3
    })
    this.props.onInput(this.state.inputButton1)
  }
  getButton4(event) {
    event.preventDefault()

    this.setState({
      inputButton1: 4
    })
    this.props.onInput(this.state.inputButton1)
  }
  getButton5(event) {
    event.preventDefault()

    this.setState({
      inputButton1: 5
    })
    this.props.onInput(this.state.inputButton1)
  }
  getButton6(event) {
    event.preventDefault()

    this.setState({
      inputButton1: 6
    })
    this.props.onInput(this.state.inputButton1)
  }
  getButton7(event) {
    event.preventDefault()

    this.setState({
      inputButton1: 7
    })
    this.props.onInput(this.state.inputButton1)
  }
  getButton8(event) {
    event.preventDefault()

    this.setState({
      inputButton1: 8
    })
    this.props.onInput(this.state.inputButton1)
  }
  getButton9(event) {
    event.preventDefault()

    this.setState({
      inputButton1: 9
    })
    this.props.onInput(this.state.inputButton1)
  }

  render() {
    return (
      <div className={bodycss('body')}>
        <Card>
          <div className={bodycss('inbody')}>
            <Button
              text='1'
              variant='action'
              className={bodycss('button')}
              onClick={this.getButton1}
            />
            <Button
              text='2'
              variant='action'
              className={bodycss('button')}
              onClick={this.getButton2}
            />
            <Button
              text='3'
              variant='action'
              className={bodycss('button')}
              onClick={this.getButton3}
            />
            <Button
              text='4'
              variant='action'
              className={bodycss('button')}
              onClick={this.getButton4}
            />
            <Button
              text='5'
              variant='action'
              className={bodycss('button')}
              onClick={this.getButton5}
            />
            <Button
              text='6'
              variant='action'
              className={bodycss('button')}
              onClick={this.getButton6}
            />
            <Button
              text='7'
              variant='action'
              className={bodycss('button')}
              onClick={this.getButton7}
            />
            <Button
              text='8'
              variant='action'
              className={bodycss('button')}
              onClick={this.getButton8}
            />
            <Button
              text='9'
              variant='action'
              className={bodycss('button')}
              onClick={this.getButton9}
            />
          </div>
        </Card>
      </div>
    )
  }
}
export default PainAssessmentBody
