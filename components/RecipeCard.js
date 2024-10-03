import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({ recipe }) {
    const { name, thumbnail, rating, author } = recipe;

    return (
        <Link
            className="card border rounded-md"
            key={recipe._id}
            href={`/details/${recipe._id}`}
        >
            <div className="relative h-[180px] overflow-hidden">
                <Image
                    src={thumbnail}
                    alt="card image"
                    width={400}
                    height={180}
                    objectFit="cover"
                />
            </div>
            <div className="m-4">
                <h4 className="my-2">{name}</h4>
                <div className="py-2 flex justify-between text-xs text-gray-500">
                    <span>By: {author}</span>
                    <span>
                        {Array(rating).fill("⭐️")} {rating}
                    </span>
                </div>
            </div>
        </Link>
    );
}
