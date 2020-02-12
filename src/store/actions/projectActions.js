
/*Redux Thunk middleware allows you to write action creators that return a function instead of an action. 
The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met*/

//alors la on prend le projet on l'envoie a l'action

//on ne dispatch pas directement mais on peut effectuer quelques async call
//apres on dispatch

//F ACTION 3ADIYA ON RENVOYAIT UNE ACTION ZE3MA UN OBJJET (type,contenu'payload') l reducer
//avce thunk on renvoie une fonction

//IN THUNK WE HOLD THE DISPATCHER

export const createProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: getState().firebase.profile.firstName ,
      authorLastName: getState().firebase.profile.lastName,
      authorId: getState().firebase.auth.uid,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};