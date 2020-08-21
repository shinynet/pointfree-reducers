import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
	setAmount,
	selectCount
} from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
	const count = useSelector(selectCount)
	const dispatch = useDispatch()
	const [value, setValue] = useState('2')

	const handleValueChange = e => {
		setValue(e.target.value)
	}

	return (
		<div>
			<div className={styles.row}>
				<span className={styles.value}>{count}</span>
			</div>
			<div className={styles.row}>
				<input
					className={styles.textbox}
					aria-label="Set increment amount"
					value={value}
					onChange={e => handleValueChange(e)}
				/>
				<button
					className={styles.button}
					onClick={() =>
						dispatch(setAmount(Number(value) || 0))
					}
				>
					Set Amount
				</button>
			</div>
		</div>
	)
}
