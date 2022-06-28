import style from './style.module.scss';
import SignInButton from '../signInButton/index';

export const Header=()=>{

    return(
        <header className={style.headerContainer}>
            <div className={style.headContent}>
                <img src="/images/logo.svg" alt="igNews" />

                <nav>
                    <a className={style.active} href="">Home</a>
                    <a href="">Posts</a>
                </nav>
                <SignInButton/>
            </div>
        </header>
    )
}