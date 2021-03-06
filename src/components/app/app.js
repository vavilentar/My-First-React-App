//Импорт сторонних библиотек
import { Component } from 'react';

//Импорт своих компонентов
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddFrom from '../employees-add-form/employees-add-form';

//Импорт стилей
// import './app.css';
import './app.scss';

class App extends Component {


	constructor(props) {
		super(props);
		this.state = {
			data : [
				{name: 'Roman P.', salary: 1200, increase: true, like: true, id: 1},
				{name: 'John S.', salary: 1000, increase: false, like: false, id: 2},
				{name: 'Alex M.', salary: 800, increase: false, like: false, id: 3}
			], 
			term: '',
			filter: 'all'
		}
		this.maxId = 4;
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

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			like: false,
			id: this.maxId++
		}
	
		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		});
	}

	// onToggleIncrease = (id) => {
	// 	//  this.setState(({data}) => {

	// 		//Первый вариант реализации

	// 		//  const index = data.findIndex(elem => elem.id === id);

	// 		//  const old = data[index];
	// 		//  const newItem = {...old, increase: !old.increase};
	// 		//  const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];

	// 		//  return {
	// 		// 	 data: newArr
	// 		//  }
	// 	//  })

	// 		//Второй вариант реализации

	// 		this.setState(({data}) => ({
	// 			data: data.map(item => {
	// 				if (item.id === id) {
	// 					return {...item, increase: !item.increase}
	// 				}
	// 				return item;
	// 			})
	// 		}))
	// }

	// onToggleLike = (id) => {
	// 	this.setState(({data}) => ({
	// 		data: data.map(item => {
	// 			if (item.id === id) {
	// 				return {...item, like: !item.like}
	// 			}
	// 			return item;
	// 		})
	// 	}))
	// }

	//Третий вариант реализации (объединение)

	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})
		}))
	}

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1;
		})
	}

	onUpdateSearch = (term) => {
		this.setState({term});
	}

	filterPost = (items, filter) => {
		switch (filter) {
			case 'like':
				return items.filter(item => item.like);
			case 'moreThen1000':
				return items.filter(item => item.salary > 1000)
			default:
				return items
		}
	}

	onFilterSelect = (filter) => {
		this.setState({filter});
	}

	render() {
		const {data, term, filter} = this.state;
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		const visibleData = this.filterPost(this.searchEmp(data, term), filter);
		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased}/>
	
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch}/>
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
				</div>
				<EmployeesList 
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}/>
				<EmployeesAddFrom onAdd={this.addItem}/>
			</div>
		);
	}

}

export default App;