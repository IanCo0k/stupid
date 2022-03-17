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
  const [player, setPlayer] = useState({});


  //${response.data.league['standard'][i]['firstName']}

  const fetchData = () => {
    axios.get("http://data.nba.net/data/10s/prod/v1/2021/players.json")
      .then((response) => {
        let random = Math.random() * 585;
        random = Math.floor(random);
        setPlayer(response.data.league['standard'][random])
        console.log(response.data.league['standard'][random]);
        setDatabase(response.data.league["standard"]);
        for(var i=0; i<response.data.league['standard'].length; i++){
          setNames(names => names.concat({label: `${response.data.league['standard'][i]['firstName']} ${response.data.league['standard'][i]['lastName']}`}))
        }
      });
    }

  useEffect(() => {
    if(!data){
      fetchData();
      console.log(database);
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
          <form className={'form'} onSubmit={(e) => {
            e.preventDefault();
            setValue("");
          }}>
          <Select value={{label: `${value}`}}onChange={e => setValue(e.label)} options={names}/>
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
              }
            }
          }
          setValue('');
        }}>Guess</button>
        </form>
    </div>

    <div className={'card_container'}>
    {guesses >= 1 && letsGo ?
      <Card className={'card'}>
      <Card.Title>
        {player1["firstName"] + " " + player1['lastName']}
      </Card.Title>
      <Card.Img variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture1}.png`}/>
      <Card.Body>
        <div className={'inner_container'}>
          <div className={(player1['collegeName'] == player['collegeName']) ? 'correct' : 'inner_card'}>{player1['collegeName']}</div>
          <div className={player1['heightInches'] == player['heightInches'] ? 'correct' : 'inner_card'}>{player1['heightFeet'] + "'" + player1['heightInches']}</div>
          <div className={player1['yearsPro'] == player['yearsPro'] ? 'correct' : 'inner_card'}>{"Years Pro: " + player1['yearsPro']}</div>
          <div className={player1['pos'] == player['pos'] ? 'correct' :'inner_card'}>{player1['pos']}</div>
        </div>
      </Card.Body>
      </Card>

      :

      <Card className={'card'}><Card.Title>1</Card.Title></Card>
    }

    {guesses > 2 ?
    <Card className={'card'}>
    <Card.Title>
      {player2["firstName"] + " " + player2['lastName']}
    </Card.Title>
    <Card.Img variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture2}.png`}/>
    <Card.Body>
      <div className={'inner_container'}>
      <div className={(player2['collegeName'] == player['collegeName']) ? 'correct' : 'inner_card'}>{player2['collegeName']}</div>
      <div className={player2['heightInches'] == player['heightInches'] ? 'correct' : 'inner_card'}>{player2['heightFeet'] + "'" + player2['heightInches']}</div>
      <div className={player2['yearsPro'] == player['yearsPro'] ? 'correct' : 'inner_card'}>{"Years Pro: " + player2['yearsPro']}</div>
      <div className={player2['pos'] == player['pos'] ? 'correct' :'inner_card'}>{player2['pos']}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card className={'card'}><Card.Title>2</Card.Title></Card>
  }

  {guesses > 3 ?
    <div className={'please'}>
    <Card className={'card'}>
    <Card.Title>
      {player3["firstName"] + " " + player3['lastName']}
    </Card.Title>
    <Card.Img variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture3}.png`}/>
    <Card.Body>
      <div className={'inner_container'}>
      <div className={(player3['collegeName'] == player['collegeName']) ? 'correct' : 'inner_card'}>{player3['collegeName']}</div>
      <div className={player3['heightInches'] == player['heightInches'] ? 'correct' : 'inner_card'}>{player3['heightFeet'] + "'" + player3['heightInches']}</div>
      <div className={player3['yearsPro'] == player['yearsPro'] ? 'correct' : 'inner_card'}>{"Years Pro: " + player3['yearsPro']}</div>
      <div className={player3['pos'] == player['pos'] ? 'correct' :'inner_card'}>{player3['pos']}</div>
      </div>
    </Card.Body>
    </Card>
    </div>
    :
    <Card className={'card'}><Card.Title>3</Card.Title></Card>
  }

  {guesses > 4 ?
    <Card className={'card'}>
    <Card.Title>
      {player4["firstName"] + " " + player4['lastName']}
    </Card.Title>
    <Card.Img variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture4}.png`}/>
    <Card.Body>
      <div className={'inner_container'}>
      <div className={(player4['collegeName'] == player['collegeName']) ? 'correct' : 'inner_card'}>{player4['collegeName']}</div>
      <div className={player4['heightInches'] == player['heightInches'] ? 'correct' : 'inner_card'}>{player4['heightFeet'] + "'" + player4['heightInches']}</div>
      <div className={player4['yearsPro'] == player['yearsPro'] ? 'correct' : 'inner_card'}>{"Years Pro: " + player4['yearsPro']}</div>
      <div className={player4['pos'] == player['pos'] ? 'correct' :'inner_card'}>{player4['pos']}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card className={'card'}><Card.Title>4</Card.Title></Card>
  }

  {guesses>5 ?
    <Card className={'card'}>
    <Card.Title>
      {player5["firstName"] + " " + player5['lastName']}
    </Card.Title>
    <Card.Img variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture5}.png`}/>
    <Card.Body>
      <div className={'inner_container'}>
      <div className={(player5['collegeName'] == player['collegeName']) ? 'correct' : 'inner_card'}>{player5['collegeName']}</div>
      <div className={player5['heightInches'] == player['heightInches'] ? 'correct' : 'inner_card'}>{player5['heightFeet'] + "'" + player5['heightInches']}</div>
      <div className={player5['yearsPro'] == player['yearsPro'] ? 'correct' : 'inner_card'}>{"Years Pro: " + player5['yearsPro']}</div>
      <div className={player5['pos'] == player['pos'] ? 'correct' :'inner_card'}>{player5['pos']}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card className={'card'}><Card.Title>5</Card.Title></Card>
  }

  {guesses > 6 ?
    <Card className={'card'}>
    <Card.Title>
      {player6["firstName"] + " " + player6['lastName']}
    </Card.Title>
    <Card.Img variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture6}.png`}/>
    <Card.Body>
      <div className={'inner_container'}>
      <div className={(player6['collegeName'] == player['collegeName']) ? 'correct' : 'inner_card'}>{player6['collegeName']}</div>
      <div className={player6['heightInches'] == player['heightInches'] ? 'correct' : 'inner_card'}>{player6['heightFeet'] + "'" + player6['heightInches']}</div>
      <div className={player6['yearsPro'] == player['yearsPro'] ? 'correct' : 'inner_card'}>{"Years Pro: " + player6['yearsPro']}</div>
      <div className={player6['pos'] == player['pos'] ? 'correct' :'inner_card'}>{player6['pos']}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card className={'card'}><Card.Title>6</Card.Title></Card>
  }

  {guesses >7 ?
    <Card className={'card'}>
    <Card.Title>
      {player7["firstName"] + " " + player7['lastName']}
    </Card.Title>
    <Card.Img variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture7}.png`}/>
    <Card.Body>
      <div className={'inner_container'}>
      <div className={(player7['collegeName'] == player['collegeName']) ? 'correct' : 'inner_card'}>{player7['collegeName']}</div>
      <div className={player7['heightInches'] == player['heightInches'] ? 'correct' : 'inner_card'}>{player7['heightFeet'] + "'" + player7['heightInches']}</div>
      <div className={player7['yearsPro'] == player['yearsPro'] ? 'correct' : 'inner_card'}>{"Years Pro: " + player7['yearsPro']}</div>
      <div className={player7['pos'] == player['pos'] ? 'correct' :'inner_card'}>{player7['pos']}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card className={'card'}><Card.Title>7</Card.Title></Card>
  }

  {guesses > 8 ?
    <div style>
    <Card className={'card'}>
    <Card.Title>
      {player8["firstName"] + " " + player8['lastName']}
    </Card.Title>
    <Card.Img variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture8}.png`}/>
    <Card.Body>
      <div className={'inner_container'}>
      <div className={(player8['collegeName'] == player['collegeName']) ? 'correct' : 'inner_card'}>{player8['collegeName']}</div>
      <div className={player8['heightInches'] == player['heightInches'] ? 'correct' : 'inner_card'}>{player8['heightFeet'] + "'" + player8['heightInches']}</div>
      <div className={player8['yearsPro'] == player['yearsPro'] ? 'correct' : 'inner_card'}>{"Years Pro: " + player8['yearsPro']}</div>
      <div className={player8['pos'] == player['pos'] ? 'correct' :'inner_card'}>{player8['pos']}</div>
      </div>
    </Card.Body>
    </Card>
    </div>
    :
    <Card className={'card'}><Card.Title>8</Card.Title></Card>
  }
    </div>




  </>
  );
}
