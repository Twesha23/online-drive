import React from 'react';

class FolderHead extends React.Component{
    render(){
        let {folderName,numOfFolders,numOfFiles} = this.props;
        return (
            <div className="flex-grow-1 pa2">
                <h1>{folderName}</h1>
                <span>{numOfFolders} Folders, {numOfFiles} Files</span>
            </div>
        );
    }
}

export default FolderHead;