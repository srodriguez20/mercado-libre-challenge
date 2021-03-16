import styles from './ProductsList.module.scss';
import ProductItem from '../../components/ProductItem';

export default function ProductsList(props) {
  return (
    <ul className={styles['productsList']}>
      {props.products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  );
}
