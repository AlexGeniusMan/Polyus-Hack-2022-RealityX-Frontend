import React from 'react'
import styles from './Classes.module.scss'
import TableComponent from '../TableComponent/TableComponent'
import {useClasses} from './useClasses'
import {Button} from '../Button/Button'

const Classes = () => {
    const {columns, data, changing, handleButtonClick, handleSave} = useClasses()

    return (
        <div className={styles['container']}>
            <div className={styles['tableContainer']}>
                <TableComponent tableLayout={'fixed'} className={styles['table']} columns={columns} data={data} />
            </div>
            <div className={styles['button']}>
                {!changing && <Button color={'blue'} onClick={() => handleButtonClick(changing)} children={'Редактировать'} />}
                {changing && <Button color={'gray'} onClick={() => handleButtonClick(changing)} children={'Отмена'} />}
                {changing && <Button color={'blue'} children={'Добавить строку'} />}
                {changing && <Button color={'green'} onClick={handleSave} children={'Сохранить'} />}
            </div>
        </div>
    )
}

export default Classes
