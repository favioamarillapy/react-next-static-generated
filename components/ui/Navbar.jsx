import { Image, Spacer, Text, useTheme } from '@nextui-org/react';
import React from 'react'

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0px 20px',
            background: theme?.colors.gray900.value
        }}>

            <Text color="white" h2> P</Text>
            <Text color="white" h3> ókemon </Text>

            <Spacer css={{ flex: 1 }} />
            <Text color="white"> Favorites </Text>
        </div>
    )
}
