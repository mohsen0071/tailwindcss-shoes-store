import { SHOE_LIST } from "../constant";
import Card from "./Card";

const NewArrivalSection = ({items, onClickCard }) => {
    return <div className="mt-20" >
        <div className="flex-center dark:text-white">
            <div className="bg-[url('./assets/lines.png')] text-4xl font-extrabold bg-center">
                NEW ARRIVAL
            </div>
        </div>
        <div className="mt-10 grid grid-cols-1 justify-between gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
            {items.map(item => <Card key={item.id} item={item} onClick={onClickCard}/>)}
        </div>
    </div> 

}
 
export default NewArrivalSection;