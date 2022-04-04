import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddFrom from '../employees-add-form/employees-add-form';

import './app.css';

function App () {

	const data = [
		{name: 'Roman P.', salary: 1200, increase: true},
		{name: 'John S.', salary: 1000, increase: false},
		{name: 'Alex M.', salary: 800, increase: false}
	];

	return (
		<div className="app">
			<AppInfo/>

			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>
			</div>
			<EmployeesList data={data}/>
			<EmployeesAddFrom/>
		</div>
	);
}

export default App;