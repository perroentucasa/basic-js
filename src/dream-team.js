const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  let team = "";
  if (Array.isArray(members)) {
    members.forEach((word) => {
      if (typeof word == "string") {
        team = team + word.replace(/\s+/g, "").charAt(0);
      }
    });
    return team.toUpperCase().split("").sort().join("");
  } else return false;
}

module.exports = {
  createDreamTeam
};
