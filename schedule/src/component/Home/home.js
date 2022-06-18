import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Tree from "../../component/Tree";

const treeData = [
    {
        key: "0",
        label: "Lorem Ipsum",
        icon: "fa fa-folder",
        
        children: [
            {
                key: "0-0",
                label: "Inside Lorem Ipsum",
                icon: "fa fa-folder",
                
                children: [
                    {
                        key: "0-1-1",
                        label: "Inside 1",
                        icon: "fa fa-file",
                       
                    },
                    {
                        key: "0-1-2",
                        label: "Inside 2",
                        icon: "fa fa-file",
                        
                    },
                    {
                        key: "0-1-3",
                        label: "Inside 3",
                        icon: "fa fa-file",
                        
                    },
                    {
                        key: "0-1-4",
                        label: "Inside 4",
                        icon: "fa fa-file",
                        
                    },
                ],
            },
        ],
    },
    {
        key: "1",
        label: "Second Dropdown",
        icon: "fa fa-desktop",
        
        children: [
            {
                key: "1-0",
                label: "In 2",
                icon: "fa fa-file",
                
            },
            {
                key: "0-0",
                label: "In 3",
                icon: "fa fa-file",
                
            },
        ],
    },
    {
        key: "2",
        label: "Read and Article",
        icon: "fa fa-download",
        
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
                        <p style={{ fontSize: '16px', fontFamily: 'Nunito Sans', fontWeight: '900', paddingTop: '10px', paddingLeft: '2px', marginLeft: '-300px', display: 'flex' }}>My <p style={{ color:'#E33E5A',marginTop:'0px',paddingLeft:'3px'}}>To</p>-Do List</p>
                </div>
                <div className='srchbr'>
                <img className='srchico' src='./search.png'></img>
                        <input
                            type='text'
                            placeholder='search tasks here...'
                            
                        />
                </div>
                <TreeList/>
                
            </div>

                <div className='status'>
                    <p style={{ fontSize: '15px', fontWeight: 'bold', fontFamily: 'Nunito Sans', marginLeft: '144px', marginTop: '55%' }}>Status</p>
                <div className='taskall' style={{display:'flex',flexDirection:'row'}}>
                <div className='task' style={{marginLeft:'84px',marginTop:'21px'}}>
                    <p style={{ fontSize: '15px', fontFamily: 'Nunito Sans',textAlign:'left' }}>Total Tasks:</p>
                    <p style={{ fontSize: '15px', fontFamily: 'Nunito Sans', textAlign: 'left' }}>Completed Tasks:</p>
                    <p style={{ fontSize: '15px', fontFamily: 'Nunito Sans', textAlign: 'left' }}>Pending Tasks:</p>
                </div>
                        <div className='taskno' style={{ marginTop: '22px', marginLeft: '40px', color:'#E33E5A', fontWeight:'bold' }}>
                        <p style={{ fontSize: '15px', fontFamily: 'Nunito Sans', textAlign: 'right' }}>3</p>
                        <p style={{ fontSize: '15px', fontFamily: 'Nunito Sans', textAlign: 'right' }}>0</p>
                        <p style={{ fontSize: '15px', fontFamily: 'Nunito Sans', textAlign: 'right' }}>3</p>
                </div>
                </div>
            </div>

        </div>

            <footer class="page-footer">
                <div className='wrapper'>
                    <div className='foot1' style={{height:'43px'}}>
                        <div className='footertext' style={{ marginTop: '0px', marginBottom: '0px' }}>
                            <p style={{ display: 'inline-flex', fontFamily: 'Nunito Sans', fontSize: '13px', marginLeft: '50px',marginBottom:'0px' }}><p style={{ fontWeight: 'bold', display: 'inline-flex' }}>TASK:</p><p style={{ display: 'inline-flex', fontWeight: '900' }}> <p style={{ color: '#E33E5A', display: 'inline-flex', marginTop:'0px', marginLeft:'2px' }}>To</p>-Do List</p> </p>
                           
                        </div>
                    </div>
                    
                    <div className='foot2' style={{ height: '43px', marginTop: '11px' }}>
                        
                          
                        <p style={{ fontSize: '13px', marginLeft: '388px', color:'#1A1B2F' }}>Rudransh Arora</p>

                        

                    </div>

                    <div className='foot3' style={{ height: '43px', marginTop: '20px' }}>


                        <a href='https://github.com/Red-0111/To-Do-List' style={{ fontSize: '13px', textDecoration: 'none', verticalAlign: 'center', color:'#1A1B2F',marginLeft:'180px' }}>https://github.com/Red-0111/To-Do-List</a>



                    </div>
                    

                    <div className='foot4' style={{ height: '43px', marginTop: '20px', marginLeft: '270px' }}>
                        <img style={{alignItems:'right'}} src='/InstituteLogo.png'></img>

                    </div>

                </div>
            </footer>




        </>

    )
}

export default Home