import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';
import { ImUser, ImPhone, ImUserMinus } from 'react-icons/im';
import toast from 'react-hot-toast';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Contact deleted');
      })
      .catch(() => {
        toast.error('The contact has not been deleted. Reload the page');
      });
  };

  return (
    <div className={css.container}>
      <div>
        <p className={css.name}>
          <ImUser className={css.icon} />
          {name}
        </p>
        <p>
          <ImPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={handleDelete}>
        <ImUserMinus />
      </button>
    </div>
  );
};

export default Contact;
