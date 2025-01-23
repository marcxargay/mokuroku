import Data from "../../public/data.json"
import {Temari} from "@/types";

export default function Home() {
    const allData: Temari = Data
    return (
        <div className="flex flex-col gap-4 p-12">
            <a className="bg-gray-500 rounded-lg text-white p-4" href={`play/all`}>TOT</a>
            {
                Object.entries(allData).map(([key, value]) => <a key={key}
                 className="bg-gray-500 rounded-lg text-white p-4"
                 href={`play/${key}`}>{value.name}</a>)
            }
        </div>
    );
}
