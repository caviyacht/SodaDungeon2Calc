import React, { createContext, useContext, useState } from "react";

const TeamContext = createContext();

const TeamProvider = ({children}) => {
  const [team, setTeam] = useState({});
  const value = { team, setTeam };

  return (
    <TeamContext.Provider value={value}>
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