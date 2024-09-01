import { useCounterStore } from "../stores/CounterStore";


function CounterBtns() {
    const increment = useCounterStore((state) => state.increment);
    const decrement = useCounterStore((state) => state.decrement);


    return (
        <div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default CounterBtns;