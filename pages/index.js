export { default } from "@containers/LoginPage";

export function getServerSideProps() {
    return {
        props: {
            initialState: {
                lastUpdate: Date.now()
            }
        }
    }
}