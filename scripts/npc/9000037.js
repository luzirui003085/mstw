﻿/*
	NPC Name: 		Agent Kitty
	Map(s): 		Special Training Camp for Agent (970030000)
	Description: 		Agent event Starter
*/


function start() {

    if (cm.getMapId() == 970030000) {

		if(cm.getParty() != null){

			cm.sendOk("只能1个人进入.");

			cm.dispose();

		}else{

	cm.start_DojoAgent(false, false);

	cm.resetMapS();

	cm.dispose();

	}

    } else if (cm.getMapId() == 910000000) {

	cm.sendYesNo("你想要开始27关副本吗？")
	type = 1;
 
   } else {
	cm.sendYesNo("你想要离开吗?");
	type = 2;
  
  }
}

function action(mode, type, selection) {
  
  if (mode == 1) {

	cm.warp(970030000, 0);
 
   }
   
 cm.dispose();

}