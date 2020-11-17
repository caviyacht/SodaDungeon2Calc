/* eslint-disable no-undef, no-unused-vars */
import { app } from "hyperapp";
import h from './hyperappjsx';
import data from './data';
import Team from './components/Team';

app({
  init: data,
  view: (state, actions) =>
    <main>
      <div class="container">
        <Team teamId={0} team={state.teams[0]} {...state}/>
      </div>
    </main>,
  node: document.getElementById("app")
});
