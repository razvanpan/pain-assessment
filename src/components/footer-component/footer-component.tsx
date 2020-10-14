import React from 'react'
import Button from 'terra-button'

import Spacer from 'terra-spacer'
import BlockActionFooter from 'terra-action-footer/lib/BlockActionFooter'
import classNames from 'classnames/bind'
import styles from './footer-component.css'
const footercss = classNames.bind(styles)

class PainAssessmentFooter extends React.Component<{
  onSubmit: () => void
 
}> {
  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
   
  }

  submitHandler(event) {
    event.preventDefault()
    this.props.onSubmit()
  }

  render() {
    return (
      <BlockActionFooter>
        <div className={footercss('footer')}>
          <React.Fragment>
            <div className={footercss('infooter')}>
              <Spacer isInlineBlock marginRight='medium'>
                <Button
                  text='Submit'
                  variant={Button.Opts.Variants.EMPHASIS}
                  onClick={this.props.onSubmit}
                />
              </Spacer>
              
            </div>
          </React.Fragment>
        </div>
      </BlockActionFooter>
    )
  }
}
export default PainAssessmentFooter
