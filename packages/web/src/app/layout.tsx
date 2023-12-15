import { ReactNode } from 'react';

export type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang='en'>
            <head>
                <title>Binge Creek</title>
            </head>
            <body>{children}</body>
        </html>
    );
}
