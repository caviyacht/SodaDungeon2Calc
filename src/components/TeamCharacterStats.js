/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';

export default ({character, isOptional, ...props}) =>
  <table class="table table-striped table-sm">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Stat</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(character.stats).filter(statId => {
        if (isOptional) {
          return props.stats[statId].isOptional === true;
        }

        return !props.stats[statId].isOptional;
      }).map(statId =>
        <tr>
          <th class="table-secondary">{props.stats[statId].name}</th>
          <td>{props.stats[statId].type === "number"
            ? character.stats[statId]
            : `${(character.stats[statId] * 100).toFixed(2)}%`
          }</td>
        </tr>
      )}
    </tbody>
  </table>;