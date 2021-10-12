import Head from 'next/head';
import Navbar from './Navbar';
const Layout = ({ children, title}) => {
    return (
        <>
        <Head>
            <title>{title || 'MAKEUP & CO - Best Online Makeup Retailer'}</title>
            <meta property="og:title" content={title || 'MAKEUP & CO - Best Online Makeup Retailer'} key="title" />
            <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
        </Head>
        <main>
            <Navbar />
            {children}
        </main>
        </>
    )
}

export default Layout;