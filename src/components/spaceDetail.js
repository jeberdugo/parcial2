
import React from "react";
import { useState, useEffect } from "react";
//



const SpaceDetail = (props) => {

    const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState([]);
    
    useEffect(() => {
      getRooms();
    }, []);
    
    function getRooms() {
        new Promise(function (resolve, reject) {
          const req = new XMLHttpRequest();
          req.open(
            "get",
            "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json"
          );
          req.onload = function () {
            if (req.status === 200) {
              let spacesIn = JSON.parse(req.response);
              resolve(spacesIn);
              setRooms(spacesIn);
              console.log(rooms);
            } else {
              reject("No se encontraron espacio");
            }
          };
          req.send();
        });
      }


  return (
    <div class="card">
  <img src={props.movie.poster} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">{props.movie.description}</p>
  </div>
   </div>
  );
};

export default SpaceDetail;