
import { useState } from 'react';
import { Button } from '@mui/material';
import GameCard from '../../components/GameCard/GameCard'
import StyledModal from '../../components/StyledModal/StyledModal'
import {useDispatch, useSelector} from "react-redux"
import { addGame } from "../../store/games/games.reducer"


const users = [{ïd: 1, name: "Joch", surname: "Smith"}, {ïd:2, name: "Joch", surname: "Smith2"}, {ïd: 3, name: "Joch", surname: "Smith3"}]

function MainPage() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = (data) => {
    dispatch(addGame(data))

    handleClose()
  }

    return (
      <div className="MainPage">
        {users.map((user) => {
          return <GameCard key={user.id} name={user.name} surname={user.surname}/>
        })}

        <Button onClick={handleOpen}>Добавить игру</Button>
        <StyledModal isOpen={open} onClose={handleClose} onSave={handleSave}>
        </StyledModal>
      </div>
    );
  }
  
  export default MainPage;
  