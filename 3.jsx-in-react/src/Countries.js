function Countries() {

    const countries = ['Namiba', 'Kenya', 'Egypt']
    return (
        <ul>
            <ListItem name="Nigeria" />
            <li>Nigeria</li>
            <li>South Africa</li>
            <li>Ghana</li>
            <li>Niger</li>
            <li>Botswana</li>
            {countries.map((country, index) => {
                return (
                    <li key={index}>{country}</li>
                )
            })}
        </ul>
    )
}

export default Countries;