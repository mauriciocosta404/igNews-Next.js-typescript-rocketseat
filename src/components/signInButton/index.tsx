import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import style from './style.module.scss';

const SignInButton=() => {

    const isUserLoggedIn=true;

    return isUserLoggedIn?
    (<button 
            type="button"
            className={style.signInButton}>
            <FaGithub color='#04d361'/>
            Mauricio Costa
            <FiX color="#737380" className={style.closeIcon}/>
        </button>
    ):(
        <button 
            type="button"
            className={style.signInButton}>
            <FaGithub color='#eba417'/>
            Sign in with github

        </button>
    )
}
export default SignInButton;