// Lista de países (puedes agregar más)
const countries = [
    'Afganistan', 'Albania', 'Alemania', 'Andorra', 'Angola', 'Antigua y Barbuda',
    'Arabia Saudita', 'Argelia', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaiyan', 'Bahamas', 'Barbados', 'Barein', 'Belgica', 'Belice', 'Benin', 
    'Bielorrusia', 'Birmania', 'Bolivia', 'Bosnia y Herzegovina', 'Botswana', 
    'Brasil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 
    'Camboya', 'Camerun', 'Canada', 'Chad', 'Chile', 'China', 'Colombia', 
    'Comoras', 'Congo', 'Corea del Norte', 'Corea del Sur', 'Costa Rica', 
    'Croacia', 'Cuba', 'Chipre', 'Republica Checa', 'Dinamarca', 'Dominica', 
    'Ecuador', 'Egipto', 'El Salvador', 'Emiratos Arabes Unidos', 'Eritrea', 
    'Eslovaquia', 'Eslovenia', 'Espana', 'Estados Unidos', 'Estonia', 'Eswatini', 
    'Etiopia', 'Fiyi', 'Filipinas', 'Finlandia', 'Francia', 'Gabon', 'Gambia', 
    'Georgia', 'Ghana', 'Granada', 'Grecia', 'Guatemala', 'Guinea', 'Guinea-Bissau', 
    'Guyana', 'Haiti', 'Holanda', 'Honduras', 'Hungria', 'India', 'Indonesia', 
    'Iran', 'Iraq', 'Irlanda', 'Islas Marshall', 'Islas Salomon', 'Israel', 
    'Italia', 'Jamaica', 'Japon', 'Jordania', 'Kazajistan', 'Kenia', 'Kirguistan', 
    'Kiribati', 'Latvia', 'Libano', 'Liberia', 'Libia', 'Liechtenstein', 
    'Lituania', 'Luxemburgo', 'Madagascar', 'Malasia', 'Malawi', 'Maldivas', 
    'Mali', 'Marruecos', 'Mauricio', 'Mauritania', 'Mexico', 'Micronesia', 
    'Monaco', 'Mongolia', 'Montenegro', 'Moravia', 'Mozambique', 'Namibia', 
    'Nauru', 'Nepal', 'Nicaragua', 'Niger', 'Nigeria', 'Noruega', 'Nueva Zelanda', 
    'Oman', 'Paises Bajos', 'Pakistan', 'Palaos', 'Panama', 'Papua Nueva Guinea', 
    'Paraguay', 'Peru', 'Polonia', 'Portugal', 'Reino Unido', 'Republica Centroafricana', 
    'Republica del Congo', 'Republica Dominicana', 'Republica Sudafricana', 
    'Rumania', 'Rusia', 'Rwanda', 'San Cristobal y Nieves', 'San Marino', 
    'Santa Lucia', 'Santa Elena', 'Santo Tome y Principe', 'Senegal', 
    'Serbia', 'Seychelles', 'Sierra Leona', 'Singapur', 'Siria', 'Somalia', 
    'Sri Lanka', 'Sudan', 'Suecia', 'Suiza', 'Surinam', 'Tailandia', 
    'Timor Oriental', 'Togo', 'Tonga', 'Trinidad y Tobago', 'Tunez', 
    'Turkmenistan', 'Turquia', 'Tuvalu', 'Ucrania', 'Uganda', 'Uruguay', 
    'Uzbekistan', 'Vanuatu', 'Vaticano', 'Venezuela', 'Vietnam', 
    'Yemen', 'Zambia', 'Zimbabue'
];


// Función para filtrar y mostrar países en el campo de texto
function filterCountries() {
    const input = document.getElementById('pais');
    const filter = input.value.toLowerCase();
    const suggestions = document.getElementById('autocomplete-suggestions');
    suggestions.innerHTML = '';

    if (filter.length === 0) return;

    const filteredCountries = countries.filter(country => 
        country.toLowerCase().includes(filter)
    );

    filteredCountries.forEach(country => {
        const div = document.createElement('div');
        div.textContent = country;
        div.onclick = () => {
            input.value = country;
            suggestions.innerHTML = '';
        };
        suggestions.appendChild(div);
    });
}

// Mostrar todos los países cuando el campo de texto recibe el foco
function showAllCountries() {
    const suggestions = document.getElementById('autocomplete-suggestions');
    suggestions.innerHTML = '';

    countries.forEach(country => {
        const div = document.createElement('div');
        div.textContent = country;
        div.onclick = () => {
            document.getElementById('pais').value = country;
            suggestions.innerHTML = '';
        };
        suggestions.appendChild(div);
    });
}

// Función para alternar la visibilidad de la sección de países
function toggleSectionRadio(groupName, value, sectionClass) {
    const radios = document.getElementsByName(groupName);
    const section = document.querySelector(`.${sectionClass}`);
    
    if (section) {
        section.style.display = 'none'; // Ocultar sección por defecto
    }

    radios.forEach(radio => {
        if (radio.checked && radio.value === value) {
            if (section) {
                section.style.display = 'block'; // Mostrar sección si coincide el valor
            }
        }
    });
}
