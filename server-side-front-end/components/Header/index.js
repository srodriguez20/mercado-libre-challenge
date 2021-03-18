import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  const inicialSearch = router.query.search || '';
  const [searchValue, setSearchValue] = useState(inicialSearch);

  const handleChange = (ev) => {
    setSearchValue(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (searchValue.trim()) {
      router.push({
        pathname: '/items',
        query: { search: searchValue },
      });
    } else {
      setSearchValue('');
    }
  };

  return (
    <header className={styles['searchBar']}>
      <div className={styles['searchBar-wrapper']}>
        <Link href='/'>
          <a className={styles['searchBar-logo-link']}>
            <img
              src='/mercado-libre-logo.png'
              className={styles['searchBar-logo']}
              alt='logo mercadolibre'
            />
          </a>
        </Link>
        <form
          className={styles['searchBar-searchForm']}
          onSubmit={handleSubmit}
        >
          <input
            className={styles['searchBar-searchInput']}
            type='text'
            id='search'
            name='search'
            placeholder='Nunca dejes de buscar'
            maxLength='100'
            required
            value={searchValue}
            onChange={handleChange}
          />
          <button
            className={styles['searchBar-searchButton']}
            type='submit'
            aria-label='buscar'
          >
            <img
              src='/loupe.svg'
              className={styles['searchBar-searchIcon']}
              alt='icono busqueda'
            />
          </button>
        </form>
      </div>
    </header>
  );
}
