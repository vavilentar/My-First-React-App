import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDelete}) => { //Массив с компонентами для построения новых компонентов

	const elements = data.map(item => { //Перебираем map - каждый элемент массива item

		const {id, ...itemProps} = item;
		return (
			// <EmployeesListItem name={item.name} salary={item.salary}/> 
			// Или используя ObjectSpread оператор
			<EmployeesListItem
			key={id} 
			{...itemProps}
			onDelete={() => onDelete(id)}/>
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

//Вариант если с backend не пришли уникальные идентифиторы:

// const elements = data.map((item, i) => { //Перебираем map - каждый элемент массива item

// 	const {id, ...itemProps} = item;
// 	return (
// 		// <EmployeesListItem name={item.name} salary={item.salary}/> 
// 		// Или используя ObjectSpread оператор
// 		<EmployeesListItem key={i} {...itemProps} />
// 		//С каждым проходом перебора нам возвращается компонент с пропсами компонетов из массива
// 	)
// })