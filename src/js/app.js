const characterHealth = {
  green: {
    health: 51,
    status: 'healthy',
  },
  yelow: {
    health: 15,
    status: 'wounded',
  },
  red: {
    health: 0,
    status: 'critical',
  },
};

export default function healthStatus(character) {
  const keyColour = Object.keys(characterHealth).find(
    (colour) => character.health >= characterHealth[colour].health,
  );
  if (!keyColour) {
    return 0;
  }
  return characterHealth[keyColour].status;
}
