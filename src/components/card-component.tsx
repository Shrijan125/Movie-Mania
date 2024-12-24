import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Link, Star } from "lucide-react";
import React from "react"

export interface cardprops {
    movie: string;
    rating: string;
    id: string;
    imdb_url: string;
    image: string;
}

const CardComponent: React.FC<cardprops> = ({ movie, rating, id, imdb_url, image }) => {
    return (
        <Card className="lg:w-[400px] w-[300px] h-[300px] group transition duration-300 ease-in-out hover:shadow-[0_0_15px_5px] hover:shadow-[#E11D47]">
            <CardHeader>
                <CardTitle className="text-bgPrimary/80">{movie}</CardTitle>
                <CardDescription>
                    <div className="mt-3 flex items-center gap-4 text-sm">
                        <Star className="text-bgPrimary fill-bgPrimary"></Star>{rating}
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent className="gap-5 flex flex-col">
            <a target="_blank" href={imdb_url}>
                        <div className="flex gap-2 items-center text-rose-200">
                            <Link></Link>
                            <span className="font-medium">IMDB URL</span>
                        </div>
                    </a>
                <p className="text-rose-200">
                    <span className="font-bold ">ID</span> {id}
                </p>
                   
                <p className="text-rose-200">
                    <span className="font-bold">Image</span> {image}
                </p>
            </CardContent>
        </Card>
    )
}

export default CardComponent
