import CarDetail from '@/components/screens/car-detail/CarDetail'
import { ICarDataSingle } from '@/sevices/car.interface'
import { CarService } from '@/sevices/car.service'
import { GetStaticProps, NextPage } from 'next'

const CarDetailPage: NextPage<ICarDataSingle> = ({ car }) => {
	return <CarDetail car={car} />
}

export async function getStaticPaths() {
	const cars = await CarService.getAll()
	return {
		paths: cars.map(car => ({
			params: { id: car.id.toString() },
		})),
		fallback: 'blocking',
	}
}
export const getStaticProps: GetStaticProps<ICarDataSingle> = async ({
	params,
}) => {
	const car = await CarService.getById(`${params?.id}`)
	return {
		props: { car },
		revalidate: 60,
	}
}
export default CarDetailPage
