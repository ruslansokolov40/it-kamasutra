
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <img src="https://img.freepik.com/premium-photo/elevate-your-brand-with-friendly-avatar-that-reflects-professionalism-ideal-sales-managers_1283595-18531.jpg?w=740" alt="foto" />
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


export default DialogItem;

