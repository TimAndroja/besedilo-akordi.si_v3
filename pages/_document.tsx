import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
      rel="stylesheet"></link>
    </Head>
        <body className="light">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document