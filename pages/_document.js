import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {

    const script = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-91311733-1');`

    return (
      <html>
        <body>
            <Head/>
            <Main />
            <NextScript />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-91311733-1"></script>
            <script dangerouslySetInnerHTML={{__html: script}}></script>
        </body>
      </html>
    )
  }
}