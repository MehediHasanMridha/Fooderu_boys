import Filter from "../components/Filter/Filter";
import RestaurantCard from "../components/RestaurantCart/RestaurantCard";

const Restaurant = () => {
    const restID = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
    ]
    return (
        <div>

            <h2 className="capitalize font-semibold">Nav bar will be here</h2>
            <h2 className="capitalize font-semibold">in desktop view add the side menu form other tab (-_-)</h2>
            <Filter />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {restID.map(rid => <RestaurantCard key={rid} />)}
            </div>
        </div>
    );
};

export default Restaurant;