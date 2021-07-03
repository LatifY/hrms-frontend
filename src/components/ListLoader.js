import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";


export default function ListLoader({ list, height, text }) {
  return (
    <>
      {list.length <= 0 ? (
        <>
          <Dimmer active inverted>
            <Loader size="huge">{text || "Yükleniyor"}</Loader>
          </Dimmer>
          <div style={{ height: (height || 100 )}}></div>
        </>
      ) : null}
    </>
  );
}
