import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕 나는 <span className="something">css 모듈이야</span>
        </div>
    );
};

export default CSSModule;