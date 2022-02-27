import React, { useState, useCallback } from "react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { programs } from "@metaplex/js";
import Axios from "axios";
import "../styles/GetNFT.css";
import Card from "../components/Card";
const {
  metadata: { Metadata },
} = programs;

const GetNFTs = () => {
  const [lamportBal, setlamportBal] = useState<number>(0);
  const [imageData, setimageData] = useState<any | null>();
  const [imageMetaData, setimageMetaData] = useState<any | null>();
  const [imageUnique, setimageUnique] = useState<any | null>();
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) {
      throw new WalletNotConnectedError();
    }

    let lamport = await connection.getBalance(new PublicKey(publicKey));

    const meta: any = await Metadata.findDataByOwner(
      connection,
      new PublicKey(publicKey)
    );

    if (lamport) {
      setlamportBal(lamport / LAMPORTS_PER_SOL);
    }

    setimageMetaData(meta);

    let uriArr: string[] = [];

    meta.forEach((metaData: any) => {
      uriArr.push(metaData.data.uri);
    });

    let Data: any = [];

    Data = (await Promise.all(uriArr.map((uri: string) => Axios.get(uri)))).map(
      (data: any) => data.data
    );
    setimageData(Data);
    let uniqueImages: any = [];

    uniqueImages = Data.filter((image: any, index: number) => {
      return (
        index === Data.findIndex((obj: any) => obj.symbol === image.symbol)
      );
    });

    setimageUnique(uniqueImages);
  }, [publicKey, connection]);

  return (
    <div>
      <button onClick={onClick} disabled={!publicKey}>
        Check out your NFTs
      </button>
      <div className="lamport">
        {lamportBal ? `Balance Sol :  ${lamportBal}` : null}
      </div>
      <div className="NFTcontainer">
        {imageUnique?.length>0
          ? imageUnique.map((image: any) => {
            console.log(image)
              return (
                <Card
                  type={image.name}
                  uri={image.image}
                  imageMetaData={imageMetaData}
                  imageData={imageData}
                  symbol={image.symbol}
                  screen={'SendLamport'}
                />
              );
            })
          : <p>No NFTs Found</p>}
      </div>
    </div>
  );
};

export default GetNFTs;
