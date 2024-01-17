import React from 'react';
const Boots = () => {
    return (
        <>
        {/* for responsiveness increase/Decrease screen size  */}
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-1 col-md-6 col-sm-12 first'></div>  {/* col-lg-1 => when screen size is large col-1 will be selected, col-md-6 => when screen size is medium col-6 will be selected, col-sm-12 => when screen size is small col-12 will be selected*/}
                    <div className='col-lg-1 col-md-6 col-sm-12 sec'></div>
                    <div className='col-lg-1 col-md-6 col-sm-12 first'></div>
                    <div className='col-lg-1 col-md-6 col-sm-12 sec'></div>
                    <div className='col-lg-1 col-md-6 col-sm-12 first'></div>
                    <div className='col-lg-1 col-md-6 col-sm-12 sec'></div>
                    <div className='col-lg-1 col-md-6 col-sm-12 first'></div>
                    <div className='col-lg-1 col-md-6 col-sm-12 sec'></div>
                    <div className='col-lg-1 col-md-6 col-sm-12 first'></div>
                    <div className='col-lg-1 col-md-6 col-sm-12 sec'></div>
                    <div className='col-lg-1 col-md-6 col-sm-12 first'></div>
                    <div className='col-lg-1 col-md-6 col-sm-12 sec'></div>
                </div>
            </div>
        </>
    )
}
export default Boots
