import {usecontext} from 'react'
import { Context } from 'react'

function Counter() {
    const {counter, setCounter} = usecontext(Context)
  return (
    <div>Counter</div>
  )
}

export default Counter