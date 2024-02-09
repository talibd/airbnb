'use client';

import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listing/ListingCard";
import { SafeListing, SafeUser } from "../types";

interface FavoritesClientPops {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientPops> = ({
    listings,
    currentUser
}) => {
    return ( 
        <Container>
            <Heading
            center
            title="Favorites"
            subtitle="List of your favorites "
            />
            <div className="
             mt-10
             grid
             grid-cols-1
             sm:grid-cols-2
             md:grid-cols-3
             lg:grid-cols-4
             xl:grid-cols-5
             2xl:grid-cols-6
             gap-8
            ">
                {listings.map((listing) => (
                    <ListingCard
                    key={listing.id}
                    currentUser={currentUser}
                    data={listing}
                    />
                ))}
            </div>
        </Container>
     );
}
 
export default FavoritesClient;