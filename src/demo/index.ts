import EventJS from '../index'

const eventJs = new EventJS()

const handleScroll = () => console.log('Scroll!')

eventJs
  .on('click', () => console.log('Click!'))
  .on('scroll', () => handleScroll)
  .once('mouseup', () => console.log('Mouse up!'))
  .once('mouseup', () => console.log('Mouse up again!'))

const dispatch = () => {
  eventJs
    .off('scroll', handleScroll)
    .trigger('click')
    .trigger('click')
    .trigger('scroll')
    .trigger('mouseup')
    .trigger('mouseup')

  console.log(`eventJs`, eventJs)
}

dispatch()
