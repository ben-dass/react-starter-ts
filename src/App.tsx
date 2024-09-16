import { useAppDispatch, useAppSelector } from "./state/store";
import { Button } from "@/components/ui/button.tsx";
import {
	decrement,
	increment,
	incrementAsync,
	incrementByAmount,
} from "@/src/state/counter/counterSlice.ts";
import TopNav from "@/src/components/TopNav.tsx";

const App = () => {
	const counter = useAppSelector((state) => {
		console.log("state", state.counter);
		return state.counter;
	});

	const dispatch = useAppDispatch();

	return (
		<div className="flex h-screen w-screen justify-center">
			<div className="w-[50rem]">
				<div className="mt-10 flex flex-col items-center justify-center gap-5">
					<TopNav />
					<h1>
						<span className="font-bold">Count: </span>
						{counter.value}
					</h1>
					<div className="flex flex-row gap-5">
						<div className="flex flex-col gap-3">
							<Button onClick={() => dispatch(increment())}>
								Increment
							</Button>
							<Button
								onClick={() => dispatch(incrementByAmount(10))}
							>
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
						<Button onClick={() => dispatch(decrement())}>
							Decrement
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
