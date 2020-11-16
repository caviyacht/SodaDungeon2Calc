/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';
import CharacterSelect from './CharacterSelect';
import CharacterEquipmentSelect from './CharacterEquipmentSelect';

export default ({characterId, character, ...props}) =>
  <div class="card m-1">
    <div class="card-header py-1 bg-dark">
      <div class="row">
        <div class="col pl-0">
        <img src={character.images.portraits.primary} alt={character.name} width="30" height="30"/>
        </div>
        <div class="float-right">
          <CharacterSelect currentCharacterId={characterId} currentCharacter={character} {...props}/>
        </div>
      </div>
    </div>

    <div class="card-body py-1 px-1">
      <div class="tab-content">
        <div class="tab-pane show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <CharacterEquipmentSelect characterId={characterId} character={character} {...props}/>
        </div>

        <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <p class="card-text">
          </p>
        </div>

        <div class="tab-pane" id="contact" role="tabpanel" aria-labelledby="contact-tab">

        </div>
      </div>
    </div>

    <div class="card-footer py-1 px-1">
      <ul class="nav nav-pills" role="tablist">
        <li class="nav-item">
          <a class="nav-link active px-2 py-1" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Equipment</a>
        </li>

        <li class="nav-item">
          <a class="nav-link px-2 py-1" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Stats</a>
        </li>

        <li class="nav-item">
          <a class="nav-link px-2 py-1" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Survivability</a>
        </li>
      </ul>
    </div>
  </div>;