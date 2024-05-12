import {NextPage} from "next";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Head from "next/head";


const NotFound:NextPage = () => {
    return <Layout title={'123'}>
        <Head>
            <title>Not found</title>
        </Head>
        <h1>Error...(</h1>
        <div style={{textAlign:'center'}}>
            <Image src={'/404.png'} alt={'123'} width={500} height={433}/>
        </div>

    </Layout>
};

export default NotFound;