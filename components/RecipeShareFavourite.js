"use client";

import { AuthContext } from "@/contexts";
import { addFavourite } from "@/actions/user";
import ShareOption from "@/components/ShareOption";
import { Favourite, Share } from "@/components/SvgIcon";
import { useContext, useEffect, useState } from "react";

export default function RecipeShareFavourite({ id }) {
    const [log, setLog] = useState("");
    const [isFav, setIsFav] = useState(false);
    const [share, setShare] = useState(false);
    const { auth, setAuth } = useContext(AuthContext);

    useEffect(() => {
        if (auth?.favourites?.includes(id)) {
            setIsFav(true);
        }
    }, [auth?.favourites, id]);

    function handleFavourite() {
        if (!auth) {
            setLog("You need to login first");
            return;
        }
        if (auth?.favourites?.includes(id)) {
            setLog("Already added to favourites");
            return;
        }
        setIsFav(true);
        addFavourite(auth?.email, auth?.password, id);
        setAuth((prev) => ({
            ...prev,
            favourites: [...prev?.favourites, id],
        }));
    }

    function handleShare() {
        setShare(!share);
    }

    return (
        <>
            <div
                onClick={handleFavourite}
                className="flex flex-col gap-2 items-center relative"
            >
                <div
                    className={`flex gap-2  cursor-pointer ${
                        isFav
                            ? "text-[#eb4a36]  hover:text-gray-600"
                            : "text-gray-600  hover:text-[#eb4a36]"
                    }`}
                >
                    <Favourite />
                    <span>Favourite</span>
                </div>
                <p className="text-red-500 text-sm absolute text-center top-6">
                    {log}
                </p>
            </div>

            <div
                onClick={handleShare}
                className="flex gap-2 justify-center text-gray-600 cursor-pointer hover:text-[#0E79F6] relative"
            >
                <Share />
                <span>Share</span>
                {share && <ShareOption />}
            </div>
        </>
    );
}
