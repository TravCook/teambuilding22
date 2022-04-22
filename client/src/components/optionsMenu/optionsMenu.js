import React from 'react'
import {Form, Row, Col, Dropdown, Button, DropdownButton} from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import "./optionsMenu.css"

const OptionsMenu = (props) => {
  return (
    <Form className="optionsMenu">
      <Row>
        <Col>
        <Dropdown show={props.DDshow}>
            <Dropdown.Toggle 
            variant="primary"
            title="Team"
            onClick={() =>  props.setDDShow(!props.DDshow)}
            >Team</Dropdown.Toggle>
            <Dropdown.Menu>
              <Row>
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Angels")
                  ?  <Col className="teamDDdiv angelsBackground"><div className="teamDDdiv angelsBackground" id="Angels" onClick={props.filterChange}>ANA</div></Col>
                  :  <Col className="teamDDdiv"><div id="Angels" className="teamDDdiv" onClick={props.filterChange}>ANA</div></Col>
                :  <Col className="teamDDdiv"><div id="Angels" className="teamDDdiv" onClick={props.filterChange}>ANA</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Diamondbacks")
                  ?  <Col className="teamDDdiv dbacksBackground"><div className="teamDDdiv dbacksBackground" id="Diamondbacks" onClick={props.filterChange}>ARI</div></Col>
                  :  <Col className="teamDDdiv "><div id="Diamondbacks" className="teamDDdiv" onClick={props.filterChange}>ARI</div></Col>
                :  <Col className="teamDDdiv "><div id="Diamondbacks" className="teamDDdiv" onClick={props.filterChange}>ARI</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Braves")
                  ?  <Col className="teamDDdiv bravesBackground"><div className="teamDDdiv bravesBackground" id="Braves" onClick={props.filterChange}>ATL</div></Col>
                  :  <Col className="teamDDdiv "><div id="Braves" className="teamDDdiv" onClick={props.filterChange}>ATL</div></Col>
                :  <Col className="teamDDdiv "><div id="Braves" className="teamDDdiv" onClick={props.filterChange}>ATL</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Orioles")
                  ?  <Col className="teamDDdiv oriolesBackground"><div className="teamDDdiv oriolesBackground" id="Orioles" onClick={props.filterChange}>BAL</div></Col>
                  :  <Col className="teamDDdiv "><div id="Orioles" className="teamDDdiv" onClick={props.filterChange}>BAL</div></Col>
                :  <Col className="teamDDdiv "><div id="Orioles" className="teamDDdiv" onClick={props.filterChange}>BAL</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Red Sox")
                  ?  <Col className="teamDDdiv redsoxBackground"><div className="teamDDdiv redsoxBackground" id="Red Sox" onClick={props.filterChange}>BOS</div></Col>
                  :  <Col className="teamDDdiv "><div id="Red Sox" className="teamDDdiv" onClick={props.filterChange}>BOS</div></Col>
                :  <Col className="teamDDdiv "><div id="Red Sox" className="teamDDdiv" onClick={props.filterChange}>BOS</div></Col>
                }
              </Row>
              <Row>
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Cubs")
                  ?  <Col className="teamDDdiv cubsBackground" id="Cubs"><div className="teamDDdiv cubsBackground" id="Cubs" onClick={props.filterChange}>CHC</div></Col>
                  :  <Col className="teamDDdiv " id="Cubs"><div id="Cubs" className="teamDDdiv" onClick={props.filterChange}>CHC</div></Col>
                :  <Col className="teamDDdiv " id="Cubs"><div id="Cubs" className="teamDDdiv" onClick={props.filterChange}>CHC</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("White Sox")
                  ?  <Col className="teamDDdiv whitesoxBackground"><div className="teamDDdiv whitesoxBackground" id="White Sox" onClick={props.filterChange}>CWS</div></Col>
                  :  <Col className="teamDDdiv "><div id="White Sox" className="teamDDdiv" onClick={props.filterChange}>CWS</div></Col>
                :  <Col className="teamDDdiv "><div id="White Sox" className="teamDDdiv" onClick={props.filterChange}>CWS</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Reds")
                  ?  <Col className="teamDDdiv redsBackground"><div className="teamDDdiv redsBackground" id="Reds" onClick={props.filterChange}>CIN</div></Col>
                  :  <Col className="teamDDdiv"><div id="Reds" className="teamDDdiv" onClick={props.filterChange}>CIN</div></Col>
                :  <Col className="teamDDdiv"><div id="Reds" className="teamDDdiv" onClick={props.filterChange}>CIN</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Guardians")
                  ?  <Col className="teamDDdiv guardiansBackground"><div className="teamDDdiv guardiansBackground" id="Guardians" onClick={props.filterChange}>CLE</div></Col>
                  :  <Col className="teamDDdiv "><div id="Guardians" className="teamDDdiv" onClick={props.filterChange}>CLE</div></Col>
                :  <Col className="teamDDdiv "><div id="Guardians" className="teamDDdiv" onClick={props.filterChange}>CLE</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Rockies")
                  ?  <Col className="teamDDdiv rockiesBackground"><div className="teamDDdiv rockiesBackground" id="Rockies" onClick={props.filterChange}>COL</div></Col>
                  :  <Col className="teamDDdiv "><div id="Rockies" className="teamDDdiv" onClick={props.filterChange}>COL</div></Col>
                :  <Col className="teamDDdiv "><div id="Rockies" className="teamDDdiv" onClick={props.filterChange}>COL</div></Col>
                }
              </Row>
              <Row>
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Tigers")
                  ?  <Col className="teamDDdiv tigersBackground"><div className="teamDDdiv tigersBackground" id="Tigers" onClick={props.filterChange}>DET</div></Col>
                  :  <Col className="teamDDdiv "><div id="Tigers" className="teamDDdiv" onClick={props.filterChange}>DET</div></Col>
                :  <Col className="teamDDdiv "><div id="Tigers" className="teamDDdiv" onClick={props.filterChange}>DET</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Astros")
                  ?  <Col className="teamDDdiv astrosBackground"><div className="teamDDdiv astrosBackground" id="Astros" onClick={props.filterChange}>HOU</div></Col>
                  :  <Col className="teamDDdiv "><div id="Astros" className="teamDDdiv" onClick={props.filterChange}>HOU</div></Col>
                :  <Col className="teamDDdiv "><div id="Astros" className="teamDDdiv" onClick={props.filterChange}>HOU</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Royals")
                  ?  <Col className="teamDDdiv royalsBackground"><div className="teamDDdiv royalsBackground" id="Royals" onClick={props.filterChange}>KC</div></Col>
                  :  <Col className="teamDDdiv "><div id="Royals" className="teamDDdiv" onClick={props.filterChange}>KC</div></Col>
                :  <Col className="teamDDdiv "><div id="Royals" className="teamDDdiv" onClick={props.filterChange}>KC</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Dodgers")
                  ?  <Col className="teamDDdiv dodgersBackground"><div className="teamDDdiv dodgersBackground" id="Dodgers" onClick={props.filterChange}>LAD</div></Col>
                  :  <Col className="teamDDdiv "><div id="Dodgers" className="teamDDdiv" onClick={props.filterChange}>LAD</div></Col>
                :  <Col className="teamDDdiv "><div id="Dodgers" className="teamDDdiv" onClick={props.filterChange}>LAD</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Marlins")
                  ?  <Col className="teamDDdiv marlinsBackground"><div className="teamDDdiv marlinsBackground" id="Marlins" onClick={props.filterChange}>MIA</div></Col>
                  :  <Col className="teamDDdiv "><div id="Marlins" className="teamDDdiv" onClick={props.filterChange}>MIA</div></Col>
                :  <Col className="teamDDdiv "><div id="Marlins" className="teamDDdiv" onClick={props.filterChange}>MIA</div></Col>
                }
              </Row>
              <Row>
                
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Brewers")
                  ?  <Col className="teamDDdiv brewersBackground"><div className="teamDDdiv brewersBackground" id="Brewers" onClick={props.filterChange}>MIL</div></Col>
                  :  <Col className="teamDDdiv "><div id="Brewers" className="teamDDdiv" onClick={props.filterChange}>MIL</div></Col>
                :  <Col className="teamDDdiv "><div id="Brewers" className="teamDDdiv" onClick={props.filterChange}>MIL</div></Col>
                }
                
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Twins")
                  ?  <Col className="teamDDdiv twinsBackground"><div className="teamDDdiv twinsBackground" id="Twins" onClick={props.filterChange}>MIN</div></Col>
                  :  <Col className="teamDDdiv "><div id="Twins" className="teamDDdiv" onClick={props.filterChange}>MIN</div></Col>
                :  <Col className="teamDDdiv "><div id="Twins" className="teamDDdiv" onClick={props.filterChange}>MIN</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Mets")
                  ?  <Col className="teamDDdiv metsBackground"><div className="teamDDdiv metsBackground" id="Mets" onClick={props.filterChange}>NYM</div></Col>
                  :  <Col className="teamDDdiv "><div id="Mets" className="teamDDdiv" onClick={props.filterChange}>NYM</div></Col>
                :  <Col className="teamDDdiv "><div id="Mets" className="teamDDdiv" onClick={props.filterChange}>NYM</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Yankees")
                  ?  <Col className="teamDDdiv yankeesBackground"><div className="teamDDdiv yankeesBackground" id="Yankees" onClick={props.filterChange}>NYY</div></Col>
                  :  <Col className="teamDDdiv "><div id="Yankees" className="teamDDdiv" onClick={props.filterChange}>NYY</div></Col>
                :  <Col className="teamDDdiv "><div id="Yankees" className="teamDDdiv" onClick={props.filterChange}>NYY</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Athletics")
                  ?  <Col className="teamDDdiv athleticsBackground"><div className="teamDDdiv athleticsBackground" id="Athletics" onClick={props.filterChange}>OAK</div></Col>
                  :  <Col className="teamDDdiv "><div id="Athletics" className="teamDDdiv" onClick={props.filterChange}>OAK</div></Col>
                : <Col className="teamDDdiv "> <div id="Athletics" className="teamDDdiv" onClick={props.filterChange}>OAK</div></Col>
                }
              </Row>
              <Row>
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Phillies")
                  ?  <Col className="teamDDdiv philliesBackground"><div className="teamDDdiv philliesBackground" id="Phillies" onClick={props.filterChange}>PHI</div></Col>
                  :  <Col className="teamDDdiv "><div id="Phillies" className="teamDDdiv" onClick={props.filterChange}>PHI</div></Col>
                :  <Col className="teamDDdiv "><div id="Phillies" className="teamDDdiv" onClick={props.filterChange}>PHI</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Pirates")
                  ?  <Col className="teamDDdiv piratesBackground"><div className="teamDDdiv piratesBackground" id="Pirates" onClick={props.filterChange}>PIT</div></Col>
                  :  <Col className="teamDDdiv "><div id="Pirates" className="teamDDdiv" onClick={props.filterChange}>PIT</div></Col>
                :  <Col className="teamDDdiv "><div id="Pirates" className="teamDDdiv" onClick={props.filterChange}>PIT</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Padres")
                  ?  <Col className="teamDDdiv padresBackground"><div className="teamDDdiv padresBackground" id="Padres" onClick={props.filterChange}>SD</div></Col>
                  :  <Col className="teamDDdiv "><div id="Padres" className="teamDDdiv" onClick={props.filterChange}>SD</div></Col>
                :  <Col className="teamDDdiv "><div id="Padres" className="teamDDdiv" onClick={props.filterChange}>SD</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Giants")
                  ?  <Col className="teamDDdiv giantsBackground"><div className="teamDDdiv giantsBackground" id="Giants" onClick={props.filterChange}>SF</div></Col>
                  :  <Col className="teamDDdiv "><div id="Giants" className="teamDDdiv" onClick={props.filterChange}>SF</div></Col>
                :  <Col className="teamDDdiv "><div id="Giants" className="teamDDdiv" onClick={props.filterChange}>SF</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Mariners")
                  ?  <Col className="teamDDdiv marinersBackground"><div className="teamDDdiv marinersBackground" id="Mariners" onClick={props.filterChange}>SEA</div></Col>
                  :  <Col className="teamDDdiv "><div id="Mariners" className="teamDDdiv" onClick={props.filterChange}>SEA</div></Col>
                :  <Col className="teamDDdiv "><div id="Mariners" className="teamDDdiv" onClick={props.filterChange}>SEA</div></Col>
                }
              </Row>
              <Row>
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Cardinals")
                  ?  <Col className="teamDDdiv cardinalsBackground"><div className="teamDDdiv cardinalsBackground" id="Cardinals" onClick={props.filterChange}>STL</div></Col>
                  :  <Col className="teamDDdiv "><div id="Cardinals" className="teamDDdiv" onClick={props.filterChange}>STL</div></Col>
                :  <Col className="teamDDdiv "><div id="Cardinals" className="teamDDdiv" onClick={props.filterChange}>STL</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Rays")
                  ?  <Col className="teamDDdiv raysBackground"><div className="teamDDdiv raysBackground" id="Rays" onClick={props.filterChange}>TB</div></Col>
                  :  <Col className="teamDDdiv "><div id="Rays" className="teamDDdiv" onClick={props.filterChange}>TB</div></Col>
                :  <Col className="teamDDdiv "><div id="Rays" className="teamDDdiv" onClick={props.filterChange}>TB</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Rangers")
                  ?  <Col className="teamDDdiv rangersBackground"><div className="teamDDdiv rangersBackground" id="Rangers" onClick={props.filterChange}>TEX</div></Col>
                  :  <Col className="teamDDdiv "><div id="Rangers" className="teamDDdiv" onClick={props.filterChange}>TEX</div></Col>
                :  <Col className="teamDDdiv "><div id="Rangers" className="teamDDdiv" onClick={props.filterChange}>TEX</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Blue Jays")
                  ?  <Col className="teamDDdiv bluejaysBackground"><div className="teamDDdiv bluejaysBackground" id="Blue Jays" onClick={props.filterChange}>TOR</div></Col>
                  :  <Col className="teamDDdiv "><div id="Blue Jays" className="teamDDdiv" onClick={props.filterChange}>TOR</div></Col>
                :  <Col className="teamDDdiv "><div id="Blue Jays" className="teamDDdiv" onClick={props.filterChange}>TOR</div></Col>
                }
                {props.searchFilter.searchTeams
                ? props.searchFilter.searchTeams.includes("Nationals")
                  ?  <Col className="teamDDdiv nationalsBackground"><div className="teamDDdiv nationalsBackground" id="Nationals" onClick={props.filterChange}>WAS</div></Col>
                  :  <Col className="teamDDdiv "><div id="Nationals" className="teamDDdiv" onClick={props.filterChange}>WAS</div></Col>
                :  <Col className="teamDDdiv "><div id="Nationals" className="teamDDdiv" onClick={props.filterChange}>WAS</div></Col>
                }
              </Row>
              
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
        <Form.Control
          label="Name"
          name="Name"
          type='text'
          placeholder="Player Name"
          id="name"
          defaultChecked={true}
          onChange={props.filterChange} />
        
        </Col>
        <Col>
          <Dropdown>
            <Dropdown.Toggle 
            variant="primary"
            title="Series"
            id="Series"
            onChange={props.filterChange}
            >Series</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={props.filterChange} id="series">Live</Dropdown.Item>
              <Dropdown.Item onClick={props.filterChange} id="series">Live Series</Dropdown.Item> 
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Check inline
          label="Primary Position"
          name="Primary Position"
          type='checkbox'
          id="Primary"
          defaultChecked={true}
          onChange={props.filterChange} />
        </Col>
        <Col>
        <Form.Check inline
          label="Secondary Position"
          name="Secondary Position"
          type='checkbox'
          id="Secondary"
          defaultChecked={true}
          onChange={props.filterChange} />
        </Col>
      </Row>
    </Form>
  )
}

export default OptionsMenu