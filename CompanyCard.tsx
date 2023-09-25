import Image from "next/image";
interface CompanyCardProps {
    image: string;
    name: string;
    description: string;
}
export function CompanyCard(props: CompanyCardProps) {
    const descripcion = props.description.length >= 260 ? props.description.substring(0, 260) + " ..." : props.description;
    return (
        <div className="relative rounded-md w-96 h-96 overflow-hidden">
            <Image src={props.image} height={300} width={300} alt={props.name} className="min-w-full h-full" />
            <div className="absolute bottom-0 left-0 right-0 bg-slate-950 text-white z-10 h-1/2 opacity-75 px-4  pb-2">
                <h1 className="py-2 text-xl font-bold ">{props.name}</h1>
                <p>{descripcion}</p>
            </div>
        </div >
    )
}
