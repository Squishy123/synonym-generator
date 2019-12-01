import React from 'react';

export default ((props) => (
    <html>
        <head>
            <meta name="viewport" content="width=device-width, inital-scale=1.0" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
            />
            <title>{`${(props.title) ? props.title + " | " : ""}Ronin-React-View`}</title>
        </head>
        <body>
            {props.children}
        </body>
    </html>
));