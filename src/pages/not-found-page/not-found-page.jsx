import styles from './not-found-page.module.css';

const NotFoundPage = () => {
  return (
    <main className={styles.main}>
    <div className={styles.container}>
      <span className="text text_type_digits-large">404</span>
      <span className="text text_type_main-medium">Page Not Found</span>
    </div>
  </main>
  )
}

export default NotFoundPage;
