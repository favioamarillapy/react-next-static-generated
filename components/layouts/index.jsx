import Head from 'next/head'

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Pokemon App | NextJS Static Generated</title>
                <meta name="content" author="Favio Amarilla"></meta>
            </Head>


            <main>
                {children}
            </main>


        </>
    )
}
