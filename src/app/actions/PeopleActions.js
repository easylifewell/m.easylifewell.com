import appDispatcher from '../dispatcher/dispatcher';

const PeopleActions = {

  /**
   * @param  {string} text
   */
  add: function(text) {
    appDispatcher.dispatch({
      actionType: 'addPeople',
      text: text
    });
  },
};

export default PeopleActions;
