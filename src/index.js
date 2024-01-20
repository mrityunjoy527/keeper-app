import React from "react";
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

ReactDOM.render(
    <div>
        <Header/>
        <Note/>
        <Footer/>
    </div>,
    document.getElementById("root"),
);