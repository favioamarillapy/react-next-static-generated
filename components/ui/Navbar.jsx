import { Spacer, Text, useTheme } from '@nextui-org/react'
import Link from 'next/link'

export const Navbar = () => {

    const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0px 50px',
            background: theme?.colors.gray900.value
        }}>

            <Link href="/" passHref>
                <a style={{ display: 'flex' }}>
                    <Text color="white" h2> P</Text>
                    <Text color="white" h3> ókemon </Text>
                </a>
            </Link>


            <Spacer css={{ flex: 1 }} />

            <Link href="/favorites" passHref>
                <a>
                    <Text color="white"> Favorites </Text>
                </a>
            </Link>
        </div>
    )
}
