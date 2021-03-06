import styles from '../styles/Home.module.css';

import Link from 'next/link';
import Card from './card.js';

export default function PostsList({ posts }){
	console.log('post link', { posts });
	return (
		<div className={styles.grid}>
			{ posts.map(i =>
			<Card key={i.id} linkTo={`/post/${i.id}`}>
				<h2>{i.title}</h2>
				<p>Author: {i.author.username}</p>
			</Card>
			) }
		</div>
	)
}

