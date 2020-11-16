/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';
import Character from './Character';

export default (props) =>
  <div class="row">
    {Object.keys(props.characters).map(characterId =>
      <Character characterId={characterId} character={props.characters[characterId]} {...props}/>
    )}
  </div>;