import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({
    min,
    max,
    name,
    img,
    onClose,
    id,
    country,
    lang,
}) {
    //console.log("LANG", lang)

    let array = [
    { country: "AF" , en: "(AFGHANISTAN)" , es: "(AFGANISTAN)" },
    { country: "AX" , en: "(ALAND ISLANDS)" , es: "(ISLAS ALAND)" },
    { country: "AL" , en: "(ALBANIA)" , es: "(ALBANIA)" },
    { country: "DZ" , en: "(ALGERIA)" , es: "(ALGERIA)" },
    { country: "AS" , en: "(AMERICAN SAMOA)" , es: "(SAMOA AMERICANA)" },
    { country: "AD" , en: "(ANDORRA)" , es: "(ANDORRA)" },
    { country: "AO" , en: "(ANGOLA)" , es: "(ANGOLA)" },
    { country: "AI" , en: "(ANGUILLA)" , es: "(ANGUILA)" },
    { country: "AQ" , en: "(ANTARCTICA)" , es: "(ANTARTIDA)" },
    { country: "AG" , en: "(ANTIGUA AND BARBUDA)" , es: "(ANTIGUA Y BARBUDA)" },
    { country: "AR" , en: "(ARGENTINA)" , es: "(ARGENTINA)" },
    { country: "AM" , en: "(ARMENIA)" , es: "(ARMENIA)" },
    { country: "AW" , en: "(ARUBA)" , es: "(ARUBA)" },
    { country: "AU" , en: "(AUSTRALIA)" , es: "(AUSTRALIA)" },
    { country: "AT" , en: "(AUSTRIA)" , es: "(AUSTRIA)" },
    { country: "AZ" , en: "(AZERBAIJAN)" , es: "(AZERBAIYÁN)" },
    { country: "BS" , en: "(BAHAMAS)" , es: "(BAHAMAS)" },
    { country: "BH" , en: "(BAHRAIN)" , es: "(BAREIN)" },
    { country: "BD" , en: "(BANGLADESH)" , es: "(BANGLADES)" },
    { country: "BB" , en: "(BARBADOS)" , es: "(BARBADOS)" },
    { country: "BY" , en: "(BELARUS)" , es: "(BIELORRUSIA)" },
    { country: "BE" , en: "(BELGIUM)" , es: "(BELGICA)" },
    { country: "BZ" , en: "(BELIZE)" , es: "(BELICE)" },
    { country: "BJ" , en: "(BENIN)" , es: "(BENIN)" },
    { country: "BM" , en: "(BERMUDA)" , es: "(BERMUDA)" },
    { country: "BT" , en: "(BHUTAN)" , es: "(BUTAN)" },
    { country: "BO" , en: "(BOLIVIA)" , es: "(BOLIVIA)" },
    { country: "BQ" , en: "(SINT EUSTATIUS AND SABA BONAIRE)" , es: "(CARIBE NEERLANDÉS)" },
    { country: "BA" , en: "(BOSNIA AND HERZEGOVINA)" , es: "(BOSNIA AND HERZEGOVINA)" },
    { country: "BW" , en: "(BOTSWANA)" , es: "(BOTSUANA)" },
    { country: "BV" , en: "(BOUVET ISLAND)" , es: "(ISLA BOUVET)" },
    { country: "BR" , en: "(BRAZIL)" , es: "(BRASIL)" },
    { country: "IO" , en: "(BRITISH INDIAN OCEAN TERRITORY)" , es: "(TERRITORIO BRITÁNICO DEL OCÉANO ÍNDICO)" },
    { country: "BN" , en: "(BRUNEI DARUSSALAM)" , es: "(BRUNEI)" },
    { country: "BG" , en: "(BULGARIA)" , es: "(BULGARIA)" },
    { country: "BF" , en: "(BURKINA FASO)" , es: "(BURKINA FASO)" },
    { country: "BI" , en: "(BURUNDI)" , es: "(BURUNDI)" },
    { country: "KH" , en: "(CAMBODIA)" , es: "(CAMBODIA)" },
    { country: "CM" , en: "(CAMEROON)" , es: "(CAMERUN)" },
    { country: "CA" , en: "(CANADA)" , es: "(CANADA)" },
    { country: "CV" , en: "(CAPE VERDE)" , es: "(CABO VERDE)" },
    { country: "KY" , en: "(CAYMAN ISLANDS)" , es: "(ISLAS CAIMAN)" },
    { country: "CF" , en: "(CENTRAL AFRICAN REPUBLIC)" , es: "(REPÚBLICA CENTROAFRICANA)" },
    { country: "TD" , en: "(CHAD)" , es: "(CHAD)" },
    { country: "CL" , en: "(CHILE)" , es: "(CHILE)" },
    { country: "CN" , en: "(CHINA)" , es: "(CHINA)" },
    { country: "CX" , en: "(CHRISTMAS ISLAND)" , es: "(ISLA DE NAVIDAD)" },
    { country: "CC" , en: "(COCOS (KEELING) ISLANDS)" , es: "(ISLAS COCOS)" },
    { country: "CO" , en: "(COLOMBIA)" , es: "(COLOMBIA)" },
    { country: "KM" , en: "(COMOROS)" , es: "(COMOROS)" },
    { country: "CD" , en: "(THE DEMOCRATIC REPUBLIC OF THE CONGO)" , es: "(REPÚBLICA DEMOCRÁTICA DEL CONGO)" },
    { country: "CG" , en: "(CONGO)" , es: "(CONGO)" },
    { country: "CK" , en: "(COOK ISLANDS)" , es: "(COOK ISLANDS)" },
    { country: "CR" , en: "(COSTA RICA)" , es: "(COSTA RICA)" },
    { country: "CI" , en: "(CÔTE D'IVOIRE)" , es: "(COSTA DE MARFIL)" },
    { country: "HR" , en: "(CROATIA)" , es: "(CROACIA)" },
    { country: "CU" , en: "(CUBA)" , es: "(CUBA)" },
    { country: "CW" , en: "(CURAÇAO)" , es: "(CURAZAO)" },
    { country: "CY" , en: "(CYPRUS)" , es: "(CHIPRE)" },
    { country: "CZ" , en: "(CZECH REPUBLIC)" , es: "(RECUPLICA CHECA)" },
    { country: "DK" , en: "(DENMARK)" , es: "(DINAMARCA)" },
    { country: "DJ" , en: "(DJIBOUTI)" , es: "(YIBUTI)" },
    { country: "DM" , en: "(DOMINICA)" , es: "(DOMINICA)" },
    { country: "DO" , en: "(DOMINICAN REPUBLIC)" , es: "(RECUPLICA DOMINICANA)" },
    { country: "EC" , en: "(ECUADOR)" , es: "(ECUADOR)" },
    { country: "EG" , en: "(EGYPT)" , es: "(EGIPTO)" },
    { country: "SV" , en: "(EL SALVADOR)" , es: "(EL SALVADOR)" },
    { country: "GQ" , en: "(EQUATORIAL GUINEA)" , es: "(GUINEA ECUATORIAL)" },
    { country: "ER" , en: "(ERITREA)" , es: "(ERITREA)" },
    { country: "EE" , en: "(ESTONIA)" , es: "(ESTONIA)" },
    { country: "ET" , en: "(ETHIOPIA)" , es: "(ETIOPIA)" },
    { country: "FK" , en: "(FALKLAND ISLANDS)" , es: "(ISLAS MALVINAS)" },
    { country: "FO" , en: "(FAROE ISLANDS)" , es: "(ISLAS FEROE)" },
    { country: "FJ" , en: "(FIJI)" , es: "(FIJI)" },
    { country: "FI" , en: "(FINLAND)" , es: "(FINLANDIA)" },
    { country: "FR" , en: "(FRANCE)" , es: "(FRANCIA)" },
    { country: "GF" , en: "(FRENCH GUIANA)" , es: "(GUAYANA FRANCESA)" },
    { country: "PF" , en: "(FRENCH POLYNESIA)" , es: "(POLINESIA FRANCESA)" },
    { country: "TF" , en: "(FRENCH SOUTHERN TERRITORIES)" , es: "(TIERRAS AUSTRALES Y ANTÁRTICAS FRANCESAS)" },
    { country: "GA" , en: "(GABON)" , es: "(GABON)" },
    { country: "GM" , en: "(GAMBIA)" , es: "(GAMBIA)" },
    { country: "GE" , en: "(GEORGIA)" , es: "(GEORGIA)" },
    { country: "DE" , en: "(GERMANY)" , es: "(ALEMANIA)" },
    { country: "GH" , en: "(GHANA)" , es: "(GHANA)" },
    { country: "GI" , en: "(GIBRALTAR)" , es: "(GIBRALTAR)" },
    { country: "GR" , en: "(GREECE)" , es: "(GRECIA)" },
    { country: "GL" , en: "(GREENLAND)" , es: "(GROENLANDIA)" },
    { country: "GD" , en: "(GRENADA)" , es: "(GRANADA)" },
    { country: "GP" , en: "(GUADELOUPE)" , es: "(GUADELUPE)" },
    { country: "GU" , en: "(GUAM)" , es: "(GUAM)" },
    { country: "GT" , en: "(GUATEMALA)" , es: "(GUATEMALA)" },
    { country: "GG" , en: "(GUERNSEY)" , es: "(GUERNSEY)" },
    { country: "GW" , en: "(GUINEA-BISSAU)" , es: "(GUINEA-BISAU)" },
    { country: "GN" , en: "(GUINEA)" , es: "(GUINEA)" },
    { country: "GY" , en: "(GUYANA)" , es: "(GUYANA)" },
    { country: "HT" , en: "(HAITI)" , es: "(HAITI)" },
    { country: "HM" , en: "(HEARD ISLAND AND MCDONALD ISLANDS)" , es: "(ISLAS HEARD Y MCDONALD)" },
    { country: "VA" , en: "(HOLY SEE (VATICAN CITY STATE))" , es: "(CIUDAD DEL VATICANO)" },
    { country: "HN" , en: "(HONDURAS)" , es: "(HONDURAS)" },
    { country: "HK" , en: "(HONG KONG)" , es: "(HONG KONG)" },
    { country: "HU" , en: "(HUNGARY)" , es: "(HUNGRIA)" },
    { country: "IS" , en: "(ICELAND)" , es: "(ISLANDIA)" },
    { country: "IN" , en: "(INDIA)" , es: "(INDIA)" },
    { country: "ID" , en: "(INDONESIA)" , es: "(INDONESIA)" },
    { country: "IR" , en: "(ISLAMIC REPUBLIC OF IRAN)" , es: "(IRAN)" },
    { country: "IQ" , en: "(IRAQ)" , es: "(IRAQ)" },
    { country: "IE" , en: "(IRELAND)" , es: "(IRLANDA)" },
    { country: "IM" , en: "(ISLE OF MAN)" , es: "(ISLA DE MAN)" },
    { country: "IL" , en: "(ISRAEL)" , es: "(ISRAEL)" },
    { country: "IT" , en: "(ITALY)" , es: "(ITALIA)" },
    { country: "JM" , en: "(JAMAICA)" , es: "(JAMAICA)" },
    { country: "JP" , en: "(JAPAN)" , es: "(JAPON)" },
    { country: "JE" , en: "(JERSEY)" , es: "(JERSEY)" },
    { country: "JO" , en: "(JORDAN)" , es: "(JORDAN)" },
    { country: "KZ" , en: "(KAZAKHSTAN)" , es: "(KAZAJISTÁN)" },
    { country: "KE" , en: "(KENYA)" , es: "(KENIA)" },
    { country: "KI" , en: "(KIRIBATI)" , es: "(KIRIBATI)" },
    { country: "KP" , en: "(DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA)" , es: "(REPÚBLICA POPULAR DEMOCRÁTICA DE COREA)" },
    { country: "KR" , en: "(REPUBLIC OF KOREA)" , es: "(REPÚBLICA DE COREA (COREA DEL SUR))" },
    { country: "KW" , en: "(KUWAIT)" , es: "(KUWAIT)" },
    { country: "KG" , en: "(KYRGYZSTAN)" , es: "(KIRGUISTÁN)" },
    { country: "LA" , en: "(LAO PEOPLE'S DEMOCRATIC REPUBLIC)" , es: "(LAOS)" },
    { country: "LV" , en: "(LATVIA)" , es: "(LETONIA)" },
    { country: "LB" , en: "(LEBANON)" , es: "(LIBANO)" },
    { country: "LS" , en: "(LESOTHO)" , es: "(LESOTHO)" },
    { country: "LR" , en: "(LIBERIA)" , es: "(LIBERIA)" },
    { country: "LY" , en: "(LIBYAN ARAB JAMAHIRIYA)" , es: "(LIBIA)" },
    { country: "LI" , en: "(LIECHTENSTEIN)" , es: "(LIECHTENSTEIN)" },
    { country: "LT" , en: "(LITHUANIA)" , es: "(LITUANIA)" },
    { country: "LU" , en: "(LUXEMBOURG)" , es: "(LUXEMBURGO)" },
    { country: "MO" , en: "(MACAO)" , es: "(MACAO)" },
    { country: "MK" , en: "(MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF)" , es: "(MACEDONIA DEL NORTE)" },
    { country: "MG" , en: "(MADAGASCAR)" , es: "(MADAGASCAR)" },
    { country: "MW" , en: "(MALAWI)" , es: "(MALAWI)" },
    { country: "MY" , en: "(MALAYSIA)" , es: "(MALASIA)" },
    { country: "MV" , en: "(MALDIVES)" , es: "(MALDIVAS)" },
    { country: "ML" , en: "(MALI)" , es: "(MALI)" },
    { country: "MT" , en: "(MALTA)" , es: "(MALTA)" },
    { country: "MH" , en: "(MARSHALL ISLANDS)" , es: "(ISLAS MARSHALL)" },
    { country: "MQ" , en: "(MARTINIQUE)" , es: "(MARTINICA)" },
    { country: "MR" , en: "(MAURITANIA)" , es: "(MAURITANIA)" },
    { country: "MU" , en: "(MAURITIUS)" , es: "(MAURICIO)" },
    { country: "YT" , en: "(MAYOTTE)" , es: "(MAYOTTE)" },
    { country: "MX" , en: "(MEXICO)" , es: "(MEXICO)" },
    { country: "FM" , en: "(MICRONESIA, FEDERATED STATES OF)" , es: "(ESTADOS FEDERADOS DE MICRONESIA)" },
    { country: "MD" , en: "(MOLDOVA, REPUBLIC OF)" , es: "(MOLDOVA)" },
    { country: "MC" , en: "(MONACO)" , es: "(MONACO)" },
    { country: "MN" , en: "(MONGOLIA)" , es: "(MONGOLIA)" },
    { country: "ME" , en: "(MONTENEGRO)" , es: "(MONTENEGRO)" },
    { country: "MS" , en: "(MONTSERRAT)" , es: "(MONTSERRAT)" },
    { country: "MA" , en: "(MOROCCO)" , es: "(MARRUECOS)" },
    { country: "MZ" , en: "(MOZAMBIQUE)" , es: "(MOZAMBIQUE)" },
    { country: "MM" , en: "(MYANMAR)" , es: "(MYANMAR)" },
    { country: "NA" , en: "(NAMIBIA)" , es: "(NAMIBIA)" },
    { country: "NR" , en: "(NAURU)" , es: "(NAURU)" },
    { country: "NP" , en: "(NEPAL)" , es: "(NEPAL)" },
    { country: "NL" , en: "(NETHERLANDS)" , es: "(PAISES BAJOS)" },
    { country: "NC" , en: "(NEW CALEDONIA)" , es: "(NUEVA CALEDONIA)" },
    { country: "NZ" , en: "(NEW ZEALAND)" , es: "(NUEVA ZELANDA)" },
    { country: "NI" , en: "(NICARAGUA)" , es: "(NICARAGUA)" },
    { country: "NG" , en: "(NIGERIA)" , es: "(NIGERIA)" },
    { country: "NE" , en: "(NIGER)" , es: "(NIGER)" },
    { country: "NU" , en: "(NIUE)" , es: "(NIUE)" },
    { country: "NF" , en: "(NORFOLK ISLAND)" , es: "(ISLA NORFOLK)" },
    { country: "MP" , en: "(NORTHERN MARIANA ISLANDS)" , es: "(ISLAS MARIANAS DEL NORTE)" },
    { country: "NO" , en: "(NORWAY)" , es: "(NORUEGA)" },
    { country: "OM" , en: "(OMAN)" , es: "(OMAN)" },
    { country: "PK" , en: "(PAKISTAN)" , es: "(PAKISTAN)" },
    { country: "PW" , en: "(PALAU)" , es: "(PALAOS)" },
    { country: "PS" , en: "(OCCUPIED PALESTINIAN TERRITORY)" , es: "(TERRITORIOS PALESTINOS)" },
    { country: "PA" , en: "(PANAMA)" , es: "(PANAMA)" },
    { country: "PG" , en: "(PAPUA NEW GUINEA)" , es: "(PAPUA NUEVA GUINEA)" },
    { country: "PY" , en: "(PARAGUAY)" , es: "(PARAGUAY)" },
    { country: "PE" , en: "(PERU)" , es: "(PERU)" },
    { country: "PH" , en: "(PHILIPPINES)" , es: "(FILIPINAS)" },
    { country: "PN" , en: "(PITCAIRN)" , es: "(ISLAS PITCAIRN)" },
    { country: "PL" , en: "(POLAND)" , es: "(POLONIA)" },
    { country: "PT" , en: "(PORTUGAL)" , es: "(PORTUGAL)" },
    { country: "PR" , en: "(PUERTO RICO)" , es: "(PUERTO RICO)" },
    { country: "QA" , en: "(QATAR)" , es: "(QATAR)" },
    { country: "RE" , en: "(RÉUNION)" , es: "(REUNION)" },
    { country: "RO" , en: "(ROMANIA)" , es: "(RUMANIA)" },
    { country: "RU" , en: "(RUSSIAN FEDERATION)" , es: "(RUSIA)" },
    { country: "RW" , en: "(RWANDA)" , es: "(RWANDA)" },
    { country: "BL" , en: "(SAINT BARTHÉLEMY)" , es: "(SAN BARTOLOME)" },
    { country: "SH" , en: "(SAINT HELENA)" , es: "(ISLA SANTA ELENA)" },
    { country: "KN" , en: "(SAINT KITTS AND NEVIS)" , es: "(SAN CRISTOBAL Y NIEVES)" },
    { country: "LC" , en: "(SAINT LUCIA)" , es: "(SANTA LUCIA)" },
    { country: "MF" , en: "(SAINT MARTIN (FRENCH PART))" , es: "(SAN MARTIN)" },
    { country: "PM" , en: "(SAINT PIERRE AND MIQUELON)" , es: "(SAN PEDRO Y MIQUELON)" },
    { country: "VC" , en: "(SAINT VINCENT AND THE GRENADINES)" , es: "(SAN VICENTE Y LAS GRANADINAS)" },
    { country: "WS" , en: "(SAMOA)" , es: "(SAMOA)" },
    { country: "SM" , en: "(SAN MARINO)" , es: "(SAN MARINO)" },
    { country: "ST" , en: "(SAO TOME AND PRINCIPE)" , es: "(SANTO TOMÉ Y PRÍNCIPE)" },
    { country: "SA" , en: "(SAUDI ARABIA)" , es: "(ARABIA SAUDITA)" },
    { country: "SN" , en: "(SENEGAL)" , es: "(SENEGAL)" },
    { country: "RS" , en: "(SERBIA)" , es: "(SERBIA)" },
    { country: "SC" , en: "(SEYCHELLES)" , es: "(SEYCHELLES)" },
    { country: "SL" , en: "(SIERRA LEONE)" , es: "(SIERRA LEONA)" },
    { country: "SG" , en: "(SINGAPORE)" , es: "(SINGAPORE)" },
    { country: "SX" , en: "(SINT MAARTEN (DUTCH PART))" , es: "(SAN MARTIN (PAISES BAJOS))" },
    { country: "SK" , en: "(SLOVAKIA)" , es: "(ESLOVAQUIA)" },
    { country: "SI" , en: "(SLOVENIA)" , es: "(ESLOVENIA)" },
    { country: "SB" , en: "(SOLOMON ISLANDS)" , es: "(ISLAS SOLOMON)" },
    { country: "SO" , en: "(SOMALIA)" , es: "(SOMALIA)" },
    { country: "ZA" , en: "(SOUTH AFRICA)" , es: "(SUDAFRICA)" },
    { country: "GS" , en: "(SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS)" , es: "(ISLAS GEORGIAS DEL SUR Y SANDWICH DEL SUR)" },
    { country: "SS" , en: "(SOUTH SUDAN)" , es: "(SUDAN DEL SUR)" },
    { country: "ES" , en: "(SPAIN)" , es: "(ESPAÑA)" },
    { country: "LK" , en: "(SRI LANKA)" , es: "(SRI LANKA)" },
    { country: "SD" , en: "(SUDAN)" , es: "(SUDAN)" },
    { country: "SR" , en: "(SURINAME)" , es: "(SURINAM)" },
    { country: "SJ" , en: "(SVALBARD AND JAN MAYEN)" , es: "(SVALBARD Y JAN MAYEN)" },
    { country: "SZ" , en: "(SWAZILAND)" , es: "(SUAZILANDIA)" },
    { country: "SE" , en: "(SWEDEN)" , es: "(SUECIA)" },
    { country: "CH" , en: "(SWITZERLAND)" , es: "(SUIZA)" },
    { country: "SY" , en: "(SYRIAN ARAB REPUBLIC)" , es: "(SIRIA)" },
    { country: "TW" , en: "(PROVINCE OF CHINA TAIWAN)" , es: "(TAIWAN)" },
    { country: "TJ" , en: "(TAJIKISTAN)" , es: "(TAYIKISTÁN)" },
    { country: "TZ" , en: "(UNITED REPUBLIC OF TANZANIA)" , es: "(TANZANIA)" },
    { country: "TH" , en: "(THAILAND)" , es: "(TAILANDIA)" },
    { country: "TL" , en: "(TIMOR-LESTE)" , es: "(TIMOR ORIENTAL)" },
    { country: "TG" , en: "(TOGO)" , es: "(TOGO)" },
    { country: "TK" , en: "(TOKELAU)" , es: "(TOKELAU)" },
    { country: "TO" , en: "(TONGA)" , es: "(TONGA)" },
    { country: "TT" , en: "(TRINIDAD AND TOBAGO)" , es: "(TRINIDAD AND TOBAGO)" },
    { country: "TN" , en: "(TUNISIA)" , es: "(TUNEZ)" },
    { country: "TR" , en: "(TURKEY)" , es: "(TURQUIA)" },
    { country: "TM" , en: "(TURKMENISTAN)" , es: "(TURKMENISTAN)" },
    { country: "TC" , en: "(TURKS AND CAICOS ISLANDS)" , es: "(ISLAS TURCAS Y CAICOS)" },
    { country: "TV" , en: "(TUVALU)" , es: "(TUVALU)" },
    { country: "UG" , en: "(UGANDA)" , es: "(UGANDA)" },
    { country: "UA" , en: "(UKRAINE)" , es: "(UCRANIA)" },
    { country: "AE" , en: "(UNITED ARAB EMIRATES)" , es: "(EMIRATOS ÁRABES UNIDOS)" },
    { country: "GB" , en: "(UNITED KINGDOM)" , es: "(REINO UNIDO)" },
    { country: "UM" , en: "(UNITED STATES MINOR OUTLYING ISLANDS)" , es: "(ISLAS ULTRAMARINAS MENORES DE LOS ESTADOS UNIDOS)" },
    { country: "US" , en: "(UNITED STATES)" , es: "(ESTADOS UNIDOS)" },
    { country: "UY" , en: "(URUGUAY)" , es: "(URUGUAY)" },
    { country: "UZ" , en: "(UZBEKISTAN)" , es: "(UZBEKISTAN)" },
    { country: "VU" , en: "(VANUATU)" , es: "(VANUATU)" },
    { country: "VE" , en: "(VENEZUELA)" , es: "(VENEZUELA)" },
    { country: "VN" , en: "(VIETNAM)" , es: "(VIETNAM)" },
    { country: "VG" , en: "(VIRGIN ISLANDS, BRITISH)" , es: "(ISLAS VÍRGENES BRITÁNICAS)" },
    { country: "VI" , en: "(VIRGIN ISLANDS, USA)" , es: "(ISLAS VÍRGENES DE ESTADOS UNIDOS)" },
    { country: "WF" , en: "(WALLIS AND FUTUNA)" , es: "(WALLIS AND FUTUNA)" },
    { country: "EH" , en: "(WESTERN SAHARA)" , es: "(SAHARA OCCIDENTAL)" },
    { country: "YE" , en: "(YEMEN)" , es: "(YEMEN)" },
    { country: "ZM" , en: "(ZAMBIA)" , es: "(ZAMBIA)" },
    { country: "ZW" , en: "(ZIMBABWE)" , es: "(ZIMBABUE)" },
    ]
    



    if (lang === 1) {
        return (
            <div className="card">
                <div id="closeIcon" className="row">
                    <button onClick={onClose} className="btn btn-sm btn-danger">
                        X
                    </button>
                </div>
                <div className="card-body">
                    <Link to={`/weather-app/city/${id}`}>
                        <h3 className="card-title">{name}</h3>
                    </Link>
                    <p className="card-country">{country}</p>
                    <div className="row">
                        <div
                            id="minAlign"
                            className="col-sm-4 col-md-4 col-lg-4"
                        >
                            <h5>Min</h5>
                            <h5>{Math.round(min * 10) / 10} °C</h5>
                        </div>
                        <div
                            id="minAlign"
                            className="col-sm-4 col-md-4 col-lg-4"
                        >
                            <h5>Max</h5>
                            <h5>{Math.round(max * 10) / 10} °C</h5>
                        </div>
                        <div id="iconAlign" className="col-sm-4 col-md-4 col-lg-4">
                            <img
                                className="iconoClima"
                                src={
                                    "https://openweathermap.org/img/wn/" +
                                    img +
                                    "@2x.png"
                                }
                                width="80"
                                height="80"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="card">
                <div id="closeIcon" className="row">
                    <button onClick={onClose} className="btn btn-sm btn-danger">
                        X
                    </button>
                </div>
                <div className="card-body">
                    <Link to={`/weather-app/city/${id}`}>
                        <h3 className="card-title">{name}</h3>
                    </Link>
                    <p className="card-country">{country}</p>
                    <div className="row">
                        <div
                            id="minAlign"
                            className="col-sm-4 col-md-4 col-lg-4"
                        >
                            <h5>Min</h5>
                            <h5>
                                {Math.round((min * (9 / 5) + 32) * 10) / 10} °F
                            </h5>
                        </div>
                        <div
                            id="minAlign"
                            className="col-sm-4 col-md-4 col-lg-4"
                        >
                            <h5>Max</h5>
                            <h5>
                                {Math.round((max * (9 / 5) + 32) * 10) / 10} °F
                            </h5>
                        </div>
                        <div id="iconAlign" className="col-sm-4 col-md-4 col-lg-4">
                            <img
                                className="iconoClima"
                                src={
                                    "https://openweathermap.org/img/wn/" +
                                    img +
                                    "@2x.png"
                                }
                                width="80"
                                height="80"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
