
import Categories from "../shared/Categories";
export default function Main(props: any) {
    return (
        <div className="px-5 py-5">
            <Categories></Categories>
            {props.children}
        </div>
    )
}
