var mongoose = require('mongoose');
var bCrypt= require('bCrypt-nodejs');
var uuid = require('node-uuid');

module.exports =function() {
  var user = {
    model : mongoose.model('User', {
      sessionId: String,
      username: String,
      password: String,
      permission: String,
      realName: String
    }),
    login: function(username, password, callback) {
      user.model.findOne({username : username}, function(err, foundUser) {
        if(err) {
          return callback(err);
        }
        else if(!foundUser) {
          console.log('user not found with foundUsername');
          return callback(404);
        }
        else if(bCrypt.compareSync(password, foundUser.password)) {
          console.log('login successful');
          foundUser.sessionId = uuid.v4();
          foundUser.save();
          return callback(foundUser);
        }
        else {
          console.log("invalid password");
          return callback(401);
        }
      });
    },
    logout: function(cookie, callback) {
      user.model.findOne({sessionId : cookie}, function(error, foundUser) {
        if (error) {
          console.log('Session ID not found');
          return callback(404);
        }
        else {
          user.model.update({sessionId: cookie}, 
                            {$unset: {sessionId: null}}, 
                            function(error, result) {
            if (error) {
              console.log('Error deleting cookie');
              return callback(400);
            }
            if (result.ok) {
              return callback(200)
            }
          });
        }
      });
    },
    register: function(username, password, permision, callback) {
      user.model.findOne({username : username}, function(error, foundUser) {
        if(error) {
          console.log("error in signup");
          console.log(error);
          return callback(400);
        }
        else if(foundUser) {
          console.log('user already exist');
          return callback(400);
        }
        else {
          var newUser = new user.model();
          newUser.username = username;
          newUser.password = bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
          newUser.sessionId = uuid.v4();
          newUser.permision = permision;
          newUser.save();
          return callback(newUser.sessionId);
        }
      });
    },
    retrieve: function(callback) {
      user.model.find({}, function(error, users) {
        return callback(users);
      });
    },
    discard: function(userId, callback) {
      user.model.findOne({_id: userId.id}, function(error, foundUser) {
        if (error) {
          console.log("error locating user: " + id);
          console.log(error);
          return callback(400);
        }
        else {
          foundUser.remove(function(error, result) {
            if (error) {
              console.log("error trying to delete user: " + foundUser);
              console.log(error);
              return callback(400);
            }
            else {
              return callback(200);
            }
          })
        }
      })
    }
  };

  return user;
}