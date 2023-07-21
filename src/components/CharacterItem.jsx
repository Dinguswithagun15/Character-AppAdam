import './styles.css'

export default function CharacterItem({character,selectChar}){
    return(
        <li className='list-item'>
            <h3 className='list-title' onClick={() => selectChar(character)}>
            {character.name}</h3>
            Level {character.level} {character.class}
            <hr/>
        </li>
    )
}