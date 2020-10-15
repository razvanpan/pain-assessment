import React from 'react'
import Card from 'terra-card/lib/Card'
import Button from 'terra-button/lib/Button'
import classNames from 'classnames/bind'

import styles from './body-component.css'

const bodycss = classNames.bind(styles)
type button = {
  inputButton: number
  buttonList: any[]
}
class PainAssessmentBody extends React.Component<
  { onInput: (name: number) => void },
  button
> {
  constructor(props) {
    super(props)
    this.getButton = this.getButton.bind(this)
    this.state = {
      inputButton: -1,
      buttonList: []
    }
  }

  getButton(label) {
    this.setState({ inputButton: label })
    this.props.onInput(this.state.inputButton)
  }

  buttons() {
    const buttons: Button = []
    for (let i = 1; i <= 9; i++) {
      const button = (
        <Button
          text={i}
          variant='action'
          className={bodycss('button')}
          onClick={() => this.getButton(i)}
        />
      )
      buttons.push(button)
    }
    this.setState({
      buttonList: buttons
    })
  }

  componentDidMount() {
    this.buttons()
  }

  render() {
    return (
      <div className={bodycss('body')}>
        <Card>
          <div className={bodycss('inbody')}>{this.state.buttonList}</div>
        </Card>
      </div>
    )
  }
}
export default PainAssessmentBody
