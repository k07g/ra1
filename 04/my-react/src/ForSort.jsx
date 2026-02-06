import ForItem from "./ForItem";

export default function ForSort({src}){
    const sorted = [...src].sort((m,n)=>m.price - n.price);
    return(
        <dl>
            {sorted.map(elem => (
                <ForItem book={elem} key={elem.isbn} />
            ))}
        </dl>
    );
}