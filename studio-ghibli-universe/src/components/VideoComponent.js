import React from 'react';
import ReactPlayer from 'react-player'


function VideoComponent(props) {
  return (
    <>
      <div className="VideoComponent" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#111', padding: '20px' }}>
        <div style={{ display: 'inline-block', justifyContent: 'right', backgroundColor: '#111', padding: '20px', color: '#cccdb4' }}>

          <button type="button" class="btn " data-toggle="modal" data-target="#exampleModal" style={{ backgroundColor: '#1278a8', color: '#cccdb4', padding: '10px 30px 10px 30px', fontFamily: 'Lora', margin: '10px' }}>
            Watch Trailer
          </button>

          <button type="button" class="btn  " data-toggle="modal" data-target="#exampleModalTwo" style={{ backgroundColor: '#1278a8', color: '#cccdb4', padding: '10px 30px 10px 30px', fontFamily: 'Lora', margin: '10px' }}>
            Watch Movie
          </button>

        </div></div>


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog modal-xl" >
          <div class="modal-content" style={{ backgroundColor: 'black' }}>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel" style={{ color: 'white' }}>Trailer</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" style={{ color: 'white' }}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="VideoComponent" style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'black', padding: '20px' }}>

                <ReactPlayer controls width='800px' url={props.video} /></div>

            </div>
          </div>
        </div>
      </div>



      <div class="modal fade" id="exampleModalTwo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog modal-xl" >
          <div class="modal-content" style={{ backgroundColor: 'black' }}>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabelTwo" style={{ color: 'white' }}>Movie</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" style={{ color: 'white' }}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="VideoComponent" style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'black', padding: '20px' }}>

                <ReactPlayer controls width='800px' onEnded={() => { alert("Add this movie to wishlist and buy it to watch the rest!") }} url={props.movie}/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoComponent