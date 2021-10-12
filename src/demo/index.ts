import EventJS from '../index'

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

  console.log(`has('click')`, eventJs.has('click'))
  console.log(`has('mousedown')`, eventJs.has('mousedown'))
}

dispatch()
