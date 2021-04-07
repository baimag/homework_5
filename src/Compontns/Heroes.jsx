const {useState} = require("react");

function Heroes () {
    const [names, setNames] = useState([
        "Шерлок Холмс",
        "Доктор Ватсон",
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"
    ])
    return (
        <>
            {names.map(hero => {
                return (
                    <ul>
                        <li>
                            {hero}
                        </li>
                    </ul>
                )
            })}
        </>
    )
}
export default Heroes