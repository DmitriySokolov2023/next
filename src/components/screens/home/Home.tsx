import Layout from '@/components/layout/Layout'
import CarItem from '@/components/ui/CarItem'
import { ICarData } from '@/sevices/car.interface'
import { FC } from 'react'

const Home: FC<ICarData> = ({ cars }) => {
	return (
		<Layout title='Home'>
			<h1>Hello word</h1>
			<div style={{ display: 'flex', gap: '40px', margin: '50px' }}>
				{cars.length ? (
					cars.map(car => <CarItem car={car} key={car.id} />)
				) : (
					<div>Cars not found</div>
				)}
			</div>
		</Layout>
	)
}

export default Home
