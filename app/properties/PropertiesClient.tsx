'use client';

import { useCallback, useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeListing, SafeReservation, SafeUser } from "../types";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "../components/listing/ListingCard";

interface PropertiesClientProps {
    listings: SafeListing[] ;
    currentUser?: SafeUser | null;
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
    listings,
    currentUser
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);
        axios.delete(`/api/listings/${id}`)
        .then(() => {
            toast.success('listing deleted');
            router.refresh();
        })
        .catch((error) => {
            toast.error(error?.response?.data?.error);
        })
        .finally(() => {
            setDeletingId("");
        })
    },[router]);
    return ( 
        <Container>
            <Heading 
            center
            title="Properties"
            subtitle="List of your properties"
             />
             <div className="
              mt-10
              grid
              sm:grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              2xl:grid-cols-4
              gap-8
             ">
                {listings.map((listing) => (
                    <ListingCard 
                    key={listing.id}
                    data={listing}
                    actionId={listing.id}
                    onAction={onCancel}
                    disabled={deletingId === listing.id}
                    actionLabel="Delete Property"
                    currentUser={currentUser}
                    />
                ))}
             </div>
        </Container>
     );
}
 
export default PropertiesClient;