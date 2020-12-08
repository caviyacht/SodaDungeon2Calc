

// TODO: This is all horrible, replace it.
const PlayerTeamSurvivabilitySection = ({stats, title, type, isBackAttack}) => {
  const playerContext = usePlayerContext();

  return (
    <>
      <tr>
        <th colSpan="6" className="text-center" style={{backgroundColor: "var(--gray-dark)"}}>
          {title}
        </th>
      </tr>
      <tr>
        {stats.map(stat => {
          const value = calculateAttackDamagePercent(type, isBackAttack, stat, playerContext.player.floor);

          return <td className={getSurvivabiltyClassName(value * 100)}>{formatStat({ // TODO: Don't do this
            valueType: "percent",
            value
          })}</td>;
        })}
      </tr>
    </>
  );
}

const PlayerTeamSurvivability = ({team}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

  const teamStats = calculateTeamStats(team, playerContext, dataContext);
  const characterTeamStats = teamStats.filter(teamStat => teamStat.member.itemType === "character");

  return (
    <Card>
      <Card.Header>
        Survivability
      </Card.Header>
      <Card.Body className="px-0">
        <Table borderless size="sm">
          <thead>
            <tr>
              {characterTeamStats.map(teamStat =>
                <th><Image src={teamStat.member.item.image} size="38px" /></th>
              )}
            </tr>
          </thead>
          <tbody>
            <PlayerTeamSurvivabilitySection title="Attack" type="strike" isBackAttack={false} stats={characterTeamStats} />
            <PlayerTeamSurvivabilitySection title="Poison (3 ticks)" type="psn" isBackAttack={false} stats={characterTeamStats} />
            <PlayerTeamSurvivabilitySection title="Burn (3 ticks)" type="burn" isBackAttack={false} stats={characterTeamStats} />
            <PlayerTeamSurvivabilitySection title="Dark Slash" type="dark_slash" isBackAttack={false} stats={characterTeamStats} />
            <PlayerTeamSurvivabilitySection title="Back Attack" type="strike" isBackAttack={true} stats={characterTeamStats} />
            <PlayerTeamSurvivabilitySection title="Poison Back Attack" type="psn" isBackAttack={true} stats={characterTeamStats} />
            <PlayerTeamSurvivabilitySection title="Burn Back Attack" type="burn" isBackAttack={true} stats={characterTeamStats} />
            <PlayerTeamSurvivabilitySection title="Dark Slash Back Attack" type="dark_slash" isBackAttack={true} stats={characterTeamStats} />
          </tbody>
        </Table>
        {/* Desktop? */}
        <Table borderless size="sm" className="d-none">
          <thead>
            <tr>
              <th>Character</th>
              <th>ATK</th>
              <th>PSN</th>
              <th>BURN</th>
              <th>DS</th>
              <th>Back ATK</th>
              <th>PSN Back ATK</th>
              <th>BURN Back ATK</th>
              <th>DS Back ATK</th> 
            </tr>
          </thead>
          <tbody>
            {teamStats.filter(teamStat => teamStat.member.itemType !== "pet").map(teamStat =>
              <tr>
                <th>{teamStat.member.item.name}</th>
                <td>{calculateAttackDamagePercent("strike", false, teamStat, playerContext.player.floor)}</td>
                <td>{calculateAttackDamagePercent("psn", false, teamStat, playerContext.player.floor)}</td>
                <td>{calculateAttackDamagePercent("burn", false, teamStat, playerContext.player.floor)}</td>
                <td>{calculateAttackDamagePercent("dark_slash", false, teamStat, playerContext.player.floor)}</td>
                <td>{calculateAttackDamagePercent("strike", true, teamStat, playerContext.player.floor)}</td>
                <td>{calculateAttackDamagePercent("psn", true, teamStat, playerContext.player.floor)}</td>
                <td>{calculateAttackDamagePercent("burn", true, teamStat, playerContext.player.floor)}</td>
                <td>{calculateAttackDamagePercent("dark_slash", true, teamStat, playerContext.player.floor)}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

const getSurvivabiltyClassName = (value) => {
  if (value < 10) {
    return "bg-survivability-0-10";
  }

  if (value < 25) {
    return "bg-survivability-10-25";
  }

  if (value < 50) {
    return "bg-survivability-25-50";
  }

  if (value < 75) {
    return "bg-survivability-50-75";
  }

  return "bg-survivability-75-100";
}

const getStatOrDefault = (statId, stats, defaultValue) => {
  const stat = stats.find(stat => stat.id === statId);

  return stat
    ? stat.value
    : defaultValue;
}

const calculateAttackDamagePercent = (type, isBackAttack, teamStat, floor) => {
  const preventsBackAtkBonus = getStatOrDefault("prevents_back_atk_bonus", teamStat.stats, false);
  const preventsBurn = getStatOrDefault("prevents_burn", teamStat.stats, false);

  // TODO: I hate this.
  const enemyAttack = 10.1 + Math.floor(
    floor 
      * (type === "dark_slash" ? 0.156 : 0.12) 
      * (isBackAttack && !preventsBackAtkBonus ? 1.5 : 1.0));
      
  const dmgReduction = getStatOrDefault("dmg_reduction", teamStat.stats, 0.00);
  const hpTotal = getStatOrDefault("hp_total", teamStat.stats, 1);

  let damagePercent = (enemyAttack * (1 - dmgReduction)) / hpTotal;

  if (type === "psn") {
    damagePercent += 3 * (Math.ceil(hpTotal * 0.1) / hpTotal);
  }

  if (type === "burn" && !preventsBurn) {
    damagePercent += (Math.ceil(hpTotal * 0.06) / hpTotal)
      + (Math.ceil(hpTotal * 0.06 * 2) / hpTotal)
      + (Math.ceil(hpTotal * 0.06 * 3) / hpTotal);
  }

  return damagePercent;
}