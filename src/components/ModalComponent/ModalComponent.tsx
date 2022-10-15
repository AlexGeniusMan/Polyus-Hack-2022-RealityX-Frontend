import React, {FC} from 'react'
import styles from './ModalComponent.module.scss'
import '../../styles/components/modal/modal.scss'
import Dialog from 'rc-dialog'
import cl from 'classnames'
import Icon from '../Icon/Icon'

const ModalComponent:FC<MyProps> = ({children, footer, visible, title, onClose, className}) => {
    return (
        <Dialog closeIcon={<Icon name={'close-fill'} size={20} type={'fill'} />} visible={visible} animation={'zoom'}  onClose={onClose} className={cl(className, styles['container'])}>
            <div className={styles['title']}>
                {title}
            </div>
            {children}
            <div className={styles['footer']}>
                {footer}
            </div>
        </Dialog>
    )
}

export default ModalComponent

type MyProps = {
    children?: string | React.ReactNode
    footer?: string | React.ReactNode
    className?: string
    visible?: boolean
    title?: string | React.ReactNode
    onClose?: () => void
}

// transitionName={styles['animation']}
