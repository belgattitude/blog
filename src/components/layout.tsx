import { Alert } from '../components/alert'
import { Footer } from '../components/footer'
import { Meta } from '../components/meta'

type Props = {
  preview?: boolean;
}

export const Layout: React.FC<Props> = ({children, preview}) => {
    return (
        <>
            <Meta />
            <div className="min-h-screen">
                <Alert preview={preview} />
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}


