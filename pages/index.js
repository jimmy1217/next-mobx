export { default } from "@containers/LoginPage";

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