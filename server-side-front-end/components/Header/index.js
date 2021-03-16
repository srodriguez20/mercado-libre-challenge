import styles from './Header.module.scss';
export default function Header() {
  return (
    <header className={styles['searchBar']}>
      <div className={styles['searchBar-wrapper']}>
        <img
          src='/mercado-libre-logo.png'
          className={styles['searchBar-logo']}
        />
        <form className={styles['searchBar-searchForm']}>
          <input
            className={styles['searchBar-searchInput']}
            type='text'
            id='search'
            name='search'
            placeholder='Nunca dejes de buscar'
            required
            maxLength='100'
          />
          <button className={styles['searchBar-searchButton']}>
            <img src='/loupe.svg' className={styles['searchBar-searchIcon']} />
          </button>
        </form>
      </div>
    </header>
  );
}
