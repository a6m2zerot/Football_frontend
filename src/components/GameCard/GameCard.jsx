import './GameCard.css'

function GameCard({name, surname}) {
  return (
    <div className="game-card">
      {name} {surname}
     
  
      {/* <div className="card m-3" style={{width: '18rem'}}>
        <div className="card-body"> */}
                {/* <div className="mb-3">
                    <button type="button" className="btn-close" aria-label="Close" data-bs-toggle="modal" data-bs-target="#DTG"></button>
                    <p className="form-label text-center"><b>Game # 123</b></p>

                  <label htmlFor="exampleInputEmail" className="form-label">123</label>
                    <div className="form-control" id="exampleInputEmail" aria-describedby="emailHelp">123</div>

                </div>
                <div className="mb-3">

                  <label htmlFor="exampleInputPassword" className="form-label">123</label>
                    <div className="form-control" id="exampleInputPassword">123</div>
                </div> */}
        {/* </div>
      </div> */}

    </div>
  );
}

export default GameCard;