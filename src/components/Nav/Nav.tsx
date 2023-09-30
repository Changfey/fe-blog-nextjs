import Link from "next/link";
import styles from "./Nav.module.scss";

export default function Nav() {
	return (
		<div className={styles.nav}>
			<p className={styles.logo}>
				<Link href="/"><strong>Fei's Blog</strong></Link>
			</p>
			<div className={styles.links}>
				<div className={styles.home}>
					<Link href="/">
						Home
					</Link>
				</div>
				<div className={styles.about}>
					<Link href="/about">
						About
					</Link>
				</div>
				
				
			</div>
		</div>
	);
}

