import React, { createContext, useContext, useState } from "react";

const TeamContext = createContext();

const TeamProvider = ({children}) => {
  const [state, setTeam] = useState({});
  const providerValue = { state, setTeam };

  return (
    <TeamContext.Provider value={providerValue}>
      {children}
    </TeamContext.Provider>
  );
}

const useTeamContext = () => {
  const context = useContext(TeamContext);

  if (!context) {
    throw new Error('TeamContext must be used with TeamProvider!');
  }

  return context;
}

export { TeamProvider, useTeamContext };