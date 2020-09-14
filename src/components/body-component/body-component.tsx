import React from 'react'
import Card from 'terra-card/lib/Card'
import Button from 'terra-button/lib/Button'

const Body = () => (
  <div>
    <Card>
      <div className='button'>
        <Button text='1' variant='action' />
        <Button text='2' variant='action' />
        <Button text='3' variant='action' />
      </div>
    </Card>
  </div>
)
export default Body
