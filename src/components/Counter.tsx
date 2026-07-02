import { createSignal } from "solid-js"

export function Counter() {
    const [count, setCount] = createSignal(10)
    return (
        <>
            <h1>Counter</h1>
            <h3>Value: {count()}</h3>

            <button class="bg-blue-500 p-2 mr-2 rounded" onclick={() => setCount(prev => ++prev)}>+1</button>
            <button class="bg-blue-500 p-2 mr-2 rounded" onclick={() => setCount(prev => --prev)}>-1</button>
        </>
    )
}