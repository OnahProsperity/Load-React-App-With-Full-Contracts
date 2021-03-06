import React from 'react'

function TokenSale() {
	return (
		<>
		
		    <div class="container">
		      <div class="col-lg-12">
		            <h1 class="text-center">DYCOIN TOKEN ICO SALE</h1>
		            <hr/>
		            <br/>
		        </div>
		        <div id="loader">
		          <p class="text-center">Loading...</p>
		        </div>
		        <div id="content" class="text-center">
		          <p>
		            Introducing "DApp Token" (DAPP)!
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
		</>
	)
}

export default TokenSale