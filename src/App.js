import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import Select from 'react-select';
import styles from './App.css'


export default function App() {

  const [database, setDatabase] = useState({});
  const [names, setNames] = useState([{}]);
  const [picture1, setPicture1] = useState('');
  const [picture2, setPicture2] = useState('');
  const [picture3, setPicture3] = useState('');
  const [picture4, setPicture4] = useState('');
  const [picture5, setPicture5] = useState('');
  const [picture6, setPicture6] = useState('');
  const [picture7, setPicture7] = useState('');
  const [picture8, setPicture8] = useState('');

  const [value, setValue] = useState('');

  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [player3, setPlayer3] = useState([]);
  const [player4, setPlayer4] = useState([]);
  const [player5, setPlayer5] = useState([]);
  const [player6, setPlayer6] = useState([]);
  const [player7, setPlayer7] = useState([]);
  const [player8, setPlayer8] = useState([]);

  const [guesses, setGuesses] = useState(1);

  const [letsGo, setLetsGo] = useState(false);

  const [data, setData] = useState(false);

  const [guessed, setGuessed] = useState([]);

  //${response.data.league['standard'][i]['firstName']}

  const fetchData = () => {
    axios.get("http://data.nba.net/data/10s/prod/v1/2021/players.json")
      .then((response) => {
        setDatabase(response.data.league["standard"]);
        for(var i=0; i<response.data.league['standard'].length; i++){
          setNames(names => names.concat({label: `${response.data.league['standard'][i]['firstName']} ${response.data.league['standard'][i]['lastName']}`}))
        }
      });
    }

  useEffect(() => {
    if(!data){
      fetchData();
      setData(true);
    }
  }, [data]);

  const displayPlayer = (e) => {
    e.preventDefault();


  }



  return (
  <>
    <div className={'container'}>
      <h1>Wardell | NBA Player Guessing Game</h1>
          <form onSubmit={(e) => e.preventDefault()}>
          <Select onChange={e => setValue(e.label)} options={names}/>
        <button onClick={()=>{
          setLetsGo(true);
          for(var i=0; i<database.length; i++){
            if(database[i]['firstName'] === value.split(' ')[0] && database[i]['lastName'] === value.split(' ')[1]){
              switch(guesses){
                case 1:
                setPicture1(database[i]['personId']);
                setPlayer1(database[i]);
                setGuessed(database[i]['personId']);
                setGuesses(guesses + 1);
                break;

                case 2:
                setPicture2(database[i]['personId']);
                setPlayer2(database[i]);
                setGuessed(guessed + database[i]['personId']);
                setGuesses(guesses + 1);
                break;

                case 3:
                setPicture3(database[i]['personId']);
                setPlayer3(database[i]);
                setGuessed(guessed + database[i]['personId']);
                setGuesses(guesses + 1);
                break;

                case 4:
                setPicture4(database[i]['personId']);
                setPlayer4(database[i]);
                setGuessed(guessed + database[i]['personId']);
                setGuesses(guesses + 1);
                break;

                case 5:
                setPicture5(database[i]['personId']);
                setPlayer5(database[i]);
                setGuessed(guessed + database[i]['personId']);
                setGuesses(guesses + 1);
                break;

                case 6:
                setPicture6(database[i]['personId']);
                setPlayer6(database[i]);
                setGuessed(guessed + database[i]['personId']);
                setGuesses(guesses + 1);
                break;

                case 7:
                setPicture7(database[i]['personId']);
                setPlayer7(database[i]);
                setGuessed(guessed + database[i]['personId']);
                setGuesses(guesses + 1);
                break;

                case 8:
                setPicture8(database[i]['personId']);
                setPlayer8(database[i]);
                setGuessed(guessed + database[i]['personId']);
                setGuesses(guesses + 1);
                break;

                default:
                console.log("LETS GOOOOOOO");
              }
            }
          }
          setValue('');
        }}>Guess</button>
        </form>
    </div>

    <div className={'card_container'}>
    {guesses >= 1 && letsGo ?
      <Card style={{ width:"18rem", padding:"10px" }}>
      <Card.Title>
        {player1["firstName"] + " " + player1['lastName']}
      </Card.Title>
      <Card.Img variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture1}.png`}/>
      <Card.Body>
        <div className={'inner_container'}>
          <div className={'inner_card'}>{player1['collegeName']}</div>
          <div className={'inner_card'}>{player1['heightFeet'] + "'" + player1['heightInches']}</div>
          <div className={'inner_card'}>{"Years Pro: " + player1['yearsPro']}</div>
        </div>
      </Card.Body>
      </Card>

      :

      <Card style={{ fontSize: '100px'}}><Card.Title>1</Card.Title></Card>
    }

    {guesses > 2 ?
    <Card style={{ width:"18rem", padding:"10px" }}>
    <Card.Title>
      {player2["firstName"] + " " + player2['lastName']}
    </Card.Title>
    <Card.Img variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture2}.png`}/>
    <Card.Body>
      <div className={'inner_container'}>
        <div className={'inner_card'}>{player2['collegeName']}</div>
        <div className={'inner_card'}>{player2['heightFeet'] + "'" + player2['heightInches']}</div>
        <div className={'inner_card'}>{"Years Pro: " + player2['yearsPro']}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card style={{ fontSize:"100px"}}><Card.Title>2</Card.Title></Card>
  }

  {guesses > 3 ?
    <Card style={{ width:"18rem", padding:"10px" }}>
    <Card.Img variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture3}.png`}/>
    <Card.Body>
      <Card.Title>
        {player3["firstName"] + " " + player3['lastName']}
      </Card.Title>
      <div className={'inner_container'}>
        <div className={'inner_card'}>{player3['collegeName']}</div>
        <div className={'inner_card'}>{player3['heightFeet'] + "'" + player3['heightInches']}</div>
        <div className={'inner_card'}>{"Years Pro: " + player3['yearsPro']}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card style={{ fontSize:"100px"}}><Card.Title>3</Card.Title></Card>
  }

  {guesses > 4 ?
    <Card style={{ width:"18rem", padding:"10px" }}>
    <Card.Img variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture4}.png`}/>
    <Card.Body>
      <Card.Title>
        {player4["firstName"] + " " + player4['lastName']}
      </Card.Title>
      <div className={'inner_container'}>
        <div className={'inner_card'}>{player4['collegeName']}</div>
        <div className={'inner_card'}>{player4['heightFeet'] + "'" + player4['heightInches']}</div>
        <div className={'inner_card'}>{"Years Pro: " + player4['yearsPro']}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card style={{ fontSize:"100px"}}><Card.Title>4</Card.Title></Card>
  }

  {guesses>5 ?
    <Card style={{ width:"18rem", padding:"10px" }}>
    <Card.Img variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture5}.png`}/>
    <Card.Body>
      <Card.Title>
        {player5["firstName"] + " " + player5['lastName']}
      </Card.Title>
      <div className={'inner_container'}>
        <div className={'inner_card'}>{player5['collegeName']}</div>
        <div className={'inner_card'}>{player5['heightFeet'] + "'" + player5['heightInches']}</div>
        <div className={'inner_card'}>{"Years Pro: " + player5['yearsPro']}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card style={{ fontSize:"100px"}}><Card.Title>5</Card.Title></Card>
  }

  {guesses > 6 ?
    <Card style={{ width:"18rem", padding:"10px" }}>
    <Card.Img variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture6}.png`}/>
    <Card.Body>
      <Card.Title>
        {player6["firstName"] + " " + player6['lastName']}
      </Card.Title>
      <div className={'inner_container'}>
        <div className={'inner_card'}>{player6['collegeName']}</div>
        <div className={'inner_card'}>{player6['heightFeet'] + "'" + player6['heightInches']}</div>
        <div className={'inner_card'}>{"Years Pro: " + player6['yearsPro']}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card style={{ fontSize:"100px"}}><Card.Title>6</Card.Title></Card>
  }

  {guesses >7 ?
    <Card style={{ width:"18rem", padding:"10px" }}>
    <Card.Img variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture7}.png`}/>
    <Card.Body>
      <Card.Title>
        {player7["firstName"] + " " + player7['lastName']}
      </Card.Title>
      <div className={'inner_container'}>
        <div className={'inner_card'}>{player7['collegeName']}</div>
        <div className={'inner_card'}>{player7['heightFeet'] + "'" + player7['heightInches']}</div>
        <div className={'inner_card'}>{"Years Pro: " + player7['yearsPro']}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card style={{ fontSize: '100px'}}><Card.Title>7</Card.Title></Card>
  }

  {guesses > 8 ?
    <Card style={{ width:"18rem", padding:"10px" }}>
    <Card.Img variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture8}.png`}/>
    <Card.Body>
      <Card.Title>
        {player8["firstName"] + " " + player8['lastName']}
      </Card.Title>
      <div className={'inner_container'}>
        <div className={'inner_card'}>{player8['collegeName']}</div>
        <div className={'inner_card'}>{player8['heightFeet'] + "'" + player8['heightInches']}</div>
        <div className={'inner_card'}>{"Years Pro: " + player8['yearsPro']}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card style={{ fontSize: '100px'}}><Card.Title>8</Card.Title></Card>
  }
    </div>




  </>
  );
}
