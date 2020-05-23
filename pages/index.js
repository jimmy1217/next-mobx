// import { getLayout } from '@layouts'
export { default } from "@containers/LoginPage";
// LoginPageEntry.getLayout = page => <div><h1>hello</h1>{page}</div>

// export default LoginPageEntry
// export function getServerSideProps() {
//     return {
//         props: {
//             initialState: {
//                 loginStore: {
//                     lastUpdate: Date.now()
//                 }
//             }
//         }
//     }
// }


export function getStaticProps() {
    return {
        props: {
            initialState: {
                loginStore: {
                    lastUpdate: Date.now()
                }
            }
        }
    }
}