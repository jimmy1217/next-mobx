const SiteLayout = ({ children }) => {
    console.log('layout render')
    return (
        <div>
            {children}
        </div>
    )
}

export const getLayout = page => <SiteLayout>{page}</SiteLayout>

export default SiteLayout