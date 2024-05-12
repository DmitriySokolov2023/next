import Layout from '@/components/layout/Layout'
import CarItem from '@/components/ui/CarItem'
import { ICarDataSingle } from '@/sevices/car.interface'
import { FC } from 'react'

const CarDetail: FC<ICarDataSingle> = ({ car }) => {
	return (
		<Layout title={car.model} description='Good expensive car!'>
			<CarItem car={car} />
		</Layout>
	)
}

export default CarDetail
