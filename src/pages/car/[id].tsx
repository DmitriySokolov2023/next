import {NextPage} from "next";
import {useRouter} from "next/router";

const CarPage:NextPage = () =>{
    const {asPath} = useRouter()
    console.log(asPath)
     return <div>Car page </div>

}

export default CarPage