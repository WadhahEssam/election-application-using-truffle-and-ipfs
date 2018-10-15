// this means that we are going to reference 
// functions from teh election contract
var Election = artifacts.require("./Election.sol");

// this will inject the accounts to our test
contract("Election", accounts => {

  let electionContract;

  beforeEach( async () => {
    electionContract = await Election.deployed();
  });

  it("initializes the contract with two candidates", () => {
    // accessing our contract and calling the 
    // candidates count function and then 
    // asserting that the count equals two
    Election.deployed().then(instance => {
      return instance.candidatesCount();
    }).then(count => {
      assert.equal(count, 2);
    });
  });

  it("initializes the contract with two candidates using async await", async () => {
    // accessing our contract and calling the 
    // candidates count function and then 
    // asserting that the count equals two
    // and i used async await functionality 
    // to make the code looks better and easy
    // to understand and work with 
    const candidatesCount = await electionContract.candidatesCount();
    assert.equal(candidatesCount, 2);
  });

  it("initializes the candidates with the correct values", async () => {
    const candidate1 = await electionContract.candidates(1);
    assert.equal(candidate1[0].toNumber(), 1);
    assert.equal(candidate1[1], 'Salem');
    assert.equal(candidate1[2].toNumber(), 0);

    const candidate2 = await electionContract.candidates(2);
    assert.equal(candidate2[0].toNumber(), 2);
    assert.equal(candidate2[1], 'Mohammed');
    assert.equal(candidate2[2].toNumber(), 0);
  });

});