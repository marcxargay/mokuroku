import './globals.css'
import * as React from 'react'

export default function RootLayout({
   children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <title>Mokuroku App</title>
            <link rel="icon" href="/favicon.ico" sizes="any"/>
        </head>
            <body>{children}</body>
        </html>
    )
}
