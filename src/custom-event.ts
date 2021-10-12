import EventJS from '.'

class CustomEvent<Props extends Record<string, any> = any> {
  public currentTarget: EventJS

  constructor(public type: string, public props: Props) {}
}

export default CustomEvent
