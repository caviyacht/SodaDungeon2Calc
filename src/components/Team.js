/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';
import TeamCharacter from './TeamCharacter';

export default ({team, ...props}) =>
  <div>
    <div>
      {team.characters.map((character, position) =>
        <TeamCharacter
          position={position}
          teamCharacter={character} 
          character={props.characters[character.characterId]} 
          {...props}/>
      )}
    </div>

    <div>
    </div>
  </div>;