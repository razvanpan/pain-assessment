import React from 'react'
import SectionHeaderExampleTemplate from 'terra-section-header/lib/terra-dev-site/doc/example/SectionHeaderExampleTemplate'

import IconRollup from 'terra-icon/lib/icon/IconRollup'
import Button from 'terra-button'

import styles from './header-component.css'
import classNames from 'classnames/bind'
const headercss = classNames.bind(styles)

const sectionHeaderProps = { isTransparent: true }
const Icon = <IconRollup />

class PainAssessmentHeader extends React.Component<
  { closeAction: () => void },
  {
    showDropDown: boolean
  }
> {
  constructor(props) {
    super(props)
    this.toggleDropDown = this.toggleDropDown.bind(this)
    this.closeAction = this.closeAction.bind(this)
    this.state = {
      showDropDown: false
    }
  }
  toggleDropDown() {
    this.setState({
      showDropDown: true
    })
  }

  closeAction() {
    this.setState({
      showDropDown: false
    })
    this.props.closeAction()
  }

  render() {
    return (
      <div className={headercss('header')}>
        <div className={headercss('interiorheader')}>
          <SectionHeaderExampleTemplate
            title='Pain Assessment'
            exampleProps={sectionHeaderProps}
          />
        </div>
        <div className={headercss('buttonheader')}>
          <Button icon={Icon} variant='ghost' onClick={this.toggleDropDown} />
        </div>
        <div className={headercss('hiddenbutton')}>
          {this.state.showDropDown && (
            <Button text='Close' variant='neutral' onClick={this.closeAction} />
          )}
        </div>
      </div>
    )
  }
}
export default PainAssessmentHeader
