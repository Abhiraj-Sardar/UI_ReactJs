import React from 'react';
import './App.css';
import Prop from './components/Prop';

function App() {
  return (
    <div className="App">
        <div className='title'>
            <h1 className='text-center'>All Netflix Series Download From Here </h1>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-3 m-0 p-0'>
                    <Prop 
                      img = 'img/net1.jpeg'
                      name = 'Animal'
                      desc = 'This Is Bollywood Moview'
                      btn = 'Watch Now'
                      url = ''
                    />
                </div>
                <div className='col-12 col-md-3 m-0 p-0'>
                    <Prop 
                      img = 'img/net2.jpeg'
                      name = 'Animal'
                      desc = 'This Is Bollywood Moview'
                      btn = 'Watch Now'
                      url = ''
                    />
                </div>
                <div className='col-12 col-md-3 m-0 p-0'>
                    <Prop 
                      img = 'img/net3.jpeg'
                      name = 'Animal'
                      desc = 'This Is Bollywood Moview'
                      btn = 'Watch Now'
                      url = ''
                    />
                </div>
                <div className='col-12 col-md-3 m-0 p-0'>
                    <Prop 
                      img = 'img/net4.jpeg'
                      name = 'Animal'
                      desc = 'This Is Bollywood Moview'
                      btn = 'Watch Now'
                      url = ''
                    />
                </div>
            </div>

            <div className='row mb-5'>
                <div className='col-12 col-md-3 m-0 p-0'>
                    <Prop 
                      img = 'img/net5.jpeg'
                      name = 'Animal'
                      desc = 'This Is Bollywood Moview'
                      btn = 'Watch Now'
                      url = ''
                    />
                </div>
                <div className='col-12 col-md-3 m-0 p-0'>
                    <Prop 
                      img = 'img/net6.jpeg'
                      name = 'Animal'
                      desc = 'This Is Bollywood Moview'
                      btn = 'Watch Now'
                      url = ''
                    />
                </div>
                <div className='col-12 col-md-3 m-0 p-0'>
                    <Prop 
                      img = 'img/net7.jpeg'
                      name = 'Animal'
                      desc = 'This Is Bollywood Moview'
                      btn = 'Watch Now'
                      url = ''
                    />
                </div>
                <div className='col-12 col-md-3 m-0 p-0'>
                    <Prop 
                      img = 'img/net8.jpeg'
                      name = 'Animal'
                      desc = 'This Is Bollywood Moview'
                      btn = 'Watch Now'
                      url = ''
                    />
                </div>
            </div>
        </div>
    </div>
  );
}


export default App;
