import "./PlayerHealth.css"
const PlayerHealth = ({health = 100, badGuy = false}) => {
    const color = badGuy ? 'red': 'green';
    const healthStyle = {
        color: color
    };
    return (
        <p className="PlayerHealth" style={healthStyle}>{badGuy ? 'Enemy': 'Player'} Health: {health} ❤️‍🔥</p>
    )
};

export default PlayerHealth;