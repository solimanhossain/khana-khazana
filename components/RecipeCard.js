import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({ recipe }) {
    const { name, thumbnail, rating, author } = recipe;

    return (
        <Link className="card" key={recipe._id} href={`/details/${recipe._id}`}>
            <Image
                src={thumbnail}
                className="rounded-md"
                alt="card image"
                width={300}
                height={160}
            />
            <h4 className="my-2">{name}</h4>
            <div className="py-2 flex justify-between text-xs text-gray-500">
                <span>
                    {Array(rating).fill("⭐️")} {rating}
                </span>
                <span>By: {author}</span>
            </div>
        </Link>
    );
}
