import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Tree from "../../component/Tree";

const treeData = [
    {
        key: "0",
        label: "Documents",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [
            {
                key: "0-0",
                label: "Document 1-1",
                icon: "fa fa-folder",
                title: "Documents Folder",
                children: [
                    {
                        key: "0-1-1",
                        label: "Document-0-1.doc",
                        icon: "fa fa-file",
                        title: "Documents Folder",
                    },
                    {
                        key: "0-1-2",
                        label: "Document-0-2.doc",
                        icon: "fa fa-file",
                        title: "Documents Folder",
                    },
                    {
                        key: "0-1-3",
                        label: "Document-0-3.doc",
                        icon: "fa fa-file",
                        title: "Documents Folder",
                    },
                    {
                        key: "0-1-4",
                        label: "Document-0-4.doc",
                        icon: "fa fa-file",
                        title: "Documents Folder",
                    },
                ],
            },
        ],
    },
    {
        key: "1",
        label: "Desktop",
        icon: "fa fa-desktop",
        title: "Desktop Folder",
        children: [
            {
                key: "1-0",
                label: "document1.doc",
                icon: "fa fa-file",
                title: "Documents Folder",
            },
            {
                key: "0-0",
                label: "documennt-2.doc",
                icon: "fa fa-file",
                title: "Documents Folder",
            },
        ],
    },
    {
        key: "2",
        label: "Downloads",
        icon: "fa fa-download",
        title: "Downloads Folder",
        children: [],
    },
];

const TreeList = () => {
    return (
        <>


            <div className="row" style={{textAlign:'left',marginLeft:'3%  '}}>
                <div className="col text-center">
                    
                    <p className="mt-3">
                        <div className="row mt-3 d-flex justify-content-center">
                            <div className="col-lg-8 text-left text-dark">
                                <Tree data={treeData} />
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </>
    );
};



const Home = () => {

    return (
        <>
        <div className='main'>
            <div className='day'>
                <p className='date'>
                    12<p style={{fontSize:'22px',paddingTop:'17px',paddingLeft:'2px'}}>th</p>
                </p>
                <p className='month'>
                    Jan, 2021
                </p>
            </div>

            <div className='list'>
                <div className='titl'>
                    <p style={{ fontSize: '16px',fontFamily:'Nunito Sans',fontWeight:'900' ,paddingTop: '10px', paddingLeft: '2px',marginLeft:'-300px',display:'flex' }}>My <p style={{color:'red',marginTop:'0px',paddingLeft:'3px'}}>To</p>-Do List</p>
                </div>
                <TreeList/>
                
            </div>

                <div className='status'>
                    <p style={{ fontSize: '15px', fontWeight: 'bold', fontFamily: 'Nunito Sans', marginLeft: '144px', marginTop: '55%' }}>Status</p>
                <div className='task' style={{marginLeft:'84px',marginTop:'21px'}}>
                    <p style={{ fontSize: '15px', fontFamily: 'Nunito Sans',textAlign:'left' }}>Total Tasks:</p>
                    <p style={{ fontSize: '15px', fontFamily: 'Nunito Sans', textAlign: 'left' }}>Completed Tasks:</p>
                    <p style={{ fontSize: '15px', fontFamily: 'Nunito Sans', textAlign: 'left' }}>Pending Tasks:</p>
                </div>
            </div>

        </div>

            <footer class="page-footer">
                <div className='wrapper'>
                    <div className='foot1'>
                        <div className='footertext'>
                            <h4>Task: To-Do List </h4>
                           
                        </div>
                    </div>
                    
                    <div className='foot2'>
                        
                          
                            <p>Rudransh Arora</p>

                        

                    </div>

                    <div className='foot3'>


                        <p>Rudransh Arora</p>



                    </div>
                    

                    <div className='foot3'>
                        <div className='tog1'>
                            <h4>Navigate</h4>
                            <div className='ps1'>
                                <p>Learn More  </p>
                                <p>FAQs  </p>
                                <p>Our Story  </p>
                                <p>Team  </p>
                            </div>
                            <div className='ps2'>
                                <p>  Terms & Conditions</p>
                                <p>  Privacy Policy</p>
                                <p>  Terms of use</p>
                                <p>  Help & Support</p>
                            </div>
                        </div>

                    </div>

                </div>
            </footer>




        </>

    )
}

export default Home