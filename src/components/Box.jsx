function Box(props) {
    const colorStyles = {
        divs: {
            "backgroundColor": props.background,
            "padding":"1rem"
        }
    }
    return (
        <div style={colorStyles.divs}>
            <h1 style={ { "color": props.color}}>
                {props.text}</h1>
            <p className={props.textClass}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, alias!</p>
            </div>
    )
}
export default Box;