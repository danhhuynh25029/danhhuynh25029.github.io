import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
const Home = () => {
    return (
        <>
            <Layout>
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={new Array(15).fill(null).map((_, index) => {
                            const key = index + 1;
                            return {
                                key,
                                label: `nav ${key}`,
                            };
                        })}
                    />
                </Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    )
}
export default Home;