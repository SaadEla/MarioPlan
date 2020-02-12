const initState = {
    projects: [
        {id: '1', title: 'Allez si Ibrahim', content: 'blah blah blah'},
        {id: '2', title: 'Momkin te3tini wa7ed project', content: 'blah blah blah'},
        {id: '3', title: 'Wa bghina sataaaat a lambi', content: 'blah blah blah'}
      ]
}

const projectReducer = (state = initState,action) => {

    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('project created', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.error);
            return state;
        default: 
            return state;
    }
    
}

export default projectReducer;