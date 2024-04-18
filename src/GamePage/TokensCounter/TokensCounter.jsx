import { useState } from "react";
import { useMyContext } from "../../../utils/ContextProvider";
import Modal from "../../common/Modal/Modal";
import styles from "./TokensCounter.module.scss";
import { ethers } from "ethers";

const TokensCounter = () => {
  const { userTokensAmount } = useMyContext();

  const [isNoMMOpen, setIsNoMMOpen] = useState(false);
  const [MMError, setMMError] = useState("");
  const [currentUser, setCurrentUser] = useState()

  const transferTokens = async () => {
    // if (mm connected) confirm window -> transfer
    // if (mm not connected) check mm extension
    //    if (no mm ext) download window with instruction and REFRESH
    //    if  (mm ext) connect and transfer
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      try {
        const accounts = await provider.send("eth_requestAccounts", []);
        // const signer = provider.getSigner();
        setCurrentUser(accounts[0])
      } catch (error) {
        setMMError(
          error.code === -32002
            ? "Request already pending. Please, check MetaMask."
            : error.message
        );
      }
    } else {
      setIsNoMMOpen(true);
    }
  };

  return (
    <div className={styles.tokensCounter}>
      <p>NEO tokens: {userTokensAmount}</p>
      <button
        className={styles.exportButton}
        title="Transfer to your wallet"
        onClick={transferTokens}
      />

      <Modal isOpen={isNoMMOpen} onClose={() => setIsNoMMOpen(false)}>
        <p>
          Ooops, it seems you don&#39;t have{" "}
          <a
            href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
            className={styles.metamask}
            target="_blank"
          >
            MetaMask
          </a>{" "}
          :(
        </p>
        <p>
          <a
            href="https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask"
            className={styles.metamask}
            target="_blank"
          >
            Here
          </a>{" "}
          is the instruction how to install and use it
        </p>
        <hr style={{ width: "100%" }} />
        <p className={styles.warning}>
          Please, reload the page after the installation
        </p>
      </Modal>

      <Modal isOpen={!!MMError} onClose={() => setMMError("")}>
        <p>{MMError}</p>
      </Modal>
    </div>
  );
};

export default TokensCounter;
