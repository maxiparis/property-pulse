'use client';
import {useRouter, useParams} from "next/navigation";

export default function PropertyPage() {
    const router = useRouter()
    const params = useParams()
    // params is an object that contains the dynamic segments of the URL
    // for example, if the URL is /properties/123, params will be { id: '123' }

    return (<div>Property Page { params.id } </div>)
}