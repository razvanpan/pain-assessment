import React from 'react'
import Card from 'terra-card/lib/Card'
import Button from 'terra-button/lib/Button'

function aids(x) {
  switch (x) {
    case 0:
      console.log('asdasda')
      break
    case 1:
      console.log('dasdasdsadsadasdasasdasda')
      break
    case 2:
      console.log('dasdasdasdasa')
      break
  }
}

const CardDefault = () => (
  <div>
    <Card>
      <div className='button'>
        <Button text='1' variant='action' onMouseOver={aids(0)} />
        <Button text='2' variant='action' onMouseOver={aids(1)} />
        <Button text='3' variant='action' onMouseOver={aids(2)} />
      </div>
    </Card>
  </div>
)
export default CardDefault

// const ButtonVariant = () => (
//   <div className='button'>
//     <Button text='1' variant='action' onMouseOver={aids(0)} />
//     <Button text='2' variant='action' onMouseOver={aids(1)} />
//     <Button text='3' variant='action' onMouseOver={aids(2)} />
//   </div>
// )

// export default ButtonVariant
