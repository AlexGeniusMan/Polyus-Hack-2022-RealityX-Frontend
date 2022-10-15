import React from 'react'
import styles from './Dashboard.module.scss'
import Block from '../../components/Block/Block'
import Camera from '../../components/Camera/Camera'
import Analytics from '../../components/Analytics/Analytics'
import Logs from '../../components/Logs/Logs'
import Layout from '../../components/Layout/Layout'
import Classes from '../../components/Classes/Classes'

export const Dashboard = () => {
    return (
        <Layout>
            <div className={styles['layout']}>
                <Block title={'Камера'} className={styles['camera']}>
                    <Camera />
                </Block>
                <Block title={'Статистика по классам'} className={styles['classes']}>
                    <Classes />
                </Block>
                <Block title={'Аналитика'} className={styles['analytics']}>
                    <Analytics />
                </Block>
                {/*<Block title={'Минимальное значение негабарита'} className={styles['settings']}>*/}
                {/*    <Settings />*/}
                {/*</Block>*/}
                <Block title={'Логирование негабаритов'} className={styles['logs']}>
                    <Logs />
                </Block>
            </div>
        </Layout>
    )
}

export default Dashboard
