import React from 'react'
import Card from 'terra-card/lib/Card'
import Button from 'terra-button/lib/Button'
import classNames from 'classnames/bind'

import styles from './body-component.css'

const bodycss = classNames.bind(styles)
const PainAssessmentBody = () => (
  <div className={bodycss('body')}>
    <Card>
      <div className={bodycss('inbody')}>
        <Button text='1' variant='action' className={bodycss('button')} />
        <Button text='2' variant='action' className={bodycss('button')} />
        <Button text='3' variant='action' className={bodycss('button')} />
        <Button text='4' variant='action' className={bodycss('button')} />
        <Button text='5' variant='action' className={bodycss('button')} />
        <Button text='6' variant='action' className={bodycss('button')} />
        <Button text='7' variant='action' className={bodycss('button')} />
        <Button text='8' variant='action' className={bodycss('button')} />
        <Button text='9' variant='action' className={bodycss('button')} />
      </div>
    </Card>
  </div>
)
export default PainAssessmentBody
