import styles from './ProductItem.module.scss';
export default function ProductItem(props) {
  const { price, title, thumbnail, city } = props.product;
  const priceFormatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  });
  return (
    <li className={styles['productItem']}>
      <div className={styles['productItem-imageWrapper']}>
        <img
          src={thumbnail}
          className={styles['productItem-image']}
          alt={title}
        />
      </div>
      <div className={styles['productItem-brief']}>
        <span className={styles['productItem-price']}>
          {priceFormatter.format(price)}
        </span>
        <h2 className={styles['productItem-title']}>{title}</h2>
      </div>
      <div className={styles['productItem-location']}>
        <p className={styles['productItem-city']}>{city}</p>
      </div>
    </li>
  );
}
