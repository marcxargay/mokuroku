import * as Data from "../../public/data.json"
import {Temari} from "@/types";

export default function Home() {
  const allData: Temari = Data
  return (
     <div className="flex flex-col gap-4 p-12">
       {
         Object.entries(allData).map(([key, value]) => <a  key={key} className="rounded-xs border border-solid p-4" href={`play/${key}`}>{value.name}</a>)
       }
     </div>
  );
}
