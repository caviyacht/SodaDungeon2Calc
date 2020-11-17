/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';
import CharacterSelect from './CharacterSelect';
import CharacterEquipmentSelect from './CharacterEquipmentSelect';
import TeamCharacterStats from './TeamCharacterStats';

export default ({characterNumber, teamCharacter, character, ...props}) =>
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
        <div class="tab-pane show active" id={`${characterNumber}-equipment`} role="tabpanel" aria-labelledby="equipment-tab">
          <CharacterEquipmentSelect
            characterNumber={characterNumber}
            teamCharacter={teamCharacter}
            character={character} 
            {...props}/>
        </div>

        <div class="tab-pane" id={`${characterNumber}-stats`} role="tabpanel" aria-labelledby="stats-tab">
          <div class="card">
            <div class="card-header card-link py-1 px-2" id={`${characterNumber}-stats-required-header`} data-toggle="collapse" data-target={`#${characterNumber}-stats-required`} aria-expanded="true" aria-controls={`${characterNumber}-stats-required`}>
              Main
            </div>

            <div id={`${characterNumber}-stats-required`} class="collapse show" aria-labelledby={`${characterNumber}-stats-required-header`} data-parent={`#${characterNumber}-stats`}>
              <div class="card-body py-1 px-1">
                <TeamCharacterStats character={character} isOptional={false} {...props}/>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header card-link collapsed py-1 px-2" id={`${characterNumber}-stats-optional-header`} data-toggle="collapse" data-target={`#${characterNumber}-stats-optional`} aria-expanded="false" aria-controls={`${characterNumber}-stats-optional`}>
              Other
            </div>

            <div id={`${characterNumber}-stats-optional`} class="collapse" aria-labelledby={`${characterNumber}-stats-optional-header`} data-parent={`#${characterNumber}-stats`}>
              <div class="card-body py-1 px-1">
                <TeamCharacterStats character={character} isOptional={true} {...props}/>
              </div>
            </div>
          </div>

          
        </div>

        <div class="tab-pane" id={`${characterNumber}-survivability`} role="tabpanel" aria-labelledby="survivability-tab">

        </div>
      </div>
    </div>

    <div class="card-footer py-1 px-1">
      <ul class="nav nav-pills nav-fill" role="tablist">
        <li class="nav-item">
          <a class="nav-link active px-2 py-1" data-toggle="tab" href={`#${characterNumber}-equipment`} role="tab" aria-controls="equipment" aria-selected="true">Equipment</a>
        </li>

        <li class="nav-item">
          <a class="nav-link px-2 py-1" data-toggle="tab" href={`#${characterNumber}-stats`} role="tab" aria-controls="stats" aria-selected="false">Stats</a>
        </li>

        <li class="nav-item">
          <a class="nav-link px-2 py-1" data-toggle="tab" href={`#${characterNumber}-survivability`} role="tab" aria-controls="survivability" aria-selected="false">Survivability</a>
        </li>
      </ul>
    </div>
  </div>;