import clsx from "clsx";
import styles from "./style.module.scss";

interface Props {
  name: string;
  surname: string;
  className?: string;
}

const Card = ({ name, surname, className }: Props): JSX.Element => {
  return (
    <>
      <li className={clsx(styles.wrapper, className)}>
        <span className={styles.name}>Имя: {name}</span>
        <p className={styles.name}>Фамилия: {surname}</p>
      </li>
    </>
  );
};

export default Card;
