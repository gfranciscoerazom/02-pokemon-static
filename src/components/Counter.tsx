import { createSignal, type JSX } from "solid-js"

type Props = {
    readonly initValue: number;
    readonly children?: JSX.Element;
}

export function Counter(props: Props) {
    const [count, setCount] = createSignal(props.initValue)
    return (
        <>
            {/* <h1>Counter</h1> */}
            {
                props.children
            }
            <h3>Value: {count()}</h3>

            <button class="bg-blue-500 p-2 mr-2 rounded" onclick={() => setCount(prev => ++prev)}>+1</button>
            <button class="bg-blue-500 p-2 mr-2 rounded" onclick={() => setCount(prev => --prev)}>-1</button>
        </>
    )
}