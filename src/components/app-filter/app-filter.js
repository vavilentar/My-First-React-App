// import './app-filter.css';
import './app-filter.scss';

const AppFilter = (props) =>{
	const buttonsData = [
		{name: 'all', label: 'Все сотрудники'},
		{name: 'like', label: 'На повышение'},
		{name: 'moreThen1000', label: 'З/П больше 1000$'},
	];

	const buttons = buttonsData.map(({name, label}) => {
		const active = props.filter === name;
		const clazz = active ? 'btn-light' : 'btn-outline-light'
		return (
			<button 
				className={`btn ${clazz}`}
				type="button"
				key={name}
				onClick={() => props.onFilterSelect(name)}>
				{label}
			</button>
		)
	})

	return (
		<div className="btn-group"> 
		{buttons}
			{/* <button 
				className="btn btn-light"
				type="button">
					Все сотрудники
			</button>
			<button 
				className="btn btn-outline-light"
				type="button">
					На повышение
			</button>
			<button 
				className="btn btn-outline-light"
				type="button">
					З/П больше 1000$
			</button> */}
		</div>
	)
}

export default AppFilter;