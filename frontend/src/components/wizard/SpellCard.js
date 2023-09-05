import { CONSTANTS } from "./../../constants"
export default function SpellItem({spell}) {
    return(
        <>
            <div>
                <img alt={spell.id} src={CONSTANTS.cloudinaryBaseLink + spell.img}/>
                {spell.id}
            </div>
        </>
    )
}