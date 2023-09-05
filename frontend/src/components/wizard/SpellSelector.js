import SpellCard from "./SpellCard"
export default function SpellSelector({spells}) {
    return (
        <>
        {
            spells.map(spell => <SpellCard spell={spell}/>)

        }
        </>
    );
}