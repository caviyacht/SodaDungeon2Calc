const { selector } = require("recoil");
const { playerDataAtom } = require("../atoms/playerDataAtom");
const { playerTeamIdAtom } = require("../atoms/playerTeamIdAtom");

export const playerTeamDataSelector = selector({
  key: "playerTeamDataSelector",
  get: ({ get }) => {
    const playerData = get(playerDataAtom);
    const teamId = get(playerTeamIdAtom);

    return playerData.teams[teamId] || {};
  },
  // `value` will contain the new team.
  set: ({ get, set }, value) => {
    const teamId = get(playerTeamIdAtom);

    set(playerDataAtom, state => ({
      ...state,
      teams: {
        ...state.teams,
        [teamId]: value
      }
    }));
  }
});