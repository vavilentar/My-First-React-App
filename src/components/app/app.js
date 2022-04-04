//Импорт сторонних библиотек
import { Component } from 'react';

//Импорт своих компонентов
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddFrom from '../employees-add-form/employees-add-form';

//Импорт стилей
import './app.css';

class App extends Component {


	constructor(props) {
		super(props);
		this.state = {
			data : [
				{name: 'Roman P.', salary: 1200, increase: true, id: 1},
				{name: 'John S.', salary: 1000, increase: false, id: 2},
				{name: 'Alex M.', salary: 800, increase: false, id: 3}
			]
		}
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
			// const index = data.findIndex(elem => elem.id === id);

			// const before = data.slice(0, index); //"Левая" часть массива
			// const after = data.slice(index + 1); //"Правая" часть массива

			// const newArr = [...before, ...after]; //Соединяем без ненужного элемента
			// return {
			// 	data: newArr //Итог - не практично
			// }

			return {
				data: data.filter(item => item.id !== id) //Остаются только те элементы id которых не совпадают с тем, что к нам пришел 
			}
		})
	}

	render() {
		return (
			<div className="app">
				<AppInfo/>
	
				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>
				<EmployeesList 
					data={this.state.data}
					onDelete={this.deleteItem}/>
				<EmployeesAddFrom/>
			</div>
		);
	}

}

export default App;