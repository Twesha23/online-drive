import './App.css';
import React from 'react';
import { Container } from "react-bootstrap";
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import FolderHead from './components/FolderHead/FolderHead';
import AddFolder from './components/AddFolder/AddFolder';
import AddFile from './components/AddFile/AddFile';
import FolderContents from './components/FolderContents/FolderContents';
import SearchBox from './components/SearchBox/SearchBox';

const documents = {
  name: "Root Folder",
  folders: [],
  files: []
}

const initialState = {
  path:[{name:"Root Folder",parentFolder:"Root Folder"}],
  currFolderName: documents.name,
  parentFolderName: documents.name,
  numOfFolders: 0,
  numOfFiles: 0,
  currSubFolders: [],
  currSubFiles: [],
  searchField:''
};

class App extends React.Component {
  constructor(){
    super();
    this.state = initialState;
    let folders=documents.folders.filter(folder => folder.parentFolder === this.state.currFolderName);
    let files=documents.files.filter(file => file.parentFolder === this.state.currFolderName);
    this.setState({currSubFolders:folders});
    this.setState({currSubFiles:files});
  }


  onCreateNewFolder = (event) => {
    event.preventDefault();
    console.log("folder name:",event.target[0].value);
    const newFolder = {
      name: event.target[0].value,
      parentFolder: this.state.currFolderName,
    };
    documents.folders.push(newFolder);
    const currSubFolders = this.state.currSubFolders;
    currSubFolders.push(newFolder);
    this.setState({currSubFolders:currSubFolders});
    this.setState({numOfFolders:this.state.currSubFolders.length});
    console.log(documents);
  }

  onCreateNewFile = (event) => {
    event.preventDefault();
    console.log("File",event.target[0].value);
    const newFile ={
      name: event.target[0].value.split(".")[0],
      parentFolder: this.state.currFolderName,
      extension: event.target[0].value.split(".")[1]
    };
    documents.files.push(newFile);
    const currSubFiles = this.state.currSubFiles;
    currSubFiles.push(newFile);
    this.setState({currSubFiles:currSubFiles});
    this.setState({numOfFiles:this.state.currSubFiles.length});
    console.log(documents);
  }

  onRouteChange = (folder) => {
    //const folderName=changefolder.FolderName.name;
    if(folder.name===this.state.currFolderName){
      return;
    }
    console.log("Change Folder, name:",folder.name);
    let folders=documents.folders.filter(folder_el => folder_el.parentFolder === folder.name);
    let files=documents.files.filter(file => file.parentFolder === folder.name);
    let path = this.state.path;
    let i=path.length-1;
    while(path[i].name!==folder.name){
      path.pop();
      i--;
    }
    console.log("Path",path);
    this.setState({
      path: path,
      currFolderName: folder.name,
      parentFolderName: folder.parentFolder,
      numOfFolders: folders.length,
      numOfFiles: files.length,
      currSubFolders: folders,
      currSubFiles: files}
    );
    console.log("New state after route change",this.state);
    
  }

  onFolderClick = (folder) => {
    //const folderName=changefolder.FolderName.name;
    console.log("Change Folder, name:",folder);
    let folders=documents.folders.filter(f => f.parentFolder === folder.name);
    let files=documents.files.filter(file => file.parentFolder === folder.name);
    let path = this.state.path;
    path.push(folder);
    this.setState({
      path: path,
      currFolderName: folder.name,
      parentFolder: folder.parentFolder,
      numOfFolders: folders.length,
      numOfFiles: files.length,
      currSubFolders: folders,
      currSubFiles: files}
    );
    console.log("New state after route change",this.state);
    
  }

  onSearchChange = (event) => {
    console.log("Search",event);
    this.setState({ searchField: event.target.value })
  }

  onFileRename = (File,e) => {
    console.log("file for rename:",File,e);
    if(e)
    documents.files.find(f => f.name === File.name && f.extension === File.extension).name = e.target[0].value;
  }

  render (){
    let {path,currFolderName,numOfFolders,numOfFiles,currSubFolders,currSubFiles,searchField} = this.state;
    let folders=[];
    if(currSubFolders!==[])
      folders=currSubFolders.filter(folder => {console.log("lowercse",folder.name.toLowerCase(),searchField);return folder.name.toLowerCase().includes(searchField.toLowerCase());});
    let files=[];
    if(currSubFiles!==[])
      files=currSubFiles.filter(file => file.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return (
      <>
      <Container fluid>
      <Breadcrumbs path={path} onBackButtonClick={this.onBackButtonClick} onRouteChange={this.onRouteChange}/>
      <div className="bg-light-gray">
      <div className=" d-flex align-items-center">
        <FolderHead folderName={currFolderName} numOfFolders={numOfFolders} numOfFiles={numOfFiles}/>
        <AddFolder onCreateNewFolder={this.onCreateNewFolder}/>
        <AddFile onCreateNewFile={this.onCreateNewFile}/>
     </div>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <FolderContents folders={folders} files={files} onFolderClick={this.onFolderClick} onFileRename={this.onFileRename} numOfFolders={numOfFolders} numOfFiles={numOfFiles}/> 
        {console.log(this.state)}
       
      </div>
      </Container>
      </>
      );
  }
}

export default App;
