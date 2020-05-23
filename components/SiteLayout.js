const SiteLayout = ({ children }) => (
    <div className="bg-white antialiased">
        {children}
    </div>
);

export const getLayout = page => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
