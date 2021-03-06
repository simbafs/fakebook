import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
			<h1>Fakeboook</h1>
			<div className={styles.grid}>
				<Link href="/user">
					<a className={styles.card}>User</a>
				</Link>
				<Link href="/post">
					<a className={styles.card}>Post</a>
				</Link>
			</div>
		</>
	);
}
