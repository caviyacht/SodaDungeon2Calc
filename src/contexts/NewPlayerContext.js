import React, { createContext, useContext, useState } from "react";
import { withContext } from "../utils";
import { useDataContext } from "./NewDataContext";

const PlayerContext = createContext();

const PlayerProvider = ({player, children}) => {
  const [state, setState] = useState(player);
  const value = { player: state, dispatch: setState };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};

const usePlayerContext = () => {
  const dataContext = useDataContext();
  const playerContext = useContext(PlayerContext);

  if (!playerContext) {
    throw new Error('PlayerContext must be used with PlayerProvider!');
  }

  return initContext(playerContext, {
    getTeam,
    loadTeam: withContext(dataContext, loadTeam),
  });
};

const initContext = (context, funcs) => {
  return Object.entries(funcs).reduce((result, [name, func]) => {
    result[name] = withContext(context, func);

    return result;
  }, context);
};

const getTeam = playerContext => id => ({
  entityId: "team-" + id, // TODO: Handle null?
  type: "team",
  id,
  ...playerContext.player.teams[id]
});

const loadTeam = dataContext => playerContext => id => {
  return dataContext.loadEntity(playerContext.getTeam(id));
};

export { PlayerProvider, usePlayerContext };