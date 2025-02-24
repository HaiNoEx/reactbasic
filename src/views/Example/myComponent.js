import React from 'react';
import ChildComponent from './childComponent';
import AddComponent from './addComponent';

class MyComponent extends React.Component{

    state = {

        arrJobs: [
            {id: 'Job1', title:'Dev', salary:'500'},
            {id: 'Job2', title:'Tester', salary:'500'},
            {id: 'Job3', title:'QA', salary:'500'},

        ]
    }
    

    addNewJob = (job) => {
        console.log("Check job : ", job);
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job);
        this.setState({
            
            arrJobs: [...this.state.arrJobs, job] // ... : Toán tử copy
            // arrJobs: currentJobs
        })

    }
    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidMount(){
        console.log(' >> Run component did mount')
    }

    componentDidUpdate(prevProps, prevState){
        console.log(' >> Run component did update, prev State: ', prevState, ' current state: ', this.state)
    }

    render(){
        return (
            <>
                <AddComponent 
                addNewJob={this.addNewJob}/>

                <ChildComponent 
                arrJobs={this.state.arrJobs}
                deleteAJob={this.deleteAJob}
                />
                

            </>
        )
    }
}

export default MyComponent;