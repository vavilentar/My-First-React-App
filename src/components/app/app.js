import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddFrom from '../employees-add-form/employees-add-form';

import './app.css';

function App () {
	return (
		<div className="app">
			<AppInfo/>

			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>
			</div>
			<EmployeesList/>
			<EmployeesAddFrom/>
		</div>
	);
}

export default App;