/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';
import CharacterSelect from './CharacterSelect';
import CharacterEquipmentSelect from './CharacterEquipmentSelect';

export default ({position, teamCharacter, character, ...props}) =>
  <div class="card m-1">
    <div class="card-header py-1 bg-dark">
      <div class="row">
        <div class="col pl-0">
          <img src={character.images.portraits.primary} alt={character.name} width="30" height="30"/>
        </div>
        <div class="float-right">
          <CharacterSelect
            currentCharacterId={teamCharacter.characterId} 
            currentCharacter={character} 
            {...props}/>
        </div>
      </div>
    </div>

    <div class="card-body py-1 px-1">
      <div class="tab-content">
        <div class="tab-pane show active" id={`${position}-${teamCharacter.characterId}-equipment`} role="tabpanel" aria-labelledby="equipment-tab">
          <CharacterEquipmentSelect
            position={position}
            teamCharacter={teamCharacter}
            character={character} 
            {...props}/>
        </div>

        <div class="tab-pane" id={`${position}-${teamCharacter.characterId}-stats`} role="tabpanel" aria-labelledby="stats-tab">
          <p class="card-text">
          </p>
        </div>

        <div class="tab-pane" id={`${position}-${teamCharacter.characterId}-survivability`} role="tabpanel" aria-labelledby="survivability-tab">

        </div>
      </div>
    </div>

    <div class="card-footer py-1 px-1">
      <ul class="nav nav-pills nav-fill" role="tablist">
        <li class="nav-item">
          <a class="nav-link active px-2 py-1" data-toggle="tab" href={`#${position}-${teamCharacter.characterId}-equipment`} role="tab" aria-controls="equipment" aria-selected="true">Equipment</a>
        </li>

        <li class="nav-item">
          <a class="nav-link px-2 py-1" data-toggle="tab" href={`#${position}-${teamCharacter.characterId}-stats`} role="tab" aria-controls="stats" aria-selected="false">Stats</a>
        </li>

        <li class="nav-item">
          <a class="nav-link px-2 py-1" data-toggle="tab" href={`#${position}-${teamCharacter.characterId}-survivability`} role="tab" aria-controls="survivability" aria-selected="false">Survivability</a>
        </li>
      </ul>
    </div>
  </div>;