import { ICarDataSingle } from '@/sevices/car.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './CarItem.module.scss'

const CarItem: FC<ICarDataSingle> = ({ car }) => {
	return (
		<div className={styles.item}>
			<h2>{car.stamp}</h2>
			<h3>{car.model}</h3>
			<small>{car.cost} р.</small>
			<Image src={car.image} alt={car.model} width={200} height={150} />
			<div>
				<Link href={`/car/${car.id}`}>Read more</Link>
			</div>
		</div>
	)
}
export default CarItem
