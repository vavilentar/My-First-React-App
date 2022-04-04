import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data}) => { //Массив с компонентами для построения новых компонентов

	const elements = data.map(item => { //Перебираем map - каждый элемент массива item
		return (
			// <EmployeesListItem name={item.name} salary={item.salary}/> 
			// Или используя ObjectSpread оператор
			<EmployeesListItem {...item} />
			//С каждым проходом перебора нам возвращается компонент с пропсами компонетов из массива
		)
	})

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default EmployeesList;