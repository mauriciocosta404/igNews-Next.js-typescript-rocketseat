import style from './style.module.scss';

const SubscribeButton=() => {
    return( 
        <button 
            type="button"
            className={style.subscribeButton}
            >
                Subscribe now
        </button>
    )
}
export default SubscribeButton;