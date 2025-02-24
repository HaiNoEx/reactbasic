import React from 'react';
import './childComponent.scss';

// Class: thể hiện class component
// class ChildComponent extends React.Component{
    

class ChildComponent extends React.Component{
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelete = (job) => {
        console.log(job)
        this.props.deleteAJob(job);

    }

    

    render(){
        // console.log('>> Check props: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;

        let {arrJobs} = this.props;
        let {showJobs} = this.state;
        let check = showJobs ===true ? 'showJobs = true' : 'showJobs = false';
        console.log('check condition: ', check);
        return (
            <>
                {showJobs === false ?
                    <div >
                        <button className='btn-show'  onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                :
                    <>
                        <div className='job-lists'>
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></> 
                                            <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })

                            }

                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
                
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     console.log('>> check child: ', props);
//     let {arrJobs} = props;
//         let a ='';
//         return (
//             <>
//                 <div className='job-lists'>
//                     {
//                         a = arrJobs.map((item, index) => {
//                             if(item.salary >= 500){
//                                 return (
//                                     <div key={item.id}>
//                                         {item.title} - {item.salary} $
//                                     </div>
//                                     )
//                             }
//                         })

//                     }
//                     {console.log('>> Check map array: ', a)}
//                 </div>

                
//             </>
//         )
// }
export default ChildComponent;