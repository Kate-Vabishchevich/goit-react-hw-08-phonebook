import phone from '../../img/phone.png';
import css from './Home.module.css';

export default function Home() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <img src={phone} alt="Hand with phone" width="320" />
          <h1 className={css.title}>
            Wellcome to your PhoneBook{' '}
            <span role="img" aria-label="Greeting icon"></span>
          </h1>
        </div>
      </div>
    </section>
  );
}
