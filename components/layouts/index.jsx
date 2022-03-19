import Head from 'next/head'
import { Navbar } from '../ui/Navbar'

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Pokemon App | NextJS Static Generated</title>
                <meta name="content" author="Favio Amarilla"></meta>
            </Head>


            <Navbar />


            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>


        </>
    )
}
