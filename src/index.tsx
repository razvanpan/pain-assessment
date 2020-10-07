import * as React from 'react'
import PainAssessmentHeader from './components/header-component/header-component'
import PainAssessmentBody from './components/body-component/body-component'
import PainAssessmentFooter from './components/footer-component/footer-component'
import styles from './indexcss.css'
import classNames from 'classnames/bind'
const indexcss = classNames.bind(styles)
export const PainAssessment = () => {
  return (
    <div className={indexcss('index')}>
      <PainAssessmentHeader />

      <PainAssessmentBody></PainAssessmentBody>

      <PainAssessmentFooter></PainAssessmentFooter>
    </div>
  )
}
