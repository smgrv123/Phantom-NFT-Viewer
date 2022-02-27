import React, { useEffect, useState } from "react";
import Store from "../Store/Store";
import "../styles/ItemDetails.css";

function ItemDetails() {
  const [mintAddress, setmintAddress] = useState<string>();

  useEffect(() => {
    let Data = Store.metadata.filter(
      (meta: any) => meta.data.name === Store.imageData[0].name
    );
        console.log(Data[0])
    setmintAddress(Data[0].mint);
  }, []);

  return (
    <div style={{ flexDirection: "row", display: "flex" }}>
      <div className="NFTimgcontainer">
        <img className="NFTimg" src={Store.imageData[0].image} />
      </div>
      <div>
        <h1>Name: {Store.imageData[0].name}</h1>
        <h2> Mint Address: {mintAddress} </h2>
      </div>
    </div>
  );
}

export default ItemDetails;
