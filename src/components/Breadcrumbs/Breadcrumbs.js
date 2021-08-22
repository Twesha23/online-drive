import React from 'react';
import BackButton from '../../assets/Back.png';
import NextButton from '../../assets/Path.png';
import Logo from '../../assets/logo.png';
class Breadcrumbs extends React.Component{
    render(){
        let {path,onRouteChange} = this.props;
        let currPath = path.map((Folder,i) => {
            return ( <nav className="dib"> {i!==0 ?  <img src={NextButton} alt="Next" className="pa2"/> : ''}
                {i!==path.length-1 ? 
                    <span className="ma2 f2" key={i} onClick={() => onRouteChange(Folder)}>{Folder.name} </span>
                :   <span className="ma2 b f2" key={i} onClick={() => onRouteChange(Folder)}>{Folder.name} </span>}
                </nav> )
        });
        let prevFolder;
        if(path.length-2>=0){
            prevFolder = path[path.length-2];
        }
        else
            prevFolder = path[0];
        
        return (
            <div>
            <div className="pa2">
                <button className="back-button bn bg-white"  onClick={() => onRouteChange(prevFolder)}><img src={BackButton} alt="Back"  height="40px"/></button>
                <img src={Logo} alt="logo" className="ma2" height="50px"/>
                {currPath}
            </div>
            <hr></hr>
            </div>
        );
    }
}


export default Breadcrumbs;