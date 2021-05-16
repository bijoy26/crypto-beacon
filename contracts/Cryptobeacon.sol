// SPDX-License-Identifier: MIT
pragma solidity 0.4.22;
pragma experimental ABIEncoderV2;

contract Cryptobeacon{
  // // enum for categories
  // enum Category { Administration, Politics, Education, Business, Technology, Society, Others }
  //
  struct activity{
    uint pid;
    string cid;
    string title;
    string details;
    string category;
    uint upvotes;
  }

  //read/write Activities
  mapping(uint => activity) public activities;

  event newActivityEvent(
    uint indexed cid
  );
  event newUpvoteEvent(
    uint indexed cid,
    uint voteCount
  );

  //Counter Cache for activities
  uint public activityCount;

   //cnstructor runs when contract is being deployed on blockchain
  constructor() public {
      activityCount = 0;
      addActivity("0xAAAAAAAAAAAAAA", "t1","LOREM IPSUM LOREM IPSUM", "administration");
      addActivity("0xBBBBBBBBBBBBBB", "t2","LOREM IPSUM LOREM IPSUM", "politics");
      addActivity("0xCCCCCCCCCCCCCC", "t3","LOREM IPSUM LOREM IPSUM", "education");
      addActivity("0xDDDDDDDDDDDDDD", "t4","LOREM IPSUM LOREM IPSUM", "business");
      addActivity("0xEEEEEEEEEEEEEE", "t5","LOREM IPSUM LOREM IPSUM", "technology");
  }

  function addActivity(string _cid, string _title, string _details, string _category) public {
      
      activityCount++;
      activity storage act = activities[activityCount];

      act.pid = activityCount;
      act.cid = _cid;
      act.title = _title;
      act.details = _details;
      act.category = _category;
      act.upvotes = 0;
     
      //trigger new activity event
      emit newActivityEvent(activityCount);
  }

	function getActivity(uint _pid) public view returns(activity){
     // bound check
      require(_pid > 0 && _pid <= activityCount);
		  return activities[_pid];
	}

  function getLast5Activities() public view returns(activity, activity, activity, activity, activity){
     // bound check 
      require(activityCount >= 5);
		  return (activities[activityCount], activities[activityCount-1], activities[activityCount-2], activities[activityCount-3], activities[activityCount-4]);
	}
  function upVote(uint _pid) public {

      activities[_pid].upvotes++;
      //trigger new activity event
      emit newUpvoteEvent(activities[_pid].pid, activities[_pid].upvotes);
  }
    
}
