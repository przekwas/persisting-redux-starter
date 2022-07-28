import { useDispatch, useSelector } from 'react-redux';
import { add, sub, reset } from './features/countSlice';
import { login, logout } from './features/authSlice';

const App = () => {
	const dispatch = useDispatch();
	const { auth, count } = useSelector(state => state);

	return (
		<>
			<div>
				<h1>count: {count.value}</h1>
				<div>
					<button onClick={() => dispatch(add(1))}>add</button>
					<button onClick={() => dispatch(sub(1))}>sub</button>
					<button onClick={() => dispatch(reset())}>reset</button>
				</div>
			</div>
			<div>
				<h1>auth: {auth.loggedIn.toString()}</h1>
				<div>
					<button onClick={() => dispatch(login())}>login</button>
					<button onClick={() => dispatch(logout())}>logout</button>
				</div>
			</div>
		</>
	);
};

export default App;
