import Categories from "../shared/Categories";
export default function Main(props: any) {
  return (
    <div className="p-6 sm:py-6 xl:px-12 min-h-full bg-blue-300 bg-opacity-5  ">
      <Categories></Categories>
      {props.children}
    </div>
  );
}
