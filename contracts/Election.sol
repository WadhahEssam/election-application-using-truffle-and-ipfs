pragma solidity ^0.4.11;

contract Election {
  // it doesn't  hvae to be public cuz
  // we are not going to access it direclty 
  struct Candidate {
    uint id;
    string name;
    uint voteCount;
  }

  // the key will corrospond to the 
  // candidate id and we will be able to 
  // access the candidates fro the auto
  // generated getter function candidates() 
  mapping(uint => Candidate) public candidates;

  // cuz as i know there is no way to determine 
  // the saize of a mapping or even iterate 
  // over the mapping and this count will 
  // help us to iterate throw the candidates
  // the default value of this will be zero 
  uint public candidatesCount;

  constructor() public {
    addCandidate("Salem");
    addCandidate("Mohammed");
  }

  // we made private because we don't want 
  // any one to be able to add candidates
  function addCandidate(string _name) private {
    candidatesCount++;
    // this is how to add data to mapping 
    // and creating a struct candidate
    candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
  }

}