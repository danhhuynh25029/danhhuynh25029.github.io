import { Category } from "./components/category";


const Sidebar = () => {
    const category = ["1", "2", "3"]
    const list = category.map((value) => <Category name={value} />)
    return (
        <>
            <h1>Sidebar</h1>
            {list}
        </>
    )
}

export default Sidebar;