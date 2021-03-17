import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './ProductItem.module.scss';
function ProductItem(props) {
  const { id, price, title, picture, state_name } = props.product;

  const priceFormatter = (value) => {
    const formatter = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formatter.format(value.amount);
  };

  return (
    <li className={styles['productItem']}>
      <div className={styles['productItem-imageWrapper']}>
        <Link href={`/items/${id}`}>
          <a>
            <img
              src={picture}
              className={styles['productItem-image']}
              alt={title}
            />
          </a>
        </Link>
      </div>
      <div className={styles['productItem-brief']}>
        <span className={styles['productItem-price']}>
          {price ? priceFormatter(price) : ''}
        </span>
        <Link href={`/items/${id}`}>
          <a>
            <h2 className={styles['productItem-title']}>{title}</h2>
          </a>
        </Link>
      </div>
      <div className={styles['productItem-location']}>
        <p className={styles['productItem-city']}>{state_name}</p>
      </div>
    </li>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object,
};
export default ProductItem;
