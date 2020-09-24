import React from 'react'
import SectionHeaderExampleTemplate from 'terra-section-header/lib/terra-dev-site/doc/example/SectionHeaderExampleTemplate'

import IconRollup from 'terra-icon/lib/icon/IconRollup'
import Button from 'terra-button'
import classNames from 'classnames/bind'
import styles from './header-component.css'
const headercss = classNames.bind(styles)

const sectionHeaderProps = { isTransparent: true }
const Icon = <IconRollup />

const PainAssessmentHeader = () => (
  <div className={headercss('header')}>
    <div className={headercss('inheader')}>
      <SectionHeaderExampleTemplate
        title='Pain Assessment'
        exampleProps={sectionHeaderProps}
      />
    </div>
    <div className={headercss('buttonheader')}>
      <Button
        icon={Icon}
        variant='ghost'
        onMouseEnter={() => alert('Ive been clicked!')}
      />
    </div>
  </div>
)

export default PainAssessmentHeader
