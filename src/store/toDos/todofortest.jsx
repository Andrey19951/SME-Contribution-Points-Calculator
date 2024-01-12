import { useSelector, useDispatch } from "react-redux"
import { increment, reset } from "./todos.slice"

export default function Todo() {
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <p>Clicked {count} times</p>
            <button onClick={() => dispatch(increment(4))}></button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </div>
    )
}