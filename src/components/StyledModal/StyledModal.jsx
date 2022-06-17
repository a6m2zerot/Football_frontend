import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { OutlinedInput } from '@mui/material';
import {nanoid} from 'nanoid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const teams = [{
name: "Comet",
players: ['C1', 'C2', 'C3']
}, {
  name: "Rocket",
  players: ['R1', 'R2', 'R3']
  },{
    name: "Meteor",
    players: ['M1', 'M2', 'M3']
    }]

export default function BasicModal({isOpen, onClose, onSave}) {
  const [team1, setTeam1] = useState('');
  const [team1Goals, setTeam1Goals] = useState(0);
  const [playerTeam1, setPlayerTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [team2Goals, setTeam2Goals] = useState(0);
  const [playerTeam2, setPlayerTeam2] = useState('');

  const handleChangeTeam1 = (event) => {
    setTeam1(event.target.value);
  };
  const handleTeams1GoalsChange = (event) => {
    setTeam1Goals(event.target.value);
  };
  const handleChangeTeam2 = (event) => {
    setTeam2(event.target.value);
  };
  const handleTeams2GoalsChange = (event) => {
    setTeam2Goals(event.target.value);
  };
  const handlePlayerTeams1Change = (event) => {
    setPlayerTeam1(event.target.value);
  };
  const handlePlayerTeams2Change = (event) => {
    setPlayerTeam2(event.target.value);
  };
  
  const handleSave = () => {
    const data = {
      id: nanoid(3),
      team1: {
        name: team1,
        goals: team1Goals,
        players: playerTeam1
      },
      team2: {
        name: team2,
        goals: team2Goals,
        players: playerTeam2
      },
    }
    onSave(data)
  }

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Team 1</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="team1"
                value={team1}
                label="Team 1"
                onChange={handleChangeTeam1}
              >
                {teams.map((team, ind) => {
                    return <MenuItem key={ind} value={team.name}>{team.name}</MenuItem>
                })}
                
              </Select>
            </FormControl>
            <OutlinedInput value={team1Goals} onChange={handleTeams1GoalsChange}/>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">playerTeam1</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="playerTeam1"
                value={playerTeam1}
                label="playerTeam1"
                onChange={handlePlayerTeams1Change}
              > 
                {teams.filter(team => team1 ? team.name === team1 : team)[0].players.map((player, ind) => {
                    return <MenuItem key={ind} value={player}>{player}</MenuItem>
                })}
                
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Team 2</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="team2"
                value={team2}
                label="Team 2"
                onChange={handleChangeTeam2}
              >
                {teams.map((team, ind) => {
                  return <MenuItem key={ind} value={team.name}>{team.name}</MenuItem>
                })}
                
              </Select>
            </FormControl>
                  <OutlinedInput value={team2Goals} onChange={handleTeams2GoalsChange}/>
                  <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">playerTeam2</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="playerTeam2"
                value={playerTeam2}
                label="playerTeam2"
                onChange={handlePlayerTeams2Change}
              > 
                {teams.filter(team => team2 ? team.name === team2 : team)[0].players.map((player, ind) => {
                    return <MenuItem key={ind} value={player}>{player}</MenuItem>
                })}
                
              </Select>
            </FormControl>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={handleSave}>Save</Button>
        </Box>
      </Modal>
    </div>
  );
}