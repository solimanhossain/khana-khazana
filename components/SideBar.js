import Link from "next/link";

export default function SideBar({ categorys }) {
    return (
        <div className="col-span-12 md:col-span-3">
            <h3 className="font-bold text-xl">Recipes</h3>
            <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
                {categorys.map((category) => (
                    <li key={category}>
                        <Link href={`categorized/${category}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
