import css from './Error.module.css';

const Error = ({ children }) => {
  return <p className={css.error}>{children}</p>;
};

export default Error;
