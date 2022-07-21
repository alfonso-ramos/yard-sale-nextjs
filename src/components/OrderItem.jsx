import { useContext } from 'react';
import Image from 'next/image';

import AppContext from '@context/AppContext';

import closeIcon from '@icons/icon_close.svg'

import styles from '@styles/components/OrderItem.module.scss'

const OrderItem = (props) => {
    const {product, indexValue} = props
    const { removeFromCart } = useContext(AppContext)

    const handleRemove = index => {
        removeFromCart(index)
    }
    return (
        <div className={styles.OrderItem}>
            <figure>
                <img
                    src={product?.images[0]}
                    alt={product?.title}
                />
            </figure>
            <p>{product?.title}</p>
            <p>${product?.price}</p>
            <Image src={closeIcon} alt="close" onClick={() => handleRemove(indexValue)}/>
        </div>
    );
};

export default OrderItem;
