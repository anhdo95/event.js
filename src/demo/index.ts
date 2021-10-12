import EventJS from '../index'
import CustomEvent from '../custom-event'

const eventJs = new EventJS()

const handleClick = () => {
  console.log('Click!')
}

const handleScroll = ({ offsetTop }: { offsetTop: number }) => {
  console.log(`offsetTop`, offsetTop)
}

eventJs
  .on('click', handleClick)
  .on('scroll', handleScroll)
  .on('greeting', (e: CustomEvent) => {
    console.log(`e.currentTarget`, e.currentTarget)
    console.log(`e.props`, e.props)
  })
  .once('mouseup', () => console.log('Mouse up!'))
  .once('mouseup', () => console.log('Mouse up again!'))

const dispatch = () => {
  eventJs
    .off('click', handleClick)
    .trigger('click')
    .trigger('click')
    .trigger('scroll', { offsetTop: 100 })
    .trigger('mouseup')
    .trigger('mouseup')
    .trigger(new CustomEvent('greeting', {
      message: 'Welcome to event.js'
    }))

  console.log(`has('click')`, eventJs.has('click'))
  console.log(`has('mousedown')`, eventJs.has('mousedown'))
}

dispatch()
