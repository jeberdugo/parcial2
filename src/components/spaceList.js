import React from "react";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Space from "./space";
import SpaceDetail from "./spaceDetail";

const SpaceList = () => {
  function getLocale() {
    const lang = navigator.language;
    return lang.substring(0, 2);
  }

  const [locale] = useState(getLocale());
  const [spaces, setSpaces] = useState([]);
  const [space, setSpace] = useState([]);

  useEffect(() => {
    getSpaces();
  }, []);

  let handleClick = async (id) => {
    setSpace(id);
  };



  function getSpaces() {
    new Promise(function (resolve, reject) {
      const req = new XMLHttpRequest();
      req.open(
        "get",
        "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
      );
      req.onload = function () {
        if (req.status === 200) {
          let spacesIn = JSON.parse(req.response);
          resolve(spacesIn);
          setSpaces(spacesIn);
        } else {
          reject("No se encontraron espacio");
        }
      };
      req.send();
    });
  }

  return (
    <div className="container">
<h1><FormattedMessage id="MySpaces" /></h1>
      <div className="row">
          {spaces.map((e, i) => (
            <Space key={i} onclick={handleClick} space={e} />
          ))}
          <SpaceDetail space={space} />
      </div>
    </div>
  );
};

export default SpaceList;
