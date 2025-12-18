type Props = {
    titulo: string
    tipo: "black" | "red" | "gray"
    fullW: boolean
    handleOnclick?: React.MouseEventHandler<HTMLButtonElement>
}


export default function Boton(props: Props){
    if(props.tipo=="black"){
    return <button className={props.fullW?"w-full px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700":
    "px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"}>
        {props.titulo}
    </button>}else if(props.tipo=="red"){
        return <button className={props.fullW?"w-full px-4 py-2 rounded-md border border-slate-300  text-slate-700 text-sm font-medium hover:bg-slate-50":
    "px-4 py-2 rounded-mdborder border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50"}>
        {props.titulo}
    </button>}else if(props.tipo=="gray"){
        return <button className={props.fullW?"w-full px-4 py-2 rounded-md bg-red-600 text-white text-sm font-medium hover:bg-red-700":
    "px-4 py-2 rounded-md bg-red-600 text-white text-sm font-medium hover:bg-red-700"}>
        {props.titulo}
    </button>}
}

