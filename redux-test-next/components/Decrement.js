//
import { useDispatch } from 'react-redux'
import { decrement } from '../redux/counterSlice'

function Decrement() {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Decrement
