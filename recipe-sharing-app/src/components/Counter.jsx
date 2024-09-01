import { useCounterStore } from "../stores/CounterStore";
import CounterBtns from "./CounterBtns";

function Counter() {
    const count = useCounterStore((state) => state.count);
    console.log(Date.now());
    

    return (
        <div>
            <h1>{count}</h1>
            <CounterBtns />
        </div>
    )
}

export default Counter;