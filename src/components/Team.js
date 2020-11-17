/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';
import TeamCharacter from './TeamCharacter';

export default ({teamId, team, ...props}) =>
  <div>
    <div>
      {team.characters.map((teamCharacter, characterNumber) =>
        <TeamCharacter
          characterNumber={characterNumber}
          teamCharacter={teamCharacter} 
          character={props.characters[teamCharacter.characterId]}
          {...props}/>
      )}
    </div>

    <div>
    </div>
  </div>;