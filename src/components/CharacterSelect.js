/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';

export default ({currentCharacterId, currentCharacter, characters, ...props}) =>
  <select class="form-control form-control-sm">
    {Object.keys(characters).map(characterId => 
    {
      let character = characters[characterId];
      let isSelected = currentCharacterId === characterId;

      return <option value={characterId} selected={isSelected}>{character.name}</option>;
    })}
  </select>;