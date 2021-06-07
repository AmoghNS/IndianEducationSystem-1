import React from 'react'
import style from "./style.module.sass"

const Base = () => {
    return <div className={style.Container}>
        <div className={style.TextContainer}>
            <h1 className={style.Header}>Let's Change <span>#IndianEducationSystem</span></h1>
            <p className={style.SubHeader}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </div>
    </div>
}

export default Base