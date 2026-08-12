import { getFullName } from "../../utils/clients";
import { Link } from "react-router-dom"
export function ClientSummary({client}){
    console.log(client.id);
    return(
        <div>
        <div>{getFullName(client)}</div>
        <Link to={`/clients/${client.id}`}>View client</Link>
    </div>
    );
}