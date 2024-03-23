import { useDispatch } from 'react-redux';
import css from './Contact.module.css';

import { ImUser, ImPhone, ImUserMinus } from 'react-icons/im';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <p className={css.name}>
        <ImUser className={css.icon} />
        {name}
      </p>
      <p>
        <ImPhone className={css.icon} />
        {number}
      </p>
      <button className={css.button} onClick={() => dispatch(deleteContact(id))}>
        <ImUserMinus />
      </button>
    </div>
  );
};

export default Contact;
