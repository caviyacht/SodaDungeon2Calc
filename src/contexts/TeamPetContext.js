import React, { createContext, useContext, useState } from "react";

const TeamPetContext = createContext();

const PlayerProvider = ({children}) => {
  const [player, setPlayer] = useState(playerData);
  const value = { player };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
}

const usePlayerContext = () => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error('PlayerContext must be used with PlayerProvider!');
  }

  return context;
}

export { PlayerProvider, usePlayerContext };