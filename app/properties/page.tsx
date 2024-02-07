import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import TripsClient from "./PropertiesClient";
import getListings from "../actions/getListing";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
    const currentUser =await getCurrentUser();

    if(!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                title="Unauthorized"
                subtitle="Please login"
                />
            </ClientOnly>
        )
    }
    const listigs = await getListings({
        userId: currentUser.id
    });

    if (listigs.length === 0 ) {
        return (
            <ClientOnly>
                <EmptyState 
                title="No properties Found"
                subtitle="Looks like you havent add properties"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <PropertiesClient
            listings={listigs}
            currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default PropertiesPage;