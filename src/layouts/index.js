import styled from "styled-components";

const SiteLayout = ({ children }) => {
    return (
        <LayoutWrapper>
            <div className="top_nav">
                
            </div>
            <div className="container__wrapper">
                <div className="nav_container">

                </div>
                <div className="container_body">
                    {children}
                </div>
            </div>

        </LayoutWrapper>
    )
}

const LayoutWrapper = styled.div`
    height:100%;
    .top_nav {
        height:50px;
        border:1px solid #ddd;
    }
    .container__wrapper {
        display:flex;
        height:100%;
        .nav_container{
            width:240px;
            height:100%;
            background-color: #252d3a;
        }
        .container_body {
            padding:20px;
        }
    }
    
`
export const getLayout = page => <SiteLayout>{page}</SiteLayout>

export default SiteLayout