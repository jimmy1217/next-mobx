const SiteLayout = ({ children }) => {
    return (
        <div>
            <h1>123</h1>
            {children}
        </div>
    )
}

export const getLayout = page => <SiteLayout>{page}</SiteLayout>

export default SiteLayout