import { useFavorites } from '../../hooks/useFavorites';
import styles from './header/header/header.module.css'
import { FaRegHeart } from "react-icons/fa";
export default function Header () {

    const favorites = useFavorites()
    return (
        <header className={styles.header}>
          <FaRegHeart />
          <span>{favorites.length}</span>
        </header>
    )
}