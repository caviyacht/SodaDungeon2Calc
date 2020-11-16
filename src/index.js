/* eslint-disable no-undef, no-unused-vars */
import { app } from "hyperapp";
import h from './hyperappjsx';
import data from './data';
import Characters from './components/Characters';

app({
  init: data,
  view: state =>
    <main>
      <div class="container">
        <Characters {...state}/>
      </div>
    </main>,
  node: document.getElementById("app")
});
