import React from 'react'
import styles from './Dashboard.module.scss'
import Block from '../../components/Block/Block'
import Camera from '../../components/Camera/Camera'
import Analytics from '../../components/Analytics/Analytics'
import Settings from '../../components/Settings/Settings'
import Logs from '../../components/Logs/Logs'
import Layout from '../../components/Layout/Layout'

export const Dashboard = () => {
    return (
        <Layout>
            <div className={styles['layout']}>
                <Block title={'Камера'} className={styles['camera']}>
                    <Camera />
                </Block>
                <Block title={'Аналитика'} className={styles['analytics']}>
                    <Analytics />
                </Block>
                <Block title={'Настройки'} className={styles['settings']}>
                    <Settings />
                </Block>
                <Block title={'Логирование негабаритов'} className={styles['logs']}>
                    <Logs />
                </Block>
            </div>
        </Layout>
    )
}

export default Dashboard
