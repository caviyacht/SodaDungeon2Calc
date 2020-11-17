/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';
import TeamCharacter from './TeamCharacter';

const TeamCharacterRow = ({team, characterNumbers, ...props}) =>
  <div class="row mb-2">
    {characterNumbers.map(characterNumber =>
    <div class="col-md-6 px-1">
      <TeamCharacter
        characterNumber={characterNumber}
        teamCharacter={team.characters[characterNumber]} 
        character={props.characters[team.characters[characterNumber].characterId]}
        {...props}/>
        </div>
    )}
  </div>

export default ({teamId, team, ...props}) =>
  <div>
    <div class="container">
      <TeamCharacterRow
        team={team}
        characterNumbers={[0, 1]}
        {...props}/>

      <TeamCharacterRow
        team={team}
        characterNumbers={[2, 3]}
        {...props}/>

      <TeamCharacterRow
        team={team}
        characterNumbers={[4, 5]}
        {...props}/>
    </div>

    <div>
    </div>
  </div>;