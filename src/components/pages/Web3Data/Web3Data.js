import React, { useState, useEffect, useCallback } from 'react';
import './web3Data.css';
import { useWeb3, useWeb3Network, useEphemeralKey, useWeb3Injected } from '@openzeppelin/network/lib/react';

export default function Web3Data(props) {
const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/5745cb1c77d54ddcbd36d4788b1b621c`);
//const { web3Context } = props;
const { networkId, networkName, accounts, providerName, lib } = web3Context;
const [balance, setBalance] = useState(0);
const getBalance = useCallback(async () => {
	let balance = accounts && accounts.length > 0 ? lib.utils.fromWei(await lib.eth.getBalance(accounts[0]), 'ether') : 'Unknown';
	setBalance(balance);
}, [accounts, lib.eth, lib.utils]);
    
useEffect(() => {
getBalance();
}, [accounts, getBalance, networkId]);

const requestAuth = async web3Context => {
	try {
		await web3Context.requestAuth();
	} catch (e) {
		console.error(e);
	}
};
const requestAccess = useCallback((web3Context) => requestAuth(web3Context), []);
return (
<div>
	<div class="headTag">
        <h1>DYCOIN TOKEN ICO SALE</h1>
        <hr/>
        <br/>
	</div>
	<table class="tab">
	  <tr class="trole">
	    <th>Network:</th>
	    <th>Your address:</th>
	    <th>Provider:</th>
	    <th>LogAccount:</th>
	  </tr>
	  <tr>
	    <td>{networkId ? `${networkId} – ${networkName}` : 'No connection'}</td>
	    <td>{accounts && accounts.length ? accounts[0] : 'Unknown'}</td>
	    <td>{providerName}</td>
	    <td>{accounts && accounts.length ? (
		<div>
	    Accounts & Signing Status: Access Granted
	    </div>
		) : !!networkId && providerName !== 'infura' ? (
		<div>
		<button onClick={requestAccess}>Request Access To Wallet</button>
		</div>
		) : (
		<div></div>
		)}</td>
	  </tr>
	</table>

	<div class="container">
        <div id="loader" class="load">
          <p class="text-center">Loading...</p>
        </div>
        <div id="content" class="text-center">
          <p>
            Introducing "DYCOIN Token" (DAPP)!
            Token price is <span class="token-price"></span> Ether. You currently have <span class="dapp-balance"></span>&nbsp;DAPP.
          </p>
          <br/>
          <form onSubmit="App.buyTokens(); return false;" role="form">
            <div class="form-group">
              <div class="input-group">
                <input id="numberOfTokens" class="form-control input-lg" type="number" name="number" value="1" min="1" pattern="[0-9]">
                </input>
                <span class="input-group-btn">
                  <button type="submit" class="btn btn-primary btn-lg">Buy Tokens</button>
                </span>
              </div>
            </div>
          </form>
          <br />
           <div class="progress">
              <div id="progress" class="progress-bar progress-bar-striped active" aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
          <p><span class="tokens-sold"></span> / <span class="tokens-available"></span> tokens sold</p>
          <hr />
          <p id="accountAddress"></p>
        </div>
   	</div>
</div>
);
}

