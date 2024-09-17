import { Button } from "@/components/ui/button.tsx";
import {
	decrement,
	increment,
	incrementAsync,
	incrementByAmount,
} from "@/src/pages/Counter/counterSlice.ts";
import { useAppDispatch, useAppSelector } from "@/src/store.ts";

const Counter = () => {
	const counter = useAppSelector((state) => {
		console.log("state", state.counter);
		return state.counter;
	});

	const dispatch = useAppDispatch();

	return (
		<>
			<h1>
				<span className="font-bold">Count: </span>
				{counter.value}
			</h1>
			<div className="mt-4 flex flex-row gap-5">
				<div className="flex flex-col gap-3">
					<Button onClick={() => dispatch(increment())}>
						Increment
					</Button>
					<Button onClick={() => dispatch(incrementByAmount(10))}>
						Increment By Value
					</Button>
					<Button
						className="transition duration-300 ease-in-out"
						onClick={() => dispatch(incrementAsync(10))}
						disabled={counter.isFetching}
					>
						Increment Async
					</Button>
				</div>
				<Button onClick={() => dispatch(decrement())}>Decrement</Button>
			</div>
		</>
	);
};

export default Counter;
