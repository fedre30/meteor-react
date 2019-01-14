import { Meteor } from 'meteor/meteor';
import list from 'List';


export const Student = {

};

Meteor.startup(() => {
  if( list.find().count() <= 0 )
  {
    Student.insert(
      {
        name : "Federica Alfano"
      }
    );
  }
});

